var cultureTab = $(".culture-tab");
var cultureBox = $(".culture-box");
var dutiesBox = $(".duties-box");

var dutiesTabBtn = $(".duties-tab");

var cultureTabCheck = true;

cultureTab.find("button").click(function(){
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");

    if(cultureTabCheck == true){
        cultureBox.eq(0).attr("class","culture-box hide");
        cultureBox.eq(1).attr("class","culture-box show");
        
        cultureTabCheck = false;
    }else{
        cultureBox.eq(0).attr("class","culture-box show");
        cultureBox.eq(1).attr("class","culture-box hide");

        cultureTabCheck = true;
    }

})

var dutiesTabCheck;
var dutiesTab = $("#duties .tab-btn-group");

dutiesTabBtn.find("button").click(function(){
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");
    
    var _scrollX = dutiesTab.scrollLeft();
    dutiesTab.scrollLeft(_scrollX + $(this).offset().left - 30);

    dutiesTabCheck = $(this).index();

    for(var i = 0; i < dutiesBox.length; i++){
        dutiesBox[i].setAttribute("class","duties-box hide");
    }
    dutiesBox.eq(dutiesTabCheck).attr("class","duties-box show");
})

var btnGroup = $(".slide_content_btn");
var btnTextCheck = 0;

btnGroup.eq(0).find(".slide_prev").click(function(){
    prev_text(0);
})
btnGroup.eq(1).find(".slide_prev").click(function(){
    prev_text(1);
})
btnGroup.eq(2).find(".slide_prev").click(function(){
    prev_text(2);
})
btnGroup.eq(3).find(".slide_prev").click(function(){
    prev_text(3);
})
btnGroup.eq(4).find(".slide_prev").click(function(){
    prev_text(4);
})
btnGroup.eq(0).find(".slide_next").click(function(){
    next_text(0);
})
btnGroup.eq(1).find(".slide_next").click(function(){
    next_text(1);
})
btnGroup.eq(2).find(".slide_next").click(function(){
    next_text(2);
})
btnGroup.eq(3).find(".slide_next").click(function(){
    next_text(3);
})
btnGroup.eq(4).find(".slide_next").click(function(){
    next_text(4);
})

function prev_text(num){
    if(btnTextCheck < 0){
        btnTextCheck = btnGroup.eq(num).siblings(".duties-content").find(" > ul li").length - 1;
    }
    btnGroup.eq(num).siblings(".duties-content").find(" > ul li").attr("class","hide");
    btnGroup.eq(num).siblings(".duties-content").find(" > ul li").eq(btnTextCheck).attr("class","show")
    
    btnTextCheck--;
}
function next_text(num){
    btnTextCheck++;
    if(btnTextCheck >= btnGroup.eq(num).siblings(".duties-content").find(" > ul li").length){
        btnTextCheck = 0;
    }
    btnGroup.eq(num).siblings(".duties-content").find(" > ul li").attr("class","hide");
    btnGroup.eq(num).siblings(".duties-content").find(" > ul li").eq(btnTextCheck).attr("class","show")
}