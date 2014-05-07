$(document).ready(function () {
  
    
/*    
    $('.sample').children();
    console.log(vtext);
    $('.sample').children('nextText').text(vtext);
    var ntext = $('.sample').children('.nextText').text();
    console.log(ntext);
    $('.sample').children('.emptyText').text(ntext);
  */
    
    var vtext = $('.sample').children().children('.targetText').text();
    console.log(vtext);
    $('.sample').children().children('.nextText').text(vtext);
    var ntext = $('.sample').children().children('.nextText').text();
    console.log(ntext);
    var etext = $('.targetText').text();
    $('.targetText').parent().siblings('.emptyText').text(etext);
    
});