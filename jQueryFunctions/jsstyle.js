$( document ).ready(function() {
    // .click button
    $( ".addclassbutton" ).click(function() {
        alert( "Hi" );
      });
    // end --click button

    //   button to hide
    // $( ".slidetogglebutton" ).click(function() {
    //     $( ".toggleparagraph" ).hide( "slow" );
    //   }); 
    $(".slidetogglebutton").click(function(){
        var $target = $('.toggleparagraph'),
            $toggle = $(this);
    
        $target.slideToggle( 500, function () {
            $toggle.text(($target.is(':visible') ? 'Hide' : 'Show') + '');
        });
    }); 
    // end -- hide button

    // slide down --
    $(".forwardbutton").click(function () {
        if ( $( ".slidedown:first" ).is( ":hidden" ) ) {
          $( ".slidedown" ).slideDown( "slow" );
        } else {
          $( ".slidedown" ).hide();
        }
      });
    // end slide down --

    // slide up --
    $( ".cancelbutton" ).click(function() {
        $( this ).parent().slideUp( "slow", function() {
          $( "#msg" ).text( $( ".cancelbutton", this ).text() + " hidden." );
        });
      });

    // end slide up --

    // .addclass --
    $( "p" ).last().addClass( "selected" );

    // .addclass --

    // hover --
        $(".addparagraph").hover(function(){
            $(this).css("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "pink");
        });
    // html --

    $( ".appendparagraph" ).click(function() {
        var htmlString = $( this ).html();
        $( this ).text( htmlString );
      });

    // fade in --
    $( "a" ).click(function() {
        $( ".censor" ).fadeIn( 2000, function() {
          $( "span" ).fadeIn( 100 );
        });
        return false;
      });
    // end fade in --
    
    // fade out --
    $( ".censor" ).click(function() {
        $( ".censor" ).fadeOut( "slow" );
      });
    // end fade out --

    // .att
    $(".lastbutton").click(function(){
        $("img").attr("width","20");
    });

    // .before --
    $( ".appendparagraph" ).before($(".appendbutton"));

    // .after --
    $( ".addclassbutton" ).after( $( ".addparagraph" ) );

    // .append --
    $( ".appendparagraph" ).append( "<p>!</p>" );

    // .val --
    $( "button" ).click(function() {
        var text = $( this ).text();
        $( "input" ).val( text );
      });
    
    // .text --
    $( ".hosturl" ).text( "http://localhost/jQuery.html" );

    // .data --

});