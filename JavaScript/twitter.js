function twitterFade() {
$(document).ready(function() {
    $('#twitOne').fadeIn(5000, function(){
    $('#twitOne').fadeOut(5000,function(){
    $('#twitTwo').fadeIn(5000);
    $('#twitTwo').fadeOut(5000);
    setTimeout(twitterFade, 5000);
        });
});
});
}
twitterFade();
//setInterval(fader,0); 