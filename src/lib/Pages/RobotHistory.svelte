<script>

    import Carousel from "../General/Carousel.svelte";
    import { text_green, text_purple, title_class_def, title_secondary_class_def } from "../globalVars";

    let year_2022_2023 = [
        {
            title: "Thomas 14",
            text: ["This was our first robot for the Power Play season.", "This robot featured:"],
            bullet_pts: ["Custom belted drivetrain", "Virtual 4-bar mounted on linear sildes", "Servo-powered cone gripper", "Active gecko wheel intake"],
            text_after: [],
            image_src: ["1Jb-T8cjv774WYTekLMOcxUgLAfz5GCuJ"]
        }
    ];
    let year_2021_2022 = [
        {
            title: "Thomas 13",
            text: ["After qualifying for the regional competition, we were able to analyze some of the issues we found with our qualifying robot and made the necessary changes:"],
            bullet_pts: ["Added a second row to intake noodles", "Replaced the side plates", "Changed the X-rail Actobotic Linear Slides to goBilda Viper Slides", "Increased the height of the outtake barrel",
                        "Decreased the width to 12 inches"],
            text_after:["We also met with Robo Troopers after qualifying for states online, in which they gave many different pieces of advice on our robot."],
            image_src: ["1ICFUxqAl8M1F3IP_-ZpKKpRKGdKGQAKD"]
        },
        {
            title: "Thomas 12",
            text: ["This was our robot for our third qualifier in the 2021 to 2022 season, Freight Frenzy. We qualified for states with this robot.","This robot featured:"],
            bullet_pts: ["3d printed flexible intake", "Linear slide outtake with a 3D printex box", "Improved carousel wheel", "Improved 3D printed ramp", 
                        "6-inch mecanum wheels to drive over warehouse barriers"],
            text_after: [],
            image_src: ["1sdpLIdbTtVOG8f1aWItkPYaGHUuWlWNG"]
        }
    ];

    let year_2020_2021 = [
        {
            title: "Maryland Tech Invitationals Robot",
            text: ["After the normal season, the team went back to the drawing board and redesigned the intake and arm. We made the following changes:"],
            bullet_pts: ["Switched from a side to roller intake", "Added a bevel gear to the arm motor for space management and durability", 
                        "Replaced cardboard side plates with plastic side plates to improve durability and security"],
            text_after: ["We were able to submit a 213 point <a href ='https://youtu.be/bbuq2gyYtOs' target = '_blank'>video</a> submission for MTI."],
            image_src: ["1TQrMkVDFa3GIa9gzY2zv58vPorWnOLaQ"]
        },
        {
            title: "Thomas 9",
            text: ["This was our design for the Ultimate Goal season. The specifications are below."],
            bullet_pts: ["Mecanum drivetrain", "One wheel shooter, barrel of the robot located in the shooter", "Intake was a long track with compliant wheels to ferry rings up to the shooter"],
            text_after: ["We were able to amke it to states with this design"],
            image_src: ["1tP0dMtpaTxrKi-nq3kH4XhDZDuyAHToU"]
        }
    ]

    let years = [{
                    title: "2022 - 2023 Season",
                    content: year_2022_2023},
                {
                    title: "2021 - 2022 Season",
                    content: year_2021_2022
                },
                {
                    title: "2020 - 2021 Season",
                    content: year_2020_2021
                }];
</script>
<h1 class = {title_class_def}>Robot History</h1>
<br>

{#each years as year, i}
    <!-- Year title for the section(ex. "2021 - 2022") -->
    <h2 class = {title_secondary_class_def}>{year.title}</h2>
    <br>
    <!-- Actual content/boxes -->
    <div class = "container-fluid">
        {#each year.content as robot, i} <!-- Loops through entries -->
            <div class = "row rounded" style = "border: 1.5px solid rgba(50, 50, 50, 0.35);"> <!-- Creates a bordered box -->
                <div class = "col-lg-7 content"> <!-- Part with text -->
                    <b><i>{robot.title}</i></b> <!-- Title of container -->
                    {#each robot.text as text_line}  <!-- Text before bullet points -->
                        <br><br>
                        {@html text_line}
                    {/each}
                    <ul> <!-- Bullet points of text -->
                        {#each robot.bullet_pts  as bullet_pt}
                            <li>{bullet_pt}</li>
                        {/each}
                    </ul>
                    {#each robot.text_after as text_line}  <!-- Text after bullet points -->
                        {@html text_line}
                    {/each}
                </div>

                <div class = "col-lg-5 image"> <!-- Image -->
                    <Carousel images_info = {robot.image_src} />
                </div>
            </div>
            {#if year.content.length - 1 != i} <!-- Adds space if box isn't the last one -->
                <br><br>
            {/if}
            
        {/each}

    {#if years.length - 1 != i} <!-- Adds space if section isn't the last one -->
        <br><hr><br>
    {/if}
    </div>
{/each}

<style>
    .row {
        padding: 1.5em;
    }
    .content {
        padding: 1em;
    }
    .container {
        width: 95%;
        min-width: 350px;
        max-width: 900px;
    }
</style>