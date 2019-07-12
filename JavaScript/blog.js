function blogFade() {
$(document).ready(function() {
    $('#fadeOne').fadeIn(5000, function(){
    $('#fadeOne').fadeOut(5000,function(){
    $('#fadeTwo').fadeIn(5000);
    $('#fadeTwo').fadeOut(5000);
    setTimeout(blogFade, 5000);
        });
});
});
}
blogFade();
