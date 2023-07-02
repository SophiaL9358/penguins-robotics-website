<script>
    import { onMount } from "svelte";
    import jQuery from 'jquery';


    let smallestSize = 991;
    let windowWidth;
    let windowHeight;
    let navVisible = false;

    const setTopbar = () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        if (windowWidth > smallestSize) {
            document.getElementById("collapseNav").classList.remove("collapse");
            document.getElementById("collapseNav").classList.add("d-none");
            document.getElementById("collapseNav").classList.remove("show");
        } else {
            document.getElementById("collapseNav").classList.add("collapse");
            document.getElementById("collapseNav").classList.remove("d-none");
        }
        document.getElementById("collapseNav").style.maxHeight = String(windowHeight - document.getElementById("navbar").offsetHeight) +"px";
    };

    onMount(setTopbar);
    addEventListener("resize", setTopbar);

    let button;
    const handleClick = () => {
        let navbar = document.getElementById('collapseNav');
        let navHeight = document.getElementById('collapseNav').style.height;
        if (navHeight != '') { // nav is visible
            document.getElementById("toggle-icon").classList.remove("fa-bars");
            document.getElementById("toggle-icon").classList.add("fa-x");

        } else { // nav is not visible
            document.getElementById("toggle-icon").classList.add("fa-bars");
            document.getElementById("toggle-icon").classList.remove("fa-x");
        }
    };
</script>
<div class = "sticky-top">
    <nav class="navbar navbar-expand-lg bg-green-main" id = "navbar">
        <div class="container-fluid p-0">
        <div class="navbar-header ms-4 float-left">
            <img style = "width: 50px;" src = "https://www.allaboutbirds.org/guide/assets/photo/308074031-480px.jpg" alt="Pigeon Bot Logo">
            <span class="navbar-brand text-light fs-5">#18792</span>
        </div>
        
        <ul class="nav navbar-nav">
            {#if windowWidth <= smallestSize}
                    <button bind:this = {button} on:click = {handleClick} class = "btn text-light py-3 px-4 fs-5" data-bs-toggle = "collapse" data-bs-target = "#collapseNav">
                        <i id = "toggle-icon" class="fa-solid fa-bars"></i>       
                    </button>
            {:else}
                <div class = "navbar-nav">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Outreach">Outreach</a></li>
                    <li><a href="#Achievements">Achievements</a></li>
                    <li><a href="#Members">Members</a></li>
                    <li><a href="#RobotHistory">Robot History</a></li>
                    <li><a href="#ContactUs" class = "bg-purple-main">Contact Us</a></li>
                </div>  
            {/if}
            
        </ul>
        </div>
        
    </nav>
<div class = "container-fluid row">
    <!-- Collapsible navbar (when screen is too small) -->
    <div class = "navbar-nav collapse ps-4 bg-green-main-90 position-absolute w-100 m-0" style = "overflow-y:scroll;" id = "collapseNav" >
            <li><a href="#Home">Home</a></li>
            <li><a href="#Outreach">Outreach</a></li>
            <li><a href="#Achievements">Achievements</a></li>
            <li><a href="#Members">Members</a></li>
            <li><a href="#RobotHistory">Robot History</a></li>
            <li><a href="#ContactUs">Contact Us</a></li>
        </div> 
    </div>
</div>
  <style>
    #collapseNav > li >a {
        width: 100vw;
        text-decoration: underline 0.15em rgba(0,0,0,0);
        transition: text-decoration-color 300ms;
    }
    #collapseNav > li >a:hover {
        background-color: unset !important;
        color: white;
        text-decoration: underline 0.15em rgba(255,255,255,1);

    }

    a {
        color: white;
        height: 100%;
        padding: 1.75em 1.45em 1.75em 1.45em;
        /*width: 175px;*/

        transition: 0.35s;
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

    #collapseNav::-webkit-scrollbar {
        display: none;
    }
    #collapseNav {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

  </style>