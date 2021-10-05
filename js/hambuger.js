var openBtn = $(".hambuger-open-btn");
var closeBtn = $(".hambuger-close-btn");
var menu = $(".hambuger-menu");
var gnb = $(".gnb");
var dim = $(".dim");

for(var i = 0; i < closeBtn.length; i++){
    openBtn.click(function(){
        gnb.addClass("show");
        dim.addClass("show");
        menu.addClass("show");
    })
    closeBtn.eq(i).click(function(){
        gnb.removeClass("show")
        dim.removeClass("show")
        menu.removeClass("show")
    })
}