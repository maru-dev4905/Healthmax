var header = $("header");
var btn = $(".hambuger-open-btn");
var logo = $(".logo a img");
var hambugerSpan = $(".hambuger-open-btn span");
var slideCard = $(".slide-long-card");

var lastScrollTop = 0;
var delta = 5;
var fixBoxHeight = header.offsetHeight;
var didScroll;
var winX = innerWidth;
var winY = $(window).scrollTop();

var i = 0;

var btnCheck = "next";
var pageBackBtnCheck;
var snbCheck = false;
var scrollNum;

headerChange(winX);
snbStick(winY);

if(winX >= 1020){
    if($(".snb").length){
        snbCheck = true;
    }else{
        snbCheck = false;
    }
}
if(winX <= 768){
    if($(".page-back-btn").length){
        pageBackBtnCheck = true;
    }else{
        pageBackBtnCheck = false;
    }
}
if($(".countup")){
    var countWrapper = $(".countup");
}
if($(".intro_slide_next")){
    var introNextBtn = $(".intro_slide_next");
    var introPrevBtn = $(".intro_slide_prev");

    var introLeftImg = $(".slide_left_img img");
    var introRightImg = $(".slide_right_img img");
    var text = $(".slide_text");
    var introNumber = $(".slide_nav span");

    introNextBtn.click(function(){
        introLeftImg.eq(0).addClass("hide");
        introRightImg.eq(0).addClass("hide");
        introLeftImg.eq(1).addClass("show");
        introRightImg.eq(1).addClass("show");
    
        text.eq(1).addClass("show");
        text.eq(0).removeClass("show");

        introNumber.eq(1).addClass("active");
        introNumber.eq(0).removeClass("active");
    })

    introPrevBtn.click(function(){
        introLeftImg.eq(0).removeClass("hide");
        introRightImg.eq(0).removeClass("hide");
        introLeftImg.eq(1).removeClass("show");
        introRightImg.eq(1).removeClass("show");
    
        text.eq(1).removeClass("show");
        text.eq(0).addClass("show");

        introNumber.eq(1).removeClass("active");
        introNumber.eq(0).addClass("active");
    })
    var performNextBtn = $(".preform_slide_next");
    var performPrevBtn = $(".preform_slide_prev");

    performNextBtn.click(function(){
        move_slide("next");
    })
    performPrevBtn.click(function(){
        move_slide("prev");
    })
}

if($("#slideLong")){
    var longBtn = $("#slideLong .slide_content_btn button");
    var slideLongCard = $("#slideLong .slide-long-card");
    var slideLongCheck = 0;

    longBtn.eq(0).click(function(){
        if(slideLongCheck == 0){
            slideLongCheck = slideLongCard.length;
        }
        slideLongCheck--;
        for(var i = 0; i < slideLongCard.length; i++){
            slideLongCard.eq(i).removeClass("show");
            slideTab.eq(i).removeClass("active");
        }
        slideLongCard.eq(slideLongCheck).addClass("show");
        slideTab.eq(slideLongCheck).addClass("active");
    })

    longBtn.eq(1).click(function(){
        slideLongCheck++;
        if(slideLongCheck == slideLongCard.length){
            slideLongCheck = 0;
        }
        for(var i = 0; i < slideLongCard.length; i++){
            slideLongCard.eq(i).removeClass("show");
            slideTab.eq(i).removeClass("active");
        }
        slideLongCard.eq(slideLongCheck).addClass("show");
        slideTab.eq(slideLongCheck).addClass("active");
    })
    if($(".slide_tab_btn")){
        var slideTab = $(".tab_slide_btn li");
        var slideTabBtn = $(".tab_slide_btn button");
        for(var i = 0; i < slideTab.length; i++){
            slideTab.eq(i).click(function(){
                var thisIndex = $(this).index();

                for(var j = 0; j < slideTab.length; j++){
                    slideTab.eq(j).removeClass("active");
                    slideLongCard.eq(j).removeClass("show");
                }
                $(this).addClass("active");
                
                slideLongCard.eq(thisIndex).addClass("show");

                slideLongCheck = thisIndex;

                var _scrollX = $(".tab-slide-bar").scrollLeft();
                $(".tab-slide-bar").scrollLeft(_scrollX + $(this).offset().left - 30);

                
            })
        }
    }
}
if($("#history").length){
    var historyGroup = $("#history .history_container");
    var historyCard = $("#history .history_item");
    var historyCardWidth = historyCard.css('width');
    historyCardWidth = historyCardWidth.split("px")[0];
    historyCardWidth = Number(historyCardWidth);
    var historyCardLength = historyCard.length;

    var historyMargin = historyCard.css("margin-right");
    historyMargin = Number(historyMargin.split("px")[0]);

    var historyBtn = $("#history button");

    historyGroup.css({
        'width' : historyCardWidth * historyCardLength
    })

    var history_w;
    var history_count = 0;
    var history_position = 0;

    historyBtn.eq(0).click(function(){
        historyBack();
    })
    historyBtn.eq(1).click(function(){
        historyNext();
    })
}
function historyBack(){
    if(0 < history_position){
        history_w = historyGroup.css("left");
        history_w = Number(history_w.split("px")[0]);

        historyGroup.css({
            'left' : history_w + historyCardWidth + historyMargin
        });
        history_position--;
    }
}
function historyNext(){
    if(historyCardLength - 1 > history_position){
        history_w = historyGroup.css("left");
        history_w = Number(history_w.split("px")[0]);
        
        historyGroup.css({
            'left' : history_w - historyCardWidth - historyMargin
        });
        history_position++;
    }
}

