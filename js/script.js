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


    $( ".b-0" ).click(function() {
        $('.c-0').addClass('open-c');
        $('.c-1').removeClass('open-c');
        $('.c-2').removeClass('open-c');
        $('.c-3').removeClass('open-c');
        hamburgerActions();
    });

    $( ".b-1" ).click(function() {
      $('.c-1').addClass('open-c');
      $('.c-0').removeClass('open-c');
      $('.c-2').removeClass('open-c');
      $('.c-3').removeClass('open-c');
        hamburgerActions();
    });

    $( ".b-2" ).click(function() {
       $('.c-2').addClass('open-c');
       $('.c-1').removeClass('open-c');
       $('.c-0').removeClass('open-c');
       $('.c-3').removeClass('open-c');
        hamburgerActions();
    });

    $( ".b-3" ).click(function() {
       $('.c-3').addClass('open-c');
       $('.c-1').removeClass('open-c');
       $('.c-2').removeClass('open-c');
       $('.c-0').removeClass('open-c');
        hamburgerActions();
    });



});(jQuery); 
