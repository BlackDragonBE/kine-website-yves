<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

    // children is een speciale Svelte 5 prop voor geneste inhoud
    let { children } = $props();
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>

<div class="layout">
  <Navbar />
  <main>{@render children()}</main>
  <Footer />
</div>