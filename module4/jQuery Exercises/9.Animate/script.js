$(document).ready( function() {
    
    $('#run1').click(function () {
      $('.target').fadeIn(2000); 
    });
    
    $('#run2').click(function () {
        $('.target2').animate({
            opacity: 1,
            left: "+=200"
            }, 5000);
      
    });
});