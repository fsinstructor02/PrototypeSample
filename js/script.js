jQuery(function(){ // JQuery function call to run code


    function hamburgerActions(){
        $('.slide-door').toggleClass('open');
        var text = $('.text-action').text();
        $('.text-action').text(
            text == "Close" ? "Open" : "Close");
    }

    $( ".hamburger" ).click(function() {
        hamburgerActions();
    });


    $( ".b1" ).click(function() {
        $('.c1').addClass('open-c');
        $('.c2').removeClass('open-c');
        $('.c3').removeClass('open-c');
        $('.c4').removeClass('open-c');
        hamburgerActions();
    });

    $( ".b2" ).click(function() {
      $('.c2').addClass('open-c');
      $('.c1').removeClass('open-c');
      $('.c3').removeClass('open-c');
      $('.c4').removeClass('open-c');
        hamburgerActions();
    });

    $( ".b3" ).click(function() {
       $('.c3').addClass('open-c');
       $('.c2').removeClass('open-c');
       $('.c1').removeClass('open-c');
       $('.c4').removeClass('open-c');
        hamburgerActions();
    });

    $( ".b4" ).click(function() {
       $('.c4').addClass('open-c');
       $('.c2').removeClass('open-c');
       $('.c3').removeClass('open-c');
       $('.c1').removeClass('open-c');
        hamburgerActions();
    });



});(jQuery); 
