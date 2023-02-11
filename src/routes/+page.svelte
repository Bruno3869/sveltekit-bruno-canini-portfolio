<script>
	  import avatar_bruno from '$lib/images/avatar/avatar-bruno.jpg';
    import cv_bruno from '$lib/documents/cv-bruno-canini.pdf';
    export let data;
    const { competences_liste } = data;
    const { objects } = data;
</script>

<svelte:head>
	<title>{data.meta_title}</title>
	<meta name="description" content={data.meta_description} />
  <meta name="robots" content={data.meta_robots} />
  <meta property="og:url" content="https://brunocanini" />
  <meta property="og:site_name" content="Brunocanini.com" />
  <meta property="og:title" content={data.meta_title} />
  <meta property="og:description" content={data.meta_description} />
  <meta property="og:locale" content="fr_FR" />
</svelte:head>

<section id="about">
    <div class="container col-xxl-8 px-4 py-4">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
        <div class="col-5 col-sm-5 col-lg-5">
          <img class="mx-auto d-block rounded-circle" src={avatar_bruno} alt="avatar Bruno Canini" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">{data.titre_poste}</h1>
          <p class="lead">{@html data.accroche_poste}</p>
          <div class="d-grid gap-2 d-flex justify-content-md-start">
            <a href={cv_bruno} type="button" class="btn btn-outline-light me-2 btn-border" target="_blank" rel="noreferrer"><svg stroke="currentColor"
                fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z">
                </path>
              </svg> {data.texte_bouton}</a>
            <span class="gap gap-x-5"><a href="mailto:bruno.canini@gmail.com" class="group cursor-pointer"
                aria-label="Email" title="Email"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                  class="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z">
                  </path>
                </svg></a><a href="https://github.com/Bruno3869" target="_blank" rel="noreferrer" class="group cursor-pointer"
                aria-label="Github" title="Github"><svg stroke="currentColor" fill="none" stroke-width="2"
                  viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg></a><a href="https://www.linkedin.com/in/brunocanini" target="_blank" rel="noreferrer"
                class="group cursor-pointer" aria-label="Linkedin" title="Linkedin"><svg stroke="currentColor"
                  fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                  class="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg></a></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about-me">
    <div class="container col-xxl-8 px-4 px-md-5 py-5">
      <h2 class="border-b display-6 fw-normal">A propos</h2>
      <p class="col-md-12 fs-6 lh-base">{@html data.a_propos_texte}</p>
      <p class="col-md-12 fs-6 lh-base">{@html data.a_propos_competences}</p>
      <a class="text-accent moved" href="/a-propos/"><span class="mr-1"><svg stroke="currentColor" fill="currentColor"
            stroke-width="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg></span>En savoir plus
      </a>
    </div>
  </section>

  <section id="toolbox">
    <div class="container col-xxl-8 px-4 px-md-5 py-5">
      <h2 class="display-6 fw-bold fs-3 text-accent text-nowrap"><span class="rounded-full bg-back-subtle"><svg
            stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M94.09 57L33 209.7V327h174V217h-87c-23.75 0-41-23-41-49s17.25-49 41-49h50.7l-24.8-62zm272.01 0L305 209.7V489h174V209.7L417.9 57zm25.9 62c23.8 0 41 23 41 49s-17.2 49-41 49-41-23-41-49 17.2-49 41-49zm-272 18c-11.6 0-23 12.8-23 31s11.4 31 23 31h169.9l24.8-62zm272 0c-11.6 0-23 12.8-23 31s11.4 31 23 31 23-12.8 23-31-11.4-31-23-31zM33 345v144h254V345z">
            </path>
          </svg></span> Compétences techniques</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {#each competences_liste as competence_liste }
          <div class="col d-flex align-items-start">
            {@html competence_liste.logo}
            <div>
              <h3 class="fw-bold mb-0 fs-4">{competence_liste.titre}</h3>
              <p>{@html competence_liste.description}</p>
            </div>
          </div>
          {/each}
      </div>
    </div>
  </section>

<section id="works">
    <div class="container col-xxl-8 px-4 px-md-5 py-3">
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

  <section id="get-in-touch">
    <div class="px-4 py-5 my-4 text-center">
      <h2 class="display-6 fw-bold fs-3 text-accent"><span class="rounded-full bg-back-subtle"><svg
            stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M287.72 18.813l-65.314 84.25-56.094-59.907-22.437 71.25-68.156-22.25 36.343 77.125-82.688 30.282 74.75 54.907-84.78 85.968 95.436 9.906-39.03 90.312 108.063-35.094 4.156 90.594 68.53-70.406 48.72 58.156 26.967-61.937 84.22 54.124-17.97-89.125 71.938 20.81-36.906-79.5 61.5-9.467-44.75-50.094 41.905-42.658L441.97 213.5 477 131.437l-96.53 27.438 23.655-91.78-95.594 62.468-20.81-110.75zm-119.94 146.5c105.715 3.01 184.245 43.667 252 101.843l-179.842 13.72-72.157-115.563zm-15.593 10.312l44.907 71.875-75.28 36 30.374-107.875zm54.875 87.844l20.032 32.092 3 4.813 5.625-.438 48.593-3.718 31.375 80.624c-47.482-31.943-113.61-65.86-190.313-74.344l81.688-39.03zm212.125 22.436l-82.093 94.5-33.344-85.656 115.438-8.844z">
            </path>
          </svg></span> Contactez-moi</h2>
      <div class="col-lg-6 mx-auto">
        <p class="mb-4 fs-6 lh-base">Je suis à la recherche de nouvelles opportunités et d'une équipe géniale avec
          laquelle travailler !</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="mailto:bruno.canini@gmail.com" aria-label="Email" title="bruno.canini@gmail.com" type="button" class="btn btn-primary btn-lg px-4 gap-3 btn-fill-one">📧 Envoyez un message
            !</a>
        </div>
      </div>
    </div>
  </section>

  <section id="seo-text">
  <div class="px-4 py-2 my-4 text-justify">
      <div class="col-lg-7 mx-auto">
        <p class="fs-6 fw-light lh-sm"><p>Le <strong>e-commerce</strong> ou <strong>commerce &eacute;lectronique</strong> est un excellent moyen d&#39;atteindre plus de clients et d&#39;augmenter vos ventes. Avec les bonnes strat&eacute;gies, vous pouvez tirer parti du canal Web et assurer &agrave; votre entreprise une longeur d&#39;avance sur la concurrence. L&#39;un des &eacute;l&eacute;ments cl&eacute;s de la r&eacute;ussite du <strong>e-commerce</strong> est le <strong>e-merchandising</strong> : il s&#39;agit de s&#39;assurer que les produits soient pr&eacute;sent&eacute;s de mani&egrave;re ordonn&eacute;s et bien visibles sur les sites Web ou Applications afin d&#39;attirer l&#39;attention des acheteurs potentiels. Les <strong>A/B tests</strong> sont &eacute;galement importants, car ils vous permettent de comparer diff&eacute;rentes pr&eacute;sentations de produits ou design de pages Web afin de d&eacute;terminer celles qui fonctionnent le mieux pour g&eacute;n&eacute;rer des <strong>conversions</strong>. En outre, le <strong>searchandising</strong> permet de s&#39;assurer que les acheteurs trouvent facilement ce qu&#39;ils cherchent depuis le <strong>moteur de recherche</strong>, en optimisant les mots-cl&eacute;s associ&eacute;s &agrave; chaque produit et en tenant compte des pr&eacute;f&eacute;rences clients ou des tendances de&nbsp;recherches au fil du temps. En tirant parti de ces outils disponibles aujourd&#39;hui, tels que le <strong>e-merchandising</strong>, le <strong>searchandising</strong>, les <strong>tests A/B</strong> et la <strong>Web analyse</strong>, vous serez en mesure de r&eacute;ussir sur le Web dans un march&eacute; du <strong>e-commerce</strong> en pleine croissance. Alors pourquoi ne pas commencer &agrave; tirer parti de ces technologies d&egrave;s aujourd&#39;hui ?</p>
      </div>
    </div>
  </section>

<style>

  h1,
  h2,
  h3,
  h4,
  p {
    color: var(--color-fore-primary);
  }
  
  h5 {
    color: var(--color-fore-subtle);
  }

  .btn-border {
    border-width: 2px;
    border-color: var(--color-accent);
    padding: 0.25rem 1rem 0.25rem 1rem;
  }
  
  .btn-border:hover {
    color: var(--color-accent);
    background-color: var(--color-back-primary);
    border-width: 2px;
    border-color: var(--color-accent);
  }

  .text-accent {
    color: var(--color-accent);
  }

  .bulle {
    color: var(--color-fore-subtle);
  }

  .bulle:hover {
    color: var(--color-fore-secondary);
  }

  .rounded-pill {
    border-radius: 50rem!important;
  }

</style>

