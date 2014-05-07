$(document).ready(function () {
    $('.add-item').click(function () {
        var number = $('#numberToAdd').val(); 
        if(number === null || number === undefined || number === "")
            number = 0;
        console.log(number);
        for(var i=0; i<number; i++) {
            $('.template li').clone().text("Janet was here ").appendTo('.sample-list');
           
        }
        $('.count').text(number);
 }); 
    

});