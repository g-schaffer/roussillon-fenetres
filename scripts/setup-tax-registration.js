const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY non définie');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

async function setupTaxRegistration() {
  try {
    console.log('🔍 Création de l\'enregistrement fiscal pour la France...\n');

    // Créer l'enregistrement fiscal pour la France
    const registration = await stripe.tax.registrations.create({
      country: 'FR',
      country_options: {
        fr: {
          standard: {
            place_of_supply_scheme: 'small_seller',
          },
        },
      },
      active_from: Math.floor(Date.now() / 1000), // À partir de maintenant
    });

    console.log('✅ Enregistrement fiscal créé avec succès!');
    console.log('   Pays:', registration.country);
    console.log('   Status:', registration.status);
    console.log('   Type:', registration.country_options.fr.type);
    console.log('\n💡 La TVA française (20%) sera maintenant appliquée automatiquement!');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    console.log('\n⚠️  Si l\'erreur persiste, configurez manuellement via:');
    console.log('   https://dashboard.stripe.com/settings/tax/registrations');
  }
}

setupTaxRegistration();
