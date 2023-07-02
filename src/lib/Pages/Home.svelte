<script>
    let prefix = 'https://drive.google.com/uc?export=view&id=';
    let pigeon_img_src = '1ZvNIz2QF88OBhgYmLasH8EaNapuO4Wky';
    let bots_img_src = '1hk9NqIJTZelfVFsD32tjV9YmKIlfhgyi';
    let team_word_img_src = '15rUD4wia2S7aSCuTuJ1U_uiotORjeUvH';
    let team_num_img_src = '1_gzYZbdRgx9voxwuWaVTnHpMYS9_HYYn';

    let sponsors_src = ['1WAlbbA6Txy9Wn7ka7-sWiNNGNmv7foZ2', '18ltUmc47SDlWarq19ppiMNbvTU0LhvMt', '19cYuQ0bQYTdpfeeMT2YwuqcyHE5O2zRg'];
</script>

<div class ="row px-4 m-0" id = "team_name">
    <div class = "col-sm-6 d-flex justify-content-end">
        <img id = "pigeon_img" src = {prefix+pigeon_img_src} alt = '"Pigeon"'/>
    </div>
    <div class = "col-sm-6">
        <img id = "bot_img" src = {prefix+bots_img_src} alt = '"Bots"'/>
    </div>
</div>
<div class ="row pt-4" id = "team_num">
    <div class = "col-sm-6 d-flex justify-content-end">
        <img id = "team_word_img" src = {prefix+team_word_img_src} alt = '"Team"'/>
    </div>
    <div class = "col-sm-6">
        <img id = "team_num_img" src = {prefix+team_num_img_src} alt = '"18792"'/>
    </div>
</div>

<div id = "Content" class = "mt-5">
    <h1 class = "text-green mb-4">About Us</h1>
    <div class = "row my-4">
        <div class = "col-sm-6">
            Team 18792, Pigeon Bots, is a First Tech Challenge team based in Rockville Maryland.
            <br><br>
            Formed in the summer of 2020, our members are all ages from 13 to 15. Our mission is to promote STEM throughout the local and wider community.
        </div>
        <div id = "team_img" class = "col-sm-6 d-flex justify-content-center align-items-center">
            <img class = "w-75" src = {prefix + '1qumqEOmP_1mrEcb6EPRdA1IOnvdee9kF'} alt = "Team" >
        </div>
    </div>
    <hr>
    <h1 class = "text-purple my-4">Support Us</h1>    
    <div>
        Want to support us or our mission? See the links below!
        <br>
        <button class = "btn btn-outline-success mt-4">
            Donate to our GoFundMe!
        </button>
        <br>
        <button class = "btn btn-outline-primary mt-2">
            Email us at penguinsroboticsusa@gmail.com
        </button>
    </div>
    <hr>
    <h1 class = "text-green my-4">Current Sponsors</h1>   
    <div class = "row">
        {#each sponsors_src as sponsor_src, i}
        <div class = "col-sm d-flex justify-content-center align-items-center sponsors">
            <img class = "w-75" src = {prefix + sponsor_src} alt = {'sponsor'+String(i)}>
        </div>
        {/each}
    </div> 


</div>

<style>
    /* Pigeon Bot Title */
    #pigeon_img {
        padding-right: 0em;
    }
    #bot_img, #team_num_img{
        padding-left: calc(0.5em + 1vw);
    }

    #team_name > div > img{
        width: 100%;
        aspect-ratio: 2.75/1;
        max-width: 350px;
        margin-top: 1.5em;
    }
    #team_num > div > img {
        width: 64%;
        aspect-ratio: 3.85/1;   
        max-width: 250px;
    }

    .sponsors {
        max-width: 33%;
    }

    @media only screen and (max-width: 576px){
        #team_img {
            margin-top: 2em;
        }
        #team_word_img {
            display: none;
        }
        #pigeon_img, #bot_img, #team_num_img {
            padding: 0em !important;
        }
        #pigeon_img {
            width: 80% !important;
        }
        #bot_img  {
            width: 65% !important;
        }
        #team_num_img {
            width: 50% !important;
        }
        .col-sm-6 {
            display: flex;
            justify-content: center !important;
        }

        .sponsors {
            max-width: 100%;
        }
        .sponsors img{
            max-width: 50%;
        }
    }
</style>