$(document).ready( function() {
    $('#firstButton').hide();
    
    $('#secondButton').click( function () {
        $('#firstButton').toggle();
        
    });
});