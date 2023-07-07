<script>
    import { writable } from "svelte/store";
    import { prefix, title_class_def } from "../globalVars";

    let people = [
        {
            name: "Alex",
            role: "CAD/Build",
            des: "Hello, my name is Alex and I’m a freshman at Winston Churchill Highschool in Rockville Maryland. I’ve been doing FTC for 3 years now and I mainly do CAD and building. I enjoy reading and playing video games.",
            image_src: "1uJZMTsbObwlJyVDmtYk0eh57q_ymZxJ0"
        },
        {
            name: "Allison",
            role: "CAD",
            des: "Hi! I’m Allison and a 10th grader at Montgomery Blair High School. This is my first year in FTC. I’m part of the CADing team. I like drawing, singing and playing volleyball.",
            image_src: "1j1oM9kbg0oKbn_bFEHi-P0awzMxHHXO0"
        },
        {
            name: "Christopher",
            role: "Builder/Engineering NB",
            des: "Hi! My name is Christopher and I’m a 8th grader at Cabin John Middle School.  This is my 2nd year in FTC and I am one of the drivers, builders, and engineering notebook writers.  I like to juggle and play Roblox.",
            image_src: "1dlKLbHvGEPsFWVf2kyppWg4ut8iyl11E"
        },
        {
            name: "Eddie",
            role: "CAD/Programming",
            des: "Hello, my name is Eddie, and I’m in 9th grade at Mclean High School. This is my 3rd year in FTC and my 5th year in FIRST. I help CAD and programming. I enjoy playing video games and reading.",
            image_src: "1n6OX3ectaD-J2_4onSMYGnlwjCxaIx2F"
        },
        {
            name: "Frank",
            role: "Build/Programming",
            des: "Hi I’m Frank. I’m in 8th grade at Cabin John Middle School. This is my first year doing FTC and I’ve done 1 year with FLL. My role in the team is to program and build the robot. I like to read and play games.",
            image_src: "1fXZH6cDXoZoIiKaIqfLmoYUc4A5JhOCs"
        },
        {
            name: "Isabelle",
            role: "Programming",
            des: "Hi, my name is Isabelle and I’m in 8th grade at Cabin John Middle School. This is my 4th year in FTC and my 5th year in FIRST. I am the head programmer, part-time CADder, and help with building.",
            image_src: "166RXZAOftVc7_QCstbIZ7ZxyL-mIESAM"
        },
        {
            name: "Jesse",
            role: "Outreach",
            des: "Hi, I’m Jesse, an 8th grader at Takoma Park Middle School. This is my 2nd year participating in FTC. I mainly do outreach on the team. I also enjoy playing video games and basketball in my free time.",
            image_src: "1g94wTr1GUc74FOoySBXBHut015Dq9aYs"
        },
        {
            name: "Sophia",
            role: "Programming",
            des: "Hi, I’m Sophia! I’m 15 years old and I attend Poolesville High School. I’ve been in FTC as a programmer for three years, and I like to ice skate in my free time.",
            image_src: "1KnbIoPlVV2YtxRdSuKEjWm8FN67B_PXW"
        }
    ]

    let modal_info = writable({
        name: "",
        role: "",
        des: "",
        image_src: ""
    });

    
    const resetModal = () => {
        modal_info.set({
            name: "",
            role: "",
            des: "",
            image_src: ""
        });
    }

    const handleModal = (event) => {
        const div = event.relatedTarget;
        const id = "#" + div.id;
        let index = Number(id.slice(id.length-1));
        let person = people[index];
        modal_info.set(person);

    };
    jQuery(document).on('shown.bs.modal', "#personModal", handleModal);
    jQuery(document).on('hide.bs.modal', "#personModal", resetModal);
    
    
</script>

<h1 class = {title_class_def}>Members</h1>
<p class = "d-flex justify-content-center">Click on a person's profile to learn more!</p>
<br>
<div class = "row d-flex justify-content-center">
    {#each people as person, i}
        <div id = {"Member" + i} class = "col-sm-3 my-3 mx-4 border p-0" data-bs-toggle = "modal" data-bs-target = "#personModal">
            <div class = "d-flex image-div w-100 bg-gray">
                <img src = {prefix + person.image_src} alt = {person.name + "'s Photo"} class = "" style = "object-fit: cover; width: 100%;"/>
            </div>
            <div class = "content mt-3 px-3">
                <b><h5>{person.name}</h5></b>
                <p>{person.role}</p>
            </div>
        </div>
    {/each}
</div>

<div id = "personModal" class = "modal fade" tabindex = "-1">
    <div class = "modal-lg modal-dialog modal-dialog-centered">
        <div class = "modal-content">
            <div class = "modal-header">
                <span class = "ms-3">{$modal_info.name}</span>
                <button type = "button" class = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
            </div>
            <div class = "modal-body">
                <div class = "container-fluid">
                    <div class = "row">
                        <div class = "col-md-5 d-flex p-3 justify-content-center" style = "">
                            <img src = {prefix + $modal_info.image_src} alt = "Member's Photo" style = "object-fit: cover; width: 100%; max-width: 300px; min-width: 300px;" />
                        </div>
                        <div class = "col-md-7 p-3">
                            <p><b>Name:</b> {$modal_info.name}</p>
                            <p><b>Role:</b> {$modal_info.role}</p>
                            <p>{$modal_info.des}</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</div>

<style>
    .col-sm-3 {
        aspect-ratio: 1.25/1.5;
        min-width: 250px;
        max-width: 325px;
        transition: 200ms;
    }
    .col-sm-3:hover {
        cursor: pointer;
        box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
    }
    .image-div {
        aspect-ratio: 1.25/1.5;
    }
    @media only screen and (max-width: 576px){
        .col-sm-3 {
            max-width: 300px;
        }
    }
</style>