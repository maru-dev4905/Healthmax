var filter = $(".filter");
var filterLoc = filter.offset().top;

$(window).scroll(function(){
    var winY = $(window).scrollTop();
    var winX = $(window).innerWidth;
    if(winX <= 768){
        $("header").css({'background-color':'none'});
    }
    if(winY >= filterLoc - 90){
        filter.addClass("fixed");
        $("header").css('transform','translateY(-180px)');
    }else if(winY <= filterLoc - 90){
        filter.removeClass("fixed");
        $("header").css({
                    'display':'block',
                    'transform':'translateY(0px)'
                    });
    }
})