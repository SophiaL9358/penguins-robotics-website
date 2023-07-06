<script>
    import { title_class_def } from "../globalVars";

    let people = [
        {
            name: "Alex",
            role: "CAD/Build",
            des: "Hello, my name is Alex and I’m a freshman at Winston Churchill Highschool in Rockville Maryland. I’ve been doing FTC for 3 years now and I mainly do CAD and building. I enjoy reading and playing video games.",
            image_src: "https://i0.wp.com/penguinsrobotics.org/wp-content/uploads/2022/10/IMG20220918181923-scaled.jpg?resize=1152%2C1536&ssl=1"
        },
        {
            name: "Allison",
            role: "CAD",
            des: "Hi! I’m Allison and a 10th grader at Montgomery Blair High School. This is my first year in FTC. I’m part of the CADing team. I like drawing, singing and playing volleyball.",
            image_src: "https://i0.wp.com/penguinsrobotics.org/wp-content/uploads/2022/09/IMG_20220918_165038-scaled.jpg?resize=1058%2C1536&ssl=1"
        },
        {
            name: "Christopher",
            role: "Builder/Engineering NB",
            des: "Hi! My name is Christopher and I’m a 8th grader at Cabin John Middle School.  This is my 2nd year in FTC and I am one of the drivers, builders, and engineering notebook writers.  I like to juggle and play Roblox.",
            image_src: "https://i0.wp.com/penguinsrobotics.org/wp-content/uploads/2022/10/IMG20220918181837-scaled.jpg?resize=1152%2C1536&ssl=1"
        },
        {
            name: "Eddie",
            role: "CAD/Programming",
            des: "Hello, my name is Eddie, and I’m in 9th grade at Mclean High School. This is my 3rd year in FTC and my 5th year in FIRST. I help CAD and programming. I enjoy playing video games and reading.",
            image_src: "https://i0.wp.com/penguinsrobotics.org/wp-content/uploads/2022/10/IMG20221009175053-scaled.jpg?resize=1152%2C1536&ssl=1"
        },
        {
            name: "Frank",
            role: "Build/Programming",
            des: "Hi I’m Frank. I’m in 8th grade at Cabin John Middle School. This is my first year doing FTC and I’ve done 1 year with FLL. My role in the team is to program and build the robot. I like to read and play games.",
            image_src: "https://i0.wp.com/penguinsrobotics.org/wp-content/uploads/2022/09/IMG_20220918_165100-scaled.jpg?resize=1697%2C2048&ssl=1"
        }
    ]
</script>

<h1 class = {title_class_def}>Members</h1>
<br>
<div class = "row d-flex justify-content-center">
    {#each people  as person}
        <div class = "col-sm-3 my-3 mx-4 border p-0">
            <div class = "d-flex image-div w-100">
                <img src = {person.image_src} alt = {person.name + "'s Photo"} class = "" style = "object-fit: cover; width: 100%;"/>
            </div>
            <div class = "content mt-3 px-3">
                <b><h5>{person.name}</h5></b>
                <p>{person.role}</p>
            </div>
        </div>
    {/each}

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