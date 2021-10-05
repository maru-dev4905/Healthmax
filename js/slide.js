var autoSlide = $(".autoSlide-content article");
var autoSlideNav = $(".autoSlide-nav li button");
var ACT = "active";

setInterval(function(){
    if(autoSlide.eq(0).hasClass(ACT)){
        autoSlide.eq(0).removeClass(ACT);
        autoSlide.eq(1).addClass(ACT);
        
        autoSlideNav.eq(0).removeClass(ACT);
        autoSlideNav.eq(1).addClass(ACT);
    }else{
        autoSlide.eq(0).addClass(ACT);
        autoSlide.eq(1).removeClass(ACT);

        autoSlideNav.eq(0).addClass(ACT);
        autoSlideNav.eq(1).removeClass(ACT);
    }
},6000);
autoSlideNav.eq(0).click(function(){
    autoSlide.eq(0).addClass(ACT);
    autoSlide.eq(1).removeClass(ACT);

    autoSlideNav.eq(0).addClass(ACT);
    autoSlideNav.eq(1).removeClass(ACT);
})
autoSlideNav.eq(1).click(function(){
    autoSlide.eq(0).removeClass(ACT);
    autoSlide.eq(1).addClass(ACT);

    autoSlideNav.eq(0).removeClass(ACT);
    autoSlideNav.eq(1).addClass(ACT);
})

var zoneSlide = $("#zone .zone_bot .slide_content_btn button");
var zoneSlideCard = $("#zone .zone_content article");

zoneSlide.eq(0).click(function(){
    if(zoneSlideCard.eq(1).hasClass(ACT)){
        zoneSlideCard.eq(1).removeClass(ACT);
        zoneSlideCard.eq(0).addClass(ACT);
    }
})
zoneSlide.eq(1).click(function(){
    if(zoneSlideCard.eq(0).hasClass(ACT)){
        zoneSlideCard.eq(0).removeClass(ACT);
        zoneSlideCard.eq(1).addClass(ACT);
    }
})

var imgSlide = $("#zone .img-slide .slide_content_btn button");
var imgSlideCard = $("#zone .img-slide .img-slide-content li");
var imgSlideCheck = 0;

imgSlide.eq(0).click(function(){
    imgSlideCheck--;
    for(var i = 0; i < imgSlideCard.length; i++){
        imgSlideCard.eq(i).removeClass(ACT);
    }
    imgSlideCard.eq(imgSlideCheck).addClass(ACT);
    if(imgSlideCheck <= 0){
        imgSlideCheck = imgSlideCard.length;
    }
})
imgSlide.eq(1).click(function(){
    imgSlideCheck++;
    if(imgSlideCheck == imgSlideCard.length){
        imgSlideCheck = 0;
    }
    for(var i = 0; i < imgSlideCard.length; i++){
        imgSlideCard.eq(i).removeClass(ACT);
    }
    imgSlideCard.eq(imgSlideCheck).addClass(ACT);
})

var tabSlideBtn = $(".tab_slide_content .slide_content_btn button");
var tabSlideCard = $(".tab_slide_content li");
var tabSlide = $(".tab_slide_bar .tab_slide_btn");
var tabSlideTab = $(".tab_slide_bar .tab_slide_btn li");
var tabSlideText = $(".tab_slide_bar .tab_slide_text li");
var tabSlideCheck = 0;

tabSlideBtn.eq(0).click(function(){
    tabSlideCheck--;
    for(var i = 0; i < tabSlideCard.length; i++){
        tabSlideCard.eq(i).removeClass(ACT);
        tabSlideTab.eq(i).removeClass(ACT);
        tabSlideText.eq(i).removeClass(ACT);
    }
    tabSlideCard.eq(tabSlideCheck).addClass(ACT);
    tabSlideTab.eq(tabSlideCheck).addClass(ACT);
    tabSlideText.eq(tabSlideCheck).addClass(ACT);

    if(tabSlideCheck <= 0){
        tabSlideCheck = tabSlideCard.length;
    }
})
tabSlideBtn.eq(1).click(function(){
    tabSlideCheck++;
    if(tabSlideCheck == tabSlideCard.length){
        tabSlideCheck = 0;
    }
    for(var i = 0; i < tabSlideCard.length; i++){
        tabSlideCard.eq(i).removeClass(ACT);
        tabSlideTab.eq(i).removeClass(ACT);
        tabSlideText.eq(i).removeClass(ACT);
    }
    tabSlideCard.eq(tabSlideCheck).addClass(ACT);
    tabSlideTab.eq(tabSlideCheck).addClass(ACT);
    tabSlideText.eq(tabSlideCheck).addClass(ACT);
})
for(var i = 0; i < tabSlideTab.length; i++){
    tabSlideTab.eq(i).click(function(){
        for(var j = 0; j < tabSlideTab.length; j++){
            tabSlideTab.eq(j).removeClass(ACT);
            tabSlideCard.eq(j).removeClass(ACT);
            tabSlideText.eq(j).removeClass(ACT);
        }
        $(this).addClass(ACT);
        tabSlideCard.eq($(this).index()).addClass(ACT);
        tabSlideText.eq($(this).index()).addClass(ACT);
        tabSlideCheck = $(this).index();

        var _scrollX = tabSlide.scrollLeft();
        tabSlide.scrollLeft(_scrollX + $(this).offset().left - 30);
        
    })
}

var homeSlide = $("#home .slide_content_btn button");
var homeSlideCardImg = $("#home .img-slide-content li");
var homeSlideCardText = $("#home .img-slide-text li");
var homeSlideCheck = 0;

homeSlide.eq(0).click(function(){
    homeSlideCheck--;
    for(var i = 0; i < homeSlideCardImg.length; i++){
        homeSlideCardImg.eq(i).removeClass(ACT);
        homeSlideCardText.eq(i).removeClass(ACT);
    }
    homeSlideCardImg.eq(homeSlideCheck).addClass(ACT);
    homeSlideCardText.eq(homeSlideCheck).addClass(ACT);

    if(homeSlideCheck <= 0){
        homeSlideCheck = homeSlideCardText.length
    }
})
homeSlide.eq(1).click(function(){
    homeSlideCheck++;
    if(homeSlideCheck == homeSlideCardText.length){
        homeSlideCheck = 0;
    }
    for(var i = 0; i < homeSlideCardText.length; i++){
        homeSlideCardText.eq(i).removeClass(ACT);
        homeSlideCardImg.eq(i).removeClass(ACT);
    }
    homeSlideCardImg.eq(homeSlideCheck).addClass(ACT);
    homeSlideCardText.eq(homeSlideCheck).addClass(ACT);
})