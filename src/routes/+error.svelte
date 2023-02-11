<script>
  import { page } from '$app/stores';
</script>

<section id="error-text">
  <div class="px-4 py-2 my-4 text-justify">
      <div class="col-lg-7 mx-auto">
        <h1>{$page.status} : {$page.error.message}</h1>
        {#if $page.status === 404 }
        <p>Désolé... La page n'existe pas...</p>
        {:else if $page.status === 500 }
        <p>Désolé... La source de données est introuvable...</p>
        {:else}
        <p>Désolé... Une erreur s'est produite...</p>
        {/if}
      </div>
    </div>
  </section>