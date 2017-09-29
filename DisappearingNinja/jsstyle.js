$( document ).ready(function() {
    $("img").click(function() {
        $(this).hide( "slow", function() {
          alert( "Where did it go?" );
        });
      });

    $( ".restore" ).click(function() {
        $( "img" ).show( "slow", function() {
          // Animation complete.
        });
      });

});