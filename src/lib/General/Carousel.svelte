<script>
    import { onMount } from "svelte";
    import { carousel_id, prefix } from "../globalVars";

    export let images_info = [];
    
    let spec_carousel_id;
    onMount(() => {
        carousel_id.update((state)=> (state+1)%20);
        spec_carousel_id = "carousel_"+$carousel_id;
    })


</script>
{#if images_info.length <= 1}
<div class = "d-flex justify-content-center align-items-center h-100">
    <img src = {prefix + images_info[0]} alt = "Slide Img 0" class = "d-block" style = "max-height: 300px; max-width: 550px;" />
</div>
{:else}
<div class = "d-flex justify-content-center align-items-center h-100">
    <div id = {spec_carousel_id} class = "carousel slide" data-bs-ride = "carousel" style = "height: fit-content;">
        <!-- Indicators -->
        <div class = "carousel-indicators">
            {#each images_info as x, i}
                {#if i==0}
                     <button data-bs-target = {"#"+spec_carousel_id} data-bs-slide-to = {String(i)} class = "active"></button>
                {:else}
                    <button data-bs-target = {"#"+spec_carousel_id} data-bs-slide-to = {String(i)}></button>
                {/if}
            {/each}
        </div>
    
        <!-- Content -->
        <div class = "carousel-inner d-flex align-items-center" style = "max-height: 300px; max-width: 500px;">
            {#each images_info as image_info, i}
                {#if i == 0}
                <div class = "carousel-item active h-100">
                    <img src = {prefix + image_info} alt = {"Slide Img "+i} class = "d-block w-100" />
                </div>
                {:else}
                <div class = "carousel-item h-100">
                    <img src = {prefix + image_info} alt = {"Slide Img "+i} class = "d-block w-100" />
                </div>
                {/if}
            {/each}
        </div>
    
        <!-- Buttons -->
        <button class = "carousel-control carousel-control-prev" data-bs-target={"#"+spec_carousel_id} data-bs-slide="prev">
            <span class = "carousel-control-prev-icon"></span>
        </button>
        <button class = "carousel-control carousel-control-next" data-bs-target={"#"+spec_carousel_id} data-bs-slide="next">
            <span class = "carousel-control-next-icon"></span>
        </button>
    </div>
</div>
{/if}
<style>
    .carousel-control {
        transition: 0.25s;
    }
    .carousel-control:hover {
        background-color: rgba(0, 0, 0, 0.25);

    }
</style>