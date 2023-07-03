<script>
    import { onMount } from 'svelte';
    import Outreach from './lib/Pages/Outreach.svelte';
    import Achievements from './lib/Pages/Achievements.svelte';
    import Topbar from './lib/Topbar.svelte';
    import Home from './lib/Pages/Home.svelte';
    import Footer from './lib/Footer.svelte';

    const changePadding = () => {
      if (window.innerWidth <= 576){
        document.getElementById("Content").classList.remove("px-5");
        document.getElementById("Content").classList.add("px-4");
      } else {
        document.getElementById("Content").classList.remove("px-4");
        document.getElementById("Content").classList.add("px-5");

      }
    };
    onMount(changePadding);
    addEventListener("resize", changePadding);
</script>

<Topbar/>

<div class = "d-flex justify-content-center" >
  <div id = "Content" style = "padding-top: 2em;">
    <Home />
  
  </div>
</div>

<Footer />

<style>
  #Content {
    max-width: 85%;
  }
  @media only screen and (max-width: 800px){
    #Content {
    max-width: 95%;
  }
  }
</style>
