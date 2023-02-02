<script>
    import avatar_bruno_about from '$lib/images/avatar/avatar-bruno-about.jpg';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>Expériences professionnelles de Bruno Canini E-commerce • E-merchandising</title>
	<meta name="description" content="Expériences professionnelles de Bruno Canini spécialiste E-commerce • E-merchandising • Moteur de recherche • AB Test • U.X • Conversions à Lyon" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<section id="about-me">
      <div class="container col-xxl-8 px-4 py-3">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 px-4">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={avatar_bruno_about} class="d-block mx-lg-auto img-fluid rounded-3" alt="A propos de Bruno Canini" width="300"
              height="300" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">{data.about.title}</h1>
            <p class="lead">{data.about.accroche}</p>
            <p class="lead">{@html data.about.description}</p>
            <p class="lead">{data.about.contact}</p>
            <div class="d-grid gap-2 d-flex justify-content-md-start pt-4">
              <button type="button" class="btn btn-outline-light me-2 btn-border"><svg stroke="currentColor"
                  fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z">
                  </path>
                </svg> {data.about.texte_bouton}</button>
              <span class="gap gap-x-5"><a href="mailto:bruno.canini@gmail.com" class="group cursor-pointer" aria-label="Email"
                  title="Email"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    class="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z">
                    </path>
                  </svg></a><a href="https://github.com/Bruno3869" target="_blank" rel="noreferrer" class="group cursor-pointer" aria-label="Github"
                  title="Github"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform">
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                  </svg></a><a href="https://www.linkedin.com/in/brunocanini" target="_blank" rel="noreferrer" class="group cursor-pointer" aria-label="Linkedin" title="Linkedin"><svg
                    stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    class="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg></a></span>
            </div>
          </div>
          <div class="container col-xxl-12">
            <hr class="border-bottom">
          </div>
        </div>
      </div>
    </section>

<style>

  h1,
  p {
    color: var(--color-fore-primary);
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

</style>
