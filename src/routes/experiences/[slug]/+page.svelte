<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let { items } = data;
</script>

<svelte:head>
{#each items as item}
	<title>{item.metadata.seo_title}</title>
	<meta name="description" content="Description expériences" />
{/each}
</svelte:head>

<section id="works">
    <div class="container col-xxl-8 px-5 py-5">
          {#each items as item}
        <div class="row mb-3 px-3 py-1 border-bottom">
          <div class="col-md-10 themed-grid-col">
            <h3 class="{item.metadata.borderw_cssclass} fw-normal h3works">{item.title}</h3>
            <p class="col-md-12 fs-6 fst-italic fw-light">{@html item.metadata.description_entreprise}</p>
            <h4 class="fw-bold h3works">{@html item.metadata.libelle_poste}</h4>
            <p class="col-md-12 fs-6 lh-base">{@html item.content}
            </p>
            {@html item.metadata.bulle_competence}
          </div>
          <div class="col-md-2 themed-grid-col">
            <h5 class="fs-6 lh-base fw-lighter text-lg-center text-xl-center">{item.metadata.date_fin}<br>{item.metadata.date_debut}<br><svg
                version="1.0" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#42bdff" stroke="none">
                  <path
                    d="M92 210 c-12 -5 -27 -22 -33 -37 -8 -23 -5 -36 18 -82 15 -30 33 -56 40 -58 16 -6 66 84 66 119 0 47 -45 76 -91 58z m66 -22 c7 -7 12 -23 12 -36 0 -26 -38 -102 -52 -102 -12 0 -48 76 -48 103 0 12 5 28 12 35 15 15 61 15 76 0z" />
                  <path d="M100 150 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13 0 -20 -7 -20 -20z" />
                </g>
              </svg>{item.metadata.lieu}</h5>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <style>

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

</style>