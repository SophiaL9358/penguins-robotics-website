<script>
    import { onMount } from 'svelte';
    import Outreach from './lib/Pages/Outreach.svelte';
    import Achievements from './lib/Pages/Achievements.svelte';
    import Topbar from './lib/General/Topbar.svelte';
    import Home from './lib/Pages/Home.svelte';
    import Footer from './lib/General/Footer.svelte';
    import { pageOn } from './lib/globalVars';
    import ContactUs from './lib/Pages/ContactUs.svelte';

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

    $: if (document.getElementById("Home") != null && $pageOn != "") {
      const page_ids = ["Home", "Outreach", "Achievements", "Contact Us"];

      page_ids.forEach((page_id) => {
        document.getElementById(page_id).style.display = "none";
      });
      if (page_ids.indexOf($pageOn) != -1){
        document.getElementById($pageOn).style.display = "block";
      } else {
        document.getElementById("Home").style.display = "block";
      }
    }

</script>

<div id = "top"></div>
<Topbar/>

<div class = "d-flex justify-content-center" >
  <div id = "Content" style = "padding-top: 2em;">
    <div id = "Home">
      <Home />
    </div>
    <div id = "Outreach">
      <Outreach />
    </div>
    <div id = "Achievements">
      <Achievements />
    </div>
    <div id = "Contact Us">
      <ContactUs />
    </div>

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
