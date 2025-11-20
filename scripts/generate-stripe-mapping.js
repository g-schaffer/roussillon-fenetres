const Stripe = require('stripe');

// Vérifier que la clé Stripe est définie
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY non définie');
  console.log('\n💡 Exécutez le script avec:');
  console.log('   STRIPE_SECRET_KEY=sk_... node scripts/generate-stripe-mapping.js');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

const PRODUCT_ID = 'prod_TPswS8rwS7zVVc';

async function generateMapping() {
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

    console.log(`💰 ${allPrices.length} prix trouvé(s)\n`);

    // Filtrer les prix actifs
    const activePrices = allPrices.filter(p => p.active && p.unit_amount && p.nickname);
    console.log(`✅ ${activePrices.length} prix actifs avec nickname\n`);

    // Trier par nickname
    activePrices.sort((a, b) => {
      const [aH, aL] = a.nickname.split('x').map(Number);
      const [bH, bL] = b.nickname.split('x').map(Number);
      if (aH !== bH) return bH - aH; // Hauteur décroissante
      return bL - bL; // Largeur décroissante
    });

    // Générer le mapping des price IDs
    console.log('// Mapping des dimensions vers les price IDs Stripe');
    console.log('// Format: "HauteurxLargeur" -> price_id');
    console.log('export const PRICE_MAPPING: Record<string, string> = {');
    activePrices.forEach(price => {
      console.log(`  "${price.nickname}": "${price.id}",`);
    });
    console.log('};\n');

    // Générer le mapping des prix
    console.log('// Mapping des prix en euros (pour affichage sur la page produit)');
    console.log('export const PRICE_AMOUNTS: Record<string, number> = {');
    activePrices.forEach(price => {
      const amount = price.unit_amount / 100;
      console.log(`  "${price.nickname}": ${amount},`);
    });
    console.log('};\n');

    // Générer les fonctions helper
    console.log(`/**
 * Trouve le price ID Stripe correspondant aux dimensions données
 * @param hauteur Hauteur en mm
 * @param largeur Largeur en mm
 * @returns Le price ID Stripe ou null si non trouvé
 */
export function findPriceId(hauteur: string | number, largeur: string | number): string | null {
  const key = \`\${hauteur}x\${largeur}\`;
  return PRICE_MAPPING[key] || null;
}

/**
 * Trouve le prix en euros correspondant aux dimensions données
 * @param hauteur Hauteur en mm
 * @param largeur Largeur en mm
 * @returns Le prix en euros ou null si non trouvé
 */
export function findPrice(hauteur: string | number, largeur: string | number): number | null {
  const key = \`\${hauteur}x\${largeur}\`;
  return PRICE_AMOUNTS[key] || null;
}

/**
 * Obtient les dimensions disponibles
 * @returns Liste des dimensions disponibles au format "HxL"
 */
export function getAvailableDimensions(): string[] {
  return Object.keys(PRICE_MAPPING);
}

/**
 * Obtient les plages de dimensions disponibles
 * @returns Object avec min/max pour hauteur et largeur
 */
export function getDimensionRanges() {
  const dimensions = Object.keys(PRICE_MAPPING).map(key => {
    const [h, l] = key.split('x').map(Number);
    return { hauteur: h, largeur: l };
  });

  const hauteurs = [...new Set(dimensions.map(d => d.hauteur))].sort((a, b) => a - b);
  const largeurs = [...new Set(dimensions.map(d => d.largeur))].sort((a, b) => a - b);

  return {
    hauteur: { min: hauteurs[0], max: hauteurs[hauteurs.length - 1], values: hauteurs },
    largeur: { min: largeurs[0], max: largeurs[largeurs.length - 1], values: largeurs },
  };
}
`);

    console.error(`\n✅ Génération terminée! Copiez la sortie dans lib/stripe-prices.ts`);
    console.error(`📊 ${activePrices.length} prix générés\n`);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    if (error.type === 'StripeAuthenticationError') {
      console.error('\n⚠️  Vérifiez que STRIPE_SECRET_KEY est défini dans votre .env.local');
    }
  }
}

generateMapping();