if($("#career").length){
    var careerGroup = $("#career .career_container");
    var careerCard = $("#career li");
    var careerCardWidth = careerCard.css('width');
    careerCardWidth = careerCardWidth.split("px")[0];
    careerCardWidth = Number(careerCardWidth);
    var careerCardLength = careerCard.length;

    var careerMargin = careerCard.css("margin-right");
    careerMargin = Number(careerMargin.split("px")[0]);

    var careerBtn = $("#career button");

    careerGroup.css({
        'width' : careerCardWidth * careerCardLength
    })

    var career_w;
    var career_count = 0;
    var career_position = 0;

    careerBtn.eq(0).click(function(){
        careerBack();
    })
    careerBtn.eq(1).click(function(){
        careerNext();
    })
}
function careerBack(){
    if(0 < career_position){
        career_w = careerGroup.css("left");
        career_w = Number(career_w.split("px")[0]);

        careerGroup.css({
            'left' : career_w + careerCardWidth + careerMargin
        });
        career_position--;
    }
}
function careerNext(){
    if(careerCardLength - 1 > career_position){
        career_w = careerGroup.css("left");
        career_w = Number(career_w.split("px")[0]);
        
        careerGroup.css({
            'left' : career_w - careerCardWidth - careerMargin
        });
        career_position++;
    }
}

if(winX >= 1920){
    scrollNum = 30;
}else if (winX <= 1440){
    scrollNum = 20;
}else if (winX < 1920){
    scrollNum = 50;
}

$(window).scroll(function(){
    winY = $(this).scrollTop();

    if(snbCheck){
        snbStick(winY);
    }
    if(winX > 768){
        if(winY > lastScrollTop){
            // down
            header.addClass("small");
            btn.addClass("small");
        }else{
            // up
            header.removeClass("small");
            btn.removeClass("small");
        }
    }else if(winX <= 768){
        if(winY > lastScrollTop){
            // down
            header.addClass("v-small");
            btn.addClass("v-small");
            logo.attr("src","./images/main/logo.png");
            hambugerSpan.css('background-color','#003425');

        }else if(winY <= 0){
            // up
            header.removeClass("v-small");
            btn.removeClass("v-small");
            logo.attr("src","./images/main/footer_logo.png");
            hambugerSpan.css('background-color','#fff');
        }
    }

    if(pageBackBtnCheck){
        var pageBackBtn = $(".page-back-btn");
        if(winY >  lastScrollTop){
            if($(".page-back-btn").length){
                pageBackBtn.addClass("green");
            }
        }else if(winY = 0){
            if($(".page-back-btn").length){
                pageBackBtn.removeClass("green");
            }
        }
    }
    lastScrollTop = winY;
})

$(window).resize(function(){
    winX = innerWidth;

    headerChange(winX);
    if(winX >= 1920){
        scrollNum = 30;
    }else if(winX <= 1440){
        scrollNum = 20;
    }else if(winX < 1920){
        scrollNum = 50;
    }
})

