<script>
    import { onMount } from "svelte";
    import jQuery from 'jquery';


    let smallestSize = 991;
    let windowWidth;
    let navVisible = false;

    const setTopbar = () => {
        windowWidth = window.innerWidth;
        if (windowWidth > smallestSize) {
            document.getElementById("navbarItems").classList.remove("collapse");
            navVisible = false;
        } else {
            document.getElementById("navbarItems").classList.add("collapse");
            navVisible = true;
        }
    };

    onMount(setTopbar);
    addEventListener("resize", setTopbar);

    const handleButtonClick = () => {
        if (navVisible){
            document.getElementById("toggle-icon").classList.remove("fa-bars");
            document.getElementById("toggle-icon").classList.add("fa-x");
        } else {
            document.getElementById("toggle-icon").classList.remove("fa-x");
            document.getElementById("toggle-icon").classList.add("fa-bars");
        }
        navVisible = !navVisible;
    };
</script>

<nav class="navbar navbar-expand-lg bg-green-main sticky-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#Home">#18792</a>
      </div>
      <ul class="nav navbar-nav">
        {#if windowWidth <= smallestSize}
            <button on:click = {handleButtonClick} class = "btn text-light p-4 fs-5 d-flex justify-content-end"  data-bs-toggle = "collapse" data-bs-target = "#navbarItems">
                <i id = "toggle-icon" class="fa-solid fa-bars"></i>  
                          
            </button>
        {/if}
        <div class = " nav navbar-nav collapse" id = "navbarItems">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Outreach">Outreach</a></li>
            <li><a href="#Achievements">Achievements</a></li>
            <li><a href="#Members">Members</a></li>
            <li><a href="#RobotHistory">Robot History</a></li>
            <li><a href="#ContactUs" class = "bg-purple-main">Contact Us</a></li>
        </div>   
      </ul>
    </div>
  </nav>

  <style>
    a {
        color: white;
        height: 100%;
        text-decoration: none;
        padding: 1.5em;
        width: 175px;

        transition: 0.25s;
    }
    @media only screen and (min-width: 991px){
        a {
            width: fit-content !important;
        }
    }
    a:hover {
        background-color: white;
        color: #217F7E;
    }
    .bg-purple-main:hover {
        color: #685A8F;
    }

    li a {
        display: inline-block;
    }

    .navbar {
        padding: 0;
        width: 100%;
        float:right;
    }
  </style>