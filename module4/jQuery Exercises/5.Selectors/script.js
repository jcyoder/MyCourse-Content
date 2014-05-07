$(document).ready(function () {
    $('.sandbox>div>p:nth(1)').css('color', 'blue');
    $('.sandbox>div>p:nth(0)').css('background-color', 'cornflowerblue');
    $('.sandbox>div>p:nth(2)').remove();
    $('.sandbox>div>ul>li:nth(3)').css('color', 'purple');
    $('.sandbox>div>ul>li:nth(2)').text("I did it!");
});
