// script.js
$(document).ready(function() {
    $('p').click(function() {
        console.log("clicked on p", this);

        // Hide the clicked paragraph
        $(this).hide();
    });

   
});

 // Trigger click on the first paragraph
 $('p:first').click();