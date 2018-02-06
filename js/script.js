jQuery(function(){ // JQuery function call to run code

    $( ".hamburger" ).click(function() {
        $('.slide-door').toggleClass('open');
        var text = $('.text-action').text();
        $('.text-action').text(
            text == "Close" ? "Open" : "Close");
    });

});(jQuery); 
