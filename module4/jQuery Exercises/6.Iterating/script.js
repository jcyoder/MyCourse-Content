$(document).ready( function () {
    
   $('.sandbox>div>ul>li').each(function () {
                             
        $('.sandbox li:nth-child(odd)').css('color', 'gray');
        $('.sandbox li:nth-child(even)').css('color', 'black');
                                 
   });
});
