<script lang="ts">
  import Container from "$lib/components/utils/container.svelte";
	import ContentsField from "$lib/components/utils/contentsField.svelte";
  import DelayedFly from "$lib/components/utils/delayedFly.svelte";
  import Nav from "$lib/components/nav.svelte";

  let show = false;

  const navigationShow = () => show = true;
</script>

<Container cover verticalCenter>
  <ContentsField>
    <DelayedFly on:introend={navigationShow}>
      <h2>Hello I'm...</h2>
    </DelayedFly>
    <div class="fadein" class:show>
      <Nav />
    </div>
  </ContentsField>
</Container>

<style>
  h2 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--size-8);
  }

  .fadein {
    opacity: 0;
    transition: opacity 1s;
  }

  .show {
    opacity: 1;
  }
</style>
