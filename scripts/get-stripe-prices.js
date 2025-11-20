const Stripe = require('stripe');

// Vérifier que la clé Stripe est définie
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY non définie');
  console.log('\n💡 Exécutez le script avec:');
  console.log('   STRIPE_SECRET_KEY=sk_... node scripts/get-stripe-prices.js');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

const PRODUCT_ID = 'prod_TPswS8rwS7zVVc';

async function getAllPrices() {
  try {
    console.log(`🔍 Récupération des prix pour le produit: ${PRODUCT_ID}\n`);

    // Récupérer d'abord les infos du produit
    const product = await stripe.products.retrieve(PRODUCT_ID);
    console.log('📦 Produit:', product.name);
    console.log('   Description:', product.description || 'N/A');
    console.log('   Actif:', product.active ? 'Oui' : 'Non');
    console.log('');

    // Récupérer TOUS les prix avec pagination
    let allPrices = [];
    let hasMore = true;
    let startingAfter = undefined;

    console.log('⏳ Récupération des prix avec pagination...\n');

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
        console.log(`   Récupéré ${allPrices.length} prix...`);
      }
    }

    console.log(`\n💰 ${allPrices.length} prix trouvé(s) au total:\n`);

    allPrices.forEach((price, index) => {
      console.log(`--- Prix #${index + 1} ---`);
      console.log(`ID: ${price.id}`);
      console.log(`Type: ${price.type}`);
      console.log(`Actif: ${price.active ? 'Oui' : 'Non'}`);

      if (price.unit_amount !== null) {
        const amount = price.unit_amount / 100;
        console.log(`Montant: ${amount} ${price.currency.toUpperCase()}`);
      } else {
        console.log(`Montant: Personnalisé`);
      }

      if (price.recurring) {
        console.log(`Récurrent: ${price.recurring.interval}`);
      } else {
        console.log(`Récurrent: Non (paiement unique)`);
      }

      if (price.nickname) {
        console.log(`Surnom: ${price.nickname}`);
      }

      console.log('');
    });

    // Afficher un résumé au format JSON pour copier-coller facilement
    console.log('\n📋 Résumé JSON:');
    console.log(JSON.stringify(allPrices.map(p => ({
      id: p.id,
      active: p.active,
      amount: p.unit_amount ? p.unit_amount / 100 : 'custom',
      currency: p.currency,
      nickname: p.nickname,
      type: p.type,
      recurring: p.recurring ? p.recurring.interval : 'one-time'
    })), null, 2));

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    if (error.type === 'StripeAuthenticationError') {
      console.error('\n⚠️  Vérifiez que STRIPE_SECRET_KEY est défini dans votre .env.local');
    }
  }
}

getAllPrices();
