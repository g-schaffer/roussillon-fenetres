const Stripe = require('stripe');

// Vérifier que la clé Stripe est définie
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY non définie');
  console.log('\n💡 Exécutez le script avec:');
  console.log('   STRIPE_SECRET_KEY=sk_... node scripts/update-prices-to-ttc.js');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

const PRODUCT_ID = 'prod_TPswS8rwS7zVVc';
const TVA_RATE = 0.20; // 20%

async function updatePricesToTTC() {
  try {
    console.log(`🔍 Récupération des prix pour le produit: ${PRODUCT_ID}\n`);

    // Récupérer TOUS les prix avec pagination
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

    const activePrices = allPrices.filter(p => p.active && p.unit_amount && p.nickname);
    console.log(`📦 ${activePrices.length} prix actifs trouvés\n`);

    console.log('⚠️  ATTENTION : Ce script va créer de NOUVEAUX prix TTC et désactiver les anciens prix HT.');
    console.log('⚠️  Les anciens prix resteront dans Stripe mais seront marqués comme inactifs.\n');

    console.log('Création des nouveaux prix TTC en cours...\n');
    // return; // SÉCURITÉ : décommenté pour exécuter

    let created = 0;
    let failed = 0;

    for (const oldPrice of activePrices) {
      const priceHT = oldPrice.unit_amount / 100;
      const priceTTC = Math.round(priceHT * (1 + TVA_RATE));
      const amountCentsTTC = priceTTC * 100;

      try {
        // Créer un nouveau prix TTC
        const newPrice = await stripe.prices.create({
          product: PRODUCT_ID,
          currency: 'eur',
          unit_amount: amountCentsTTC,
          nickname: oldPrice.nickname,
          tax_behavior: 'inclusive', // Prix TTC
        });

        // Désactiver l'ancien prix HT
        await stripe.prices.update(oldPrice.id, {
          active: false,
        });

        console.log(`✅ ${oldPrice.nickname}: ${priceHT}€ HT → ${priceTTC}€ TTC (${newPrice.id})`);
        created++;

      } catch (error) {
        console.error(`❌ Erreur pour ${oldPrice.nickname}: ${error.message}`);
        failed++;
      }
    }

    console.log(`\n📊 Résumé:`);
    console.log(`   ✅ ${created} prix TTC créés`);
    console.log(`   ❌ ${failed} erreurs`);
    console.log(`\n⚠️  N'oubliez pas de régénérer lib/stripe-prices.ts avec:`);
    console.log(`   STRIPE_SECRET_KEY=xxx node scripts/generate-stripe-mapping.js > lib/stripe-prices.ts`);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

updatePricesToTTC();
