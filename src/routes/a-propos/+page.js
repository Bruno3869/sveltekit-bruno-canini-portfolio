export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
      about: {
        title: "A propos",
        accroche: "Faites décoller votre business ! 🚀",
        description: "👋 Mon nom est Bruno Canini. Mon expertise comprend l'e-merchandising, le searchandising, l'U.X, la conversion et l'analyse des datas. Actuellement, je suis à la recherche d'opportunités sur Lyon et ses environs qui me permettront de développer vos ventes sur Internet.",
        contact: "Contactez-moi pour offrir de meilleures expériences digitales à vos clients !",
        texte_bouton: "Mon CV",
      }
    };
  }