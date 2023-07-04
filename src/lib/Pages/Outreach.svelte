<script>

    import { text_green, text_purple, title_class_def, title_secondary_class_def } from "../globalVars";

    let year_2022_2023 = [
        {title: "Hosting the First Lego League Festival",
        text: ["In early January, our team was given the unique opportunity to host the official FIRST Lego League Explore Festival, along with the Rockville Science Center. Throughout the event, we were able to inform many students and parents about FTC and explained how our robot worked."],
        image_src: "IMAGE"
        },
        {title: "Scrimmages",
        text: ["Our team participated in many scrimmages with other teams throughout the season. We had a lot of fun interacting with other teams and learned a lot from their robots.",
                "In addition, we were also able to host our own scrimmage, inviting teams such as Orca Robotics and Thunderstone."],
        image_src: "IMAGE"
        },
        {title: "Preseason",
        text: ["After our 2021-2022 season ended for us, we moved our focus to outreach and making an impact in our community.",
                "During the summer of 2022, we reached out to the community and taught at a robotics summer camp which lasted many weeks. Our goal was to promote STEM and robotics within our local community and inspire people who didn’t have any experience in STEM.",
                "Our team also was able to introduce FIRST, but particularly FTC, to students at Veritas Collegiate Academy. While there, we guided them through building and programming basic FTC robots."],
        image_src: "IMAGE"}
    ];
    let year_2021_2022 = [
        {title: "Meeting with Other Teams",
        text: ["At the start of the season, we were able to reach out to team 12518, Almond Robotics, in which we discussed design ideas and other helpful tips. Our team also participated with them in several scrimmages over the season.",
                "We also met with Robo Troopers after qualifying for states online, in which they gave many different pieces of advice on our robot."],
        image_src: "IMAGE"
        },
        {title: "Mentoring FLL",
        text: ["Over the season, our team was able to mentor three FLL teams, Quaker Tech, Phoenix, and Dragons. We helped to guide them through the programming, building, and core values over the season."],
        image_src: "IMAGE"
        },
        {title: "Recruiting New Members",
        text: ["In addition to that, we were also able to recruit many more students from the area and helped introduce them to the basic STEM, programming, and structure of our team, and FTC."],
        image_src: "IMAGE"},
        {title: "Post Season",
        text: ["After the season ended, we were able to participate in a science fair hosted by the Rockville Science Center. We were able to introduce FTC and STEM to the community.",
                "We were also able to meet with NASA Scientist Dr. Dominguez, who specialized in optics. She was able to help us with the lighting issues we experienced at the state competition."],
        image_src: "IMAGE"}
    ];
</script>
<h1 class = {title_class_def}>Outreach</h1>
<br>
<h2 class = {title_secondary_class_def}>2022 - 2023</h2>
<br>
<div class = "container">
    {#each year_2022_2023 as event, i}
        <div class = "row rounded" style = "border: 1.5px solid rgba(50, 50, 50, 0.35);">
            <div class = "col-lg-7 content">
                <b><i>{event.title}</i></b>
                {#each event.text as text_line}
                    <br><br>
                    {text_line}
                {/each}
            </div>
            <div class = "col-lg-5 border image">
                {event.image_src}
            </div>
        </div>
        {#if year_2022_2023.length - 1 != i}
            <br><br>
        {/if}
        
    {/each}
</div>
<br><hr><br>
<h2 class = {title_secondary_class_def}>2021 - 2022</h2>
<br>
<div class = "container">
    {#each year_2021_2022 as event, i}
        <div class = "row rounded" style = "border: 1.5px solid rgba(50, 50, 50, 0.35);">
            <div class = "col-lg-7 content">
                <b><i>{event.title}</i></b>
                {#each event.text as text_line}
                    <br><br>
                    {text_line}
                {/each}
            </div>
            <div class = "col-lg-5 border image">
                {event.image_src}
            </div>
        </div>
        {#if year_2021_2022.length - 1 != i}
            <br><br>
        {/if}
        
    {/each}
</div>

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