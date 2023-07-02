<script>
    let prefix = 'https://drive.google.com/uc?export=view&id=';
    let pigeon_img_src = '1ZvNIz2QF88OBhgYmLasH8EaNapuO4Wky';
    let bots_img_src = '1hk9NqIJTZelfVFsD32tjV9YmKIlfhgyi';
</script>

<div class ="row p-4 m-0">
    <div class = "col-sm-6 d-flex justify-content-end">
        <img id = "pigeon_img" src = {prefix+pigeon_img_src} alt = '"Pigeon"'/>
    </div>
    <div class = "col-sm-6">
        <img id = "bot_img" src = {prefix+bots_img_src} alt = '"Bots"'/>
    </div>
</div>

<style>
    #pigeon_img {
        padding-right: 0em;
    }
    #bot_img{
        padding-left: 2em;
    }

    img{
        width: 100%;
        height: 75%;
        max-width: 400px;
        margin-top: 2em;
    }

    @media only screen and (max-width: 576px){
        #pigeon_img, #bot_img {
            padding: 0em;
        }
        #pigeon_img {
            width: 90%;
        }
        #bot_img {
            width: 60%;
        }
        .col-sm-6 {
            display: flex;
            justify-content: center !important;
        }
    }
</style>