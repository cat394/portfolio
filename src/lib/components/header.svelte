<script>
  import { Twitter, Github, Instagram } from "lucide-svelte";
  import ContentsField from "$lib/components/utils/contentsField.svelte";
  import Toggle from "$lib/components/toggle.svelte";
</script>

<header>
  <ContentsField>
    <div class="vertical-item">
      <h1>Who is Ryo?</h1>
      <ul class="social-icons">
        <li><a href="https://twitter.com/RYO_378"><Twitter /></a></li>
        <li><a href="https://github.com/cat394"><Github /></a></li>
        <li><a href="https://www.instagram.com/ryo_33579/"><Instagram /></a></li>
      </ul>
      <Toggle />
    </div>
  </ContentsField>
</header>

<style>
  header {   
    background-color: var(--surface-4);
  }

  .vertical-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: var(--size-6);
  }

  .social-icons {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: var(--size-4);
  }
</style>