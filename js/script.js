$(function () {
    // navbar
    $('.fa-bars').click(function () {
        $('.navbar-toggler').fadeOut();
        $('.navbar-shrink-list').css('right', '0');
    });
    $('.fa-times,.navbar-shrink-item').click(function () {
        $('.navbar-shrink-list').css('right', '-100%');
        $('.navbar-toggler').fadeIn();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('nav').css('background-color', '#282F35'); /* htmlファイルのnavタグの背景色変更 */
        } else {
            $('nav').css('background', 'none'); /* htmlファイルのnavタグの背景色変更 */
        }
    });

    // smooth-scroll
    $('a[href^="#"]').click(function(){
        var speed = 10000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    
});