function move_slide(btnCheck){
    if(btnCheck == "next"){
        if(slideCard.eq(i).hasClass("show")){
            slideCard.removeClass("show");
        }
        i++;
        if( i >= slideCard.length ){
            i = 0;
        }
        slideCard[i].addClass("show");
        btnCheck = "prev";
    }else{
        if(slideCard.eq(i).hasClass("show")){
            slideCard.removeClass("show");
        }
        i--;
        if(i <= -1){
            i = slideCard.length - 1;
        }
        slideCard.eq(i).addClass("show");
        btnCheck = "next"
    }
}
function changeNav(num){
    var secNav = $(".snb li");
    
    secNav.removeClass("active");
    
    secNav.eq(num).addClass("active");
}
function headerChange(winX){
    if(winX < 768){
        logo.attr("src","./images/main/footer_logo.png");
        hambugerSpan.css('background-color','#fff');
    }else{
        logo.attr("src","./images/main/logo.png");
        hambugerSpan.css('background-color',"inherit");
    }
}

function snbStick(winY){
    if($(".snb").length){
        var snb = $(".snb");
        var snbNav = $(".snb ul");
        var snbNavBtn = $(".snb ul button");

        var snbTop = snb.offset().top;
        
        var snbNavOffsetArray = [];
        for(var i = 0; i < snbNavBtn.length; i++){
            var snbNavBtnClassName = snbNavBtn.eq(i).attr("class");
            eval(snbNavBtnClassName + "Loc = document.querySelector('#" + snbNavBtnClassName + "').offsetTop;");
            eval("snbNavOffset0" + i +" = " + snbNavBtnClassName + "Loc");
            snbNavOffsetArray.push(eval(snbNavBtnClassName + "Loc = document.querySelector('#" + snbNavBtnClassName + "').offsetTop;"));
        }

        if(winX > 768){
            if(winY >= snbTop){
                snbNav.addClass("fixed");
            }else{
                snbNav.removeClass("fixed")
            }
        }
        if(typeof(snbNavOffsetArray[0]) != 'undefined'){
            if(winY > snbNavOffsetArray[0] - scrollNum - 100){
                changeNav(0)
            }
        }
        if(typeof(snbNavOffsetArray[1]) != 'undefined'){
            if(winY > snbNavOffsetArray[1] - scrollNum - 100){
                changeNav(1)
            }
        }
        if(typeof(snbNavOffsetArray[2]) != 'undefined'){
            if(winY > snbNavOffsetArray[2] - scrollNum - 100){
                changeNav(2);
            }
        }
        if(typeof(snbNavOffsetArray[3]) != 'undefined'){
            if(winY > snbNavOffsetArray[3] - scrollNum - 100){
                changeNav(3);
            }
        }
        if(typeof(snbNavOffsetArray[4]) != 'undefined'){
            if(winY > snbNavOffsetArray[4] - scrollNum - 100){
                changeNav(4);
            }
        }
        if(typeof(snbNavOffsetArray[5]) != 'undefined'){
            if(winY > snbNavOffsetArray[5] - scrollNum - 100){
                changeNav(0)
            }
        }


        for(var i = 0; i < snbNavBtn.length; i++){
            if(typeof(snbNavBtn[0]) != 'undefined'){
                snbNavBtn[0].addEventListener("click",function(){
                    window.scrollTo({
                        top : snbNavOffsetArray[0] - scrollNum,
                        left : 0,
                        behavior : "smooth"
                    })
                })
            }
            if(typeof(snbNavBtn[1]) != 'undefined'){
                snbNavBtn[1].addEventListener("click",function(){
                    window.scrollTo({
                        top : snbNavOffsetArray[1] - scrollNum,
                        left : 0,
                        behavior : "smooth"
                    })
                })
            }
            if(typeof(snbNavBtn[2]) != 'undefined'){
                snbNavBtn[2].addEventListener("click",function(){
                    window.scrollTo({
                        top : snbNavOffsetArray[2] - scrollNum,
                        left : 0,
                        behavior : "smooth"
                    })
                })
            }
            if(typeof(snbNavBtn[3]) != 'undefined'){
                snbNavBtn[3].addEventListener("click",function(){
                    window.scrollTo({
                        top : snbNavOffsetArray[3] - scrollNum,
                        left : 0,
                        behavior : "smooth"
                    })
                })
            }
            if(typeof(snbNavBtn[4]) != 'undefined'){
                snbNavBtn[4].addEventListener("click",function(){
                    window.scrollTo({
                        top : snbNavOffsetArray[4] - scrollNum,
                        left : 0,
                        behavior : "smooth"
                    })
                })
            }
        }
    }
}
