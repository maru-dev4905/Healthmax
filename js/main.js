
var hambugerOpenBtn = $(".hambuger-open-btn");
var hambugerCloseBtn = $(".hambuger-close-btn");
var headerMenu = $(".header-menu");
var dim = $(".dim");

hambugerOpenBtn.click(function(){
    headerMenu.addClass("show");    
    dim.addClass("show");
})
hambugerCloseBtn.click(function(){
    headerMenu.removeClass("show");
    dim.removeClass("show");
})

var hambugerOpenBtnM = $(".hambuger-open-btn-m");
var hambugerCloseBtnM = $(".hambuger-close-btn-m");
var hambugerMenu = $(".hambuger-menu")

hambugerOpenBtnM.click(function(){
    hambugerMenu.addClass("show");
})
hambugerCloseBtnM.click(function(){
    hambugerMenu.removeClass("show");
})

var videoOpenBtn = $(".video_open_btn");
var video = $(".video");
var videoCloseBtn = $(".video_close_btn");

videoOpenBtn.click(function(){
    video.addClass("show");
})
videoCloseBtn.click(function(){
    video.removeClass("show");
})