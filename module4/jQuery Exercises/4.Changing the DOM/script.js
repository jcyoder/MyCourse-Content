$(document).ready(function () {
    $('.removeMe').children('p').empty();
    console.log('help');
  $('.removeMe').children('p').remove();
    console.log('help');
    $('.removeMe').remove();
    console.log('help');
    $('.sandbox').append('div').addClass('.target').append('p').text('I have no clue what I am doing');
    console.log('help');
});
