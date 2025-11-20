const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY non définie');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

const PRODUCT_ID = 'prod_TPswS8rwS7zVVc';

// Ces prix sont les NOUVEAUX prix TTC que nous voulons GARDER
const KEEP_PRICE_IDS = [
  "price_1SVeRvQtVyzokKYdwcMLi32q", // 2350x1600
  "price_1SVeRuQtVyzokKYdfxIuMvnR", // 2350x1500
  "price_1SVeRtQtVyzokKYdx6ahId5m", // 2350x1400
  // ... (tous les prix commençant par price_1SVe...)
];

async function cleanupOldPrices() {
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

    // Séparer les prix à garder et à désactiver
    const pricesToKeep = allPrices.filter(p => p.id.startsWith('price_1SVe') && p.active);
    const pricesToDeactivate = allPrices.filter(p => !p.id.startsWith('price_1SVe') && p.active);

    console.log(`✅ ${pricesToKeep.length} prix TTC à GARDER (price_1SVe...)`);
    console.log(`❌ ${pricesToDeactivate.length} anciens prix à DÉSACTIVER\n`);

    if (pricesToDeactivate.length === 0) {
      console.log('✅ Aucun prix à désactiver !');
      return;
    }

    console.log('⚠️  Désactivation des anciens prix en cours...\n');

    let deactivated = 0;
    let failed = 0;

    for (const price of pricesToDeactivate) {
      try {
        await stripe.prices.update(price.id, {
          active: false,
        });
        console.log(`✅ Désactivé: ${price.id} (${price.nickname || 'sans nom'})`);
        deactivated++;
      } catch (error) {
        console.error(`❌ Erreur pour ${price.id}: ${error.message}`);
        failed++;
      }
    }

    console.log(`\n📊 Résumé:`);
    console.log(`   ✅ ${deactivated} prix désactivés`);
    console.log(`   ❌ ${failed} erreurs`);
    console.log(`   🎯 ${pricesToKeep.length} prix TTC actifs restants`);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

cleanupOldPrices();
