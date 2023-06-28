<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Sidebar from './lib/Sidebar.svelte';
    import { onMount } from 'svelte';
    import AboutUs from './lib/Pages/AboutUs.svelte';
    import Outreach from './lib/Pages/Outreach.svelte';
    import Achievements from './lib/Pages/Achievements.svelte';

  onMount (() => {
    resizePage();
  });

  let content;

  const resizePage = () => {if (window.innerWidth > 800 && content != undefined){
    content.style.marginLeft = "15em";
  } else  if (content != undefined) {
    content.style.marginLeft = "0em";
  }}
  addEventListener("resize", resizePage);
  
</script>

<main>
  {#if content != undefined && content.style.marginLeft == "15em"}
    <Sidebar/>
    
  {/if}

  <div bind:this = {content} id = "content">
    <p class = "display-6">*IN DEVELOPMENT STAGE CURRENT*</p>
    <p>MADE WITH: Svelte + Boostrap!</p>
    <AboutUs />
    <br><br><br>
    <Outreach />
    <br><br><br>
    <Achievements />
  </div>
  
</main>

<style>
  #content {
    padding: 3em;
  }

</style>
