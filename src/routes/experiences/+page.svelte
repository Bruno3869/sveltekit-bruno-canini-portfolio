<script>
    export let data;
    const { objects } = data;
</script>

<svelte:head>
	<title>» Expériences professionnelles de Bruno Canini • E-commerce</title>
	<meta name="description" content="➤ Expériences professionnelles de Bruno Canini spécialiste E-commerce • E-merchandising • Moteur de recherche • AB Test • U.X • Conversions à Lyon" />
  <meta name="robots" content="index, follow" />
  <meta property="og:url" content="https://brunocanini/experiences/" />
  <meta property="og:site_name" content="Brunocanini.com" />
  <meta property="og:title" content="» Expériences professionnelles de Bruno Canini • E-commerce" />
  <meta property="og:description" content="➤ Expériences professionnelles de Bruno Canini spécialiste E-commerce • E-merchandising • Moteur de recherche • AB Test • U.X • Conversions à Lyon" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:type" content="article" />
  <meta property="og:article:author" content="Bruno Canini" />
  <meta property="og:article:section" content="Expériences professionnelles" />
</svelte:head>

<section id="works">
    <div class="container col-xxl-8 px-4 px-md-5 py-5">
      <h2 class="display-6 fw-bold fs-3 text-accent"><span class="rounded-full bg-back-subtle"><svg
            stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M365.47 18.727c-11.353-.18-21.053 7.365-24.786 20.058h-.002c-24.423-7.6-57.52-4.092-68.328 19.856-15.69-20.86-47.866-13.98-55.194 9.85-7.328 23.828 13.462 49.474 44.68 48.55-3.078 33.98 44.304 54.69 81.764 39.132-.473 19.307 8.312 41.853 30.37 44.97-6.395 18.11 3.104 42.047 28.614 42.047 31.47 0 38.024-36.316 21.025-53.145 9.474-10.39 12.832-25.167 11.096-39.13 17.282 12.104 34.59-6.52 33.767-20.08-1.516-24.97-20.366-35.97-33.768-24.3-8.8-27.616-37.243-32.007-52.562-16.353 1.35-7.425.2-13.105-5.255-19.274 22.605-5.702 18.913-37.698 4.68-46.904-5.44-3.517-10.942-5.195-16.102-5.277zm68.37 5.13c-22.7 0-22.882 34.655 0 34.655s22.7-34.655 0-34.655zM177.672 74.842c-22.7 0-22.882 34.654 0 34.654s22.7-34.654 0-34.654zm64.695 59.38c-1.695.06-3.792.895-5.877 2.887-4.765 4.554-8.11 13.804-1.814 24.216 1.365 2.257 2.837 4.486 4.408 6.672l-14.21 26.414-34.43 59.637-153.62 87.682-.008.006c-11.038 6.375-16.508 14.786-17.537 24.037-1.03 9.254 2.46 20.22 13.083 31.508 45.295 48.134 101.19 77.71 164.907 95.106 15.645 4.267 26.47 2.614 33.156-2.1 6.686-4.712 11.047-13.382 11.047-28.413v-.006l.214-177.61 38.008-65.832c-14.036-3.907-26.16-10.638-36.332-18.932l8.967-16.67c13.568 12.152 31.753 20.64 55.14 20.645 11.536-.03 18.363-7.457 20.046-13.542.84-3.044.414-5.247-.604-6.73-1.018-1.48-3.004-3.204-8.754-3.66-31.006-2.452-53.782-15.764-68.293-39.714-2.816-4.65-5-5.413-6.797-5.584-.224-.02-.46-.028-.7-.02zm234.053 39.305c-22.7 0-22.882 34.655 0 34.655s22.7-34.655 0-34.655zm-44.668 86.022c-35.27 0-35.553 53.837 0 53.837s35.27-53.838 0-53.838zm-235.256 8.337l9.367 16.172-136.506 79.06-.005.003c-4 2.31-4.756 3.894-5.043 5.127-.29 1.233-.127 3.423 1.852 7.027.543.988 1.228 2.044 2.024 3.15l-.416-.193c18.068 27.077 54.2 61.967 89.34 80.934-23.56-10.45-50.91-25.15-72.737-40.756C69.11 407.5 56.51 396.524 49.78 384.272c-3.363-6.124-5.332-13.14-3.673-20.262 1.66-7.123 6.93-13.046 13.9-17.07l136.49-79.053zm-88.068 88.87c18.55 6.4 52.894 25.26 80.154 46.013 13.63 10.375 25.305 20.885 32.086 31.998 3.022 4.952 5.264 10.303 5.2 16.203l-20.626-9.488c-9.495-11.61-23.806-22.776-35.75-29.517-24.435-17.28-54.436-33.15-67.16-37.54l6.096-17.667z">
            </path>
          </svg></span> Expériences professionnelles</h2>
          {#each objects as object}
      <a href="/experiences/{object.slug}/" class="works px-3">
        <div class="row mb-3 px-3 py-1 hover-works">
          <div class="col-md-10 themed-grid-col">
            <h3 class="{object.metadata.borderw_cssclass} fw-normal h3works">{object.title}</h3>
            <p class="col-md-12 fs-6 fst-italic fw-light">{@html object.metadata.description_entreprise}</p>
            <h4 class="fw-bold h3works">{@html object.metadata.libelle_poste}</h4>
            <p class="col-md-12 fs-6 lh-base">{@html object.metadata.descriptif_poste_page_accueil}
              <br><span class="spanensapl fw-bold"> ⚡En savoir plus...⚡</span>
            </p>
            {@html object.metadata.bulle_competence}
          </div>
          <div class="col-md-2 themed-grid-col">
            <h5 class="fs-6 lh-base fw-lighter text-lg-center text-xl-center">{object.metadata.date_fin}<br>{object.metadata.date_debut}<br><svg
                version="1.0" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#42bdff" stroke="none">
                  <path
                    d="M92 210 c-12 -5 -27 -22 -33 -37 -8 -23 -5 -36 18 -82 15 -30 33 -56 40 -58 16 -6 66 84 66 119 0 47 -45 76 -91 58z m66 -22 c7 -7 12 -23 12 -36 0 -26 -38 -102 -52 -102 -12 0 -48 76 -48 103 0 12 5 28 12 35 15 15 61 15 76 0z" />
                  <path d="M100 150 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13 0 -20 -7 -20 -20z" />
                </g>
              </svg>{object.metadata.lieu}</h5>
          </div>
        </div>
      </a>
      {/each}
    </div>
  </section>

  <section id="seo-text">
  <div class="px-4 py-2 my-2 text-justify">
      <div class="col-lg-7 mx-auto">
        <p class="fs-6 fw-light lh-sm"><p>Le <strong>e-commerce</strong> ou <strong>commerce &eacute;lectronique</strong> transforme la fa&ccedil;on dont les entreprises fonctionnent, qu&#39;il s&#39;agisse d&#39;<strong>Akeneo PIM</strong> pour la gestion des informations sur les produits, du <strong>SEO</strong> pour l&#39;optimisation des moteurs de recherche, de <strong>Photoshop</strong> pour l&#39;&eacute;dition d&#39;images ou de <strong>Google Analytics</strong> pour le suivi des performances des sites ou applications, il existe de nombreuses solutions qui facilitent plus que jamais la mise en place d&#39;une boutique en ligne ! Pour des solutions plus avanc&eacute;es telles que les <strong>tests A/B</strong> avec <strong>AB Tasty</strong> ou le <strong>searchandising</strong> (optimisation de la visibilit&eacute; des produits&nbsp;sur le&nbsp;moteur&nbsp;de recherche) avec <strong>Sensefuel</strong> ces outils demandent des comp&eacute;tences avanc&eacute;es. La solution <strong>ContentSquare</strong> fournit des informations pr&eacute;cieuses sur le <strong>comportement</strong> et le <strong>parcours des utilisateurs</strong>, ce qui aide &agrave; optimiser votre site en cons&eacute;quence. <strong>Magento 2</strong> a r&eacute;cemment fait son entr&eacute;e sur la sc&egrave;ne avec sa puissante plate-forme offrant des fonctionnalit&eacute;s telles que la notation des produits en fonction des &eacute;valuations et des avis des clients, ainsi que des mod&egrave;les de templates HTML. Enfin, si vous &ecirc;tes int&eacute;ress&eacute; par l&#39;&eacute;volution de votre site <strong>Web</strong> ou <strong>applications</strong>, les comp&eacute;tences de <strong>chef de projets</strong> aident &agrave; suivre les d&eacute;veloppements en cours et les &eacute;volutions au sein de votre boutique en ligne, permettant aux &eacute;quipes de rester organis&eacute;es et efficaces tout en travaillant ensemble vers le succ&egrave;s ! Dans l&#39;ensemble, l&#39;<strong>e-commerce</strong> poursuit sa croissance rapide (<strong>+13% en 2021</strong>), offrant de nombreuses opportunit&eacute;s aux petites et grandes entreprises, quelle que soit la taille de votre entreprise ou de votre secteur d&#39;activit&eacute;, cette technologie continuera &agrave; r&eacute;volutionner la vente sur Internet aujourd&#39;hui et demain !</p>
      </div>
    </div>
  </section>

  <style>

  h2,
  h3,
  h4,
  p {
    color: var(--color-fore-primary);
  }
  
  h5 {
    color: var(--color-fore-subtle);
  }

  .text-accent {
    color: var(--color-accent);
  }

  .bulle {
    color: var(--color-fore-subtle);
  }

</style>