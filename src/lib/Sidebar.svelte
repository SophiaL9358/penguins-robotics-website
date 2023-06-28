<script>
    import { lightBlueColor } from "./globalVars.js";
    let pageNames = ["Home", "About Us", "Outreach", "Achievements", "Members", "Robot History"]
</script>

<div id = "parent_container" class = "align-items-center" style = "background-color: {lightBlueColor};">
    <div style = "width: 0.75em; height: 35em; position: fixed; background-color: white; margin-left: 2.65em; z-index: 1;"></div>

    {#each pageNames as pageName}
    <a href = "#{pageName}" class = "container-fluid" >
        <div style = "height: 3em;" class ="sidebar-box ps-4" >
            <div class = "rounded-circle circle align-middle" style = "width: 3em; height: 3em; z-index: 3;">
            </div>
            <div style = "height: 3em;" class = "ps-3">
                {pageName}
            </div>
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
        background-color: rgb(81, 165, 242);
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