$( document ).ready(function() {
    $(".dog1").hover(
        function() { 
                $(this).removeClass(".dog1");                                                              
                $(this).addClass("data-alt-src");
        },
        function() {
                $(this).removeClass("data-alt-src");        
                $(this).addClass(".dog1");
        }
);
});