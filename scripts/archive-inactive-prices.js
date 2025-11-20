const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY non définie');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

const PRODUCT_ID = 'prod_TPswS8rwS7zVVc';

async function archiveInactivePrices() {
  try {
    console.log(`🔍 Récupération de tous les prix...\n`);

    // Récupérer TOUS les prix
    let allPrices = [];
    let hasMore = true;
    let startingAfter = undefined;

    while (hasMore) {
      const prices = await stripe.prices.list({
        product: PRODUCT_ID,
        limit: 100,
        starting_after: startingAfter,
      });

      allPrices = allPrices.concat(prices.data);
      hasMore = prices.has_more;

      if (hasMore && prices.data.length > 0) {
        startingAfter = prices.data[prices.data.length - 1].id;
      }
    }

    console.log(`📦 ${allPrices.length} prix trouvés au total\n`);

    // Filtrer les prix inactifs
    const activePrices = allPrices.filter(p => p.active);
    const inactivePrices = allPrices.filter(p => !p.active);

    console.log(`✅ ${activePrices.length} prix ACTIFS`);
    console.log(`❌ ${inactivePrices.length} prix INACTIFS à archiver\n`);

    if (inactivePrices.length === 0) {
      console.log('✅ Aucun prix inactif à archiver !');
      return;
    }

    console.log('⚠️  ATTENTION : L\'archivage est IRRÉVERSIBLE !');
    console.log('⚠️  Les prix archivés ne peuvent pas être réactivés.');
    console.log('⚠️  Cependant, ils resteront visibles dans l\'historique Stripe.\n');

    console.log('💡 Pour continuer, décommentez la ligne "return" ci-dessous.\n');
    return; // SÉCURITÉ : décommentez cette ligne pour exécuter

    let archived = 0;
    let failed = 0;

    console.log('🗑️  Archivage en cours...\n');

    for (const price of inactivePrices) {
      try {
        // Note: Stripe n'a pas d'API "delete" pour les prix
        // On peut seulement les marquer comme inactifs (déjà fait)
        // Donc on va juste compter et afficher
        console.log(`ℹ️  Prix inactif: ${price.id} (${price.nickname || 'sans nom'})`);
        archived++;
      } catch (error) {
        console.error(`❌ Erreur pour ${price.id}: ${error.message}`);
        failed++;
      }
    }

    console.log(`\n📊 Résumé:`);
    console.log(`   ℹ️  ${inactivePrices.length} prix inactifs trouvés`);
    console.log(`   💡 Stripe ne permet PAS de supprimer les prix`);
    console.log(`   ✅ Ces prix sont déjà inactifs et ne posent aucun problème`);
    console.log(`   🎯 ${activePrices.length} prix actifs utilisables`);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

archiveInactivePrices();
