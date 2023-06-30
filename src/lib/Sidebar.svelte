<script>
    import { lightBlueColor } from "./globalVars.js";
    let pageNames = ["Home", "About Us", "Outreach", "Achievements", "Members", "Robot History"]
</script>

<div id = "parent_container" class = "align-items-center" style = "background-color: {lightBlueColor};">
    <div style = "height: 5em;">

    </div>
    <div style = "width: 0.75em; height: 24em; top:7em; position: absolute; background-color: white; margin-left: 2.65em; z-index: 1;"></div>

    {#each pageNames as pageName}
    <a href = "#{pageName}" class = "d-flex mt-4" >
        <div style = "height: 3em; width: 15.8em; padding-left: 2.25em;" class ="sidebar-box row" >
            <div class = "rounded-circle circle align-middle" style = "width: 3em; height: 3em;  z-index: 2; display: inline-block">
            </div>
            <span style = "height: 3em; width:max-content;" class = "ps-3 d-flex align-items-center">
                {pageName}
            </span>
        </div>
    </a>

    {/each}

</div>

<style>
    a {
        text-decoration: none;
    }
    #parent_container > a > div > div{
        display: inline-block;
    }
    
    .circle {
        background-color: white;
    }

    .sidebar-box {
        color: white;
        transition: 0.25s;

    }
    .sidebar-box:hover > .circle{
        background-color: rgb(81, 165, 242) !important;
    }
    .sidebar-box:hover {
        color: rgb(81, 165, 242);
        background-color: white;
    }


    #parent_container {
        width: 15em;
        height: 100%;
        position: fixed;
    }
</style>