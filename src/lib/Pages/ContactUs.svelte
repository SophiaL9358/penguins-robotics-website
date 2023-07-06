<script>
    import { onMount } from "svelte";
    import { title_class_def } from "../globalVars";

    const test = () => {
        if (jQuery("#name").is(':valid') && jQuery("#email").is(':valid') && jQuery("#message").val() != "") { // Check for name, email
            console.log("wa");
        }
    }

</script>

<h1 class = {title_class_def + " text-purple"}>Contact Us</h1>

<form action="https://public.herotofu.com/v1/10908430-1bae-11ee-8267-d3eb100789b4" method="post">
    <div>
        <label for = "name" class = "form-label mt-3">Name:</label>
        <input name = "Name" type = "text" class = "form-control" id = "name" placeholder="Enter name" required />
    </div>
    <div>
        <label for = "team" class = "form-label mt-3">FTC Team (If Applicable):</label>
        <input name = "FTC Team" type = "text" class = "form-control" id = "team" placeholder="Enter team" />
    </div>
    <div>
        <label for = "email" class = "form-label mt-3">Email</label>
         <input name = "Email" type = "email" class = "form-control" id = "email" placeholder="Enter email" required />
    </div>
    <div>
        <label for = "message" class = "form-label mt-3">Message</label>
        <textarea name = "Message" cols = "40" rows = "5" class = "form-control" id = "message" placeholder="Enter message" required></textarea>
    </div>

    <div class = "d-flex justify-content-center">
      <input type="submit" class = "btn btn-primary mt-3" value="Contact Us!" />
      <div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;" aria-hidden="true">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
      </div>
    </div>
  </form>