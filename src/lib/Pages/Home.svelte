<script>
    let prefix = 'https://drive.google.com/uc?export=view&id=';
    let pigeon_img_src = '1ZvNIz2QF88OBhgYmLasH8EaNapuO4Wky';
    let bots_img_src = '1hk9NqIJTZelfVFsD32tjV9YmKIlfhgyi';
    let team_word_img_src = '15rUD4wia2S7aSCuTuJ1U_uiotORjeUvH';
    let team_num_img_src = '1_gzYZbdRgx9voxwuWaVTnHpMYS9_HYYn';
</script>

<div class ="row p-4 m-0" id = "team_name">
    <div class = "col-sm-6 d-flex justify-content-end">
        <img id = "pigeon_img" src = {prefix+pigeon_img_src} alt = '"Pigeon"'/>
    </div>
    <div class = "col-sm-6">
        <img id = "bot_img" src = {prefix+bots_img_src} alt = '"Bots"'/>
    </div>
</div>
<div class ="row" id = "team_num">
    <div class = "col-sm-6 d-flex justify-content-end">
        <img id = "team_word_img" src = {prefix+team_word_img_src} alt = '"Team"'/>
    </div>
    <div class = "col-sm-6">
        <img id = "team_num_img" src = {prefix+team_num_img_src} alt = '"18792"'/>
    </div>
</div>

<div id = "Content" class = "mt-5">
    <h1 class = "h1">About Us</h1>
    <div class = "row mt-4">
        <div class = "col-sm">
            wubba dubba
        </div>
        <div class = "col-sm">
            Image!!!@!
        </div>
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
        aspect-ratio: 2.55/1;
        max-width: 350px;
        margin-top: 2em;
    }
    #team_num > div > img {
        width: 64%;
        aspect-ratio: 3.85/1;   
        max-width: 250px;
    }
    @media only screen and (max-width: 576px){
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
    }
</style>