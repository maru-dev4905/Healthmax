var defaultText = $(".select-default");
var current = $(".select-box");
var curli = $(".select-box li");
var toggle = true;

if($(".filter-all-btn").length){
    var allBtn = $(".filter-all-btn");
    
    allBtn.click(function(){
        current.css('display','none');
        toggle = true;

        defaultText.text("지역선택");
    })
}

defaultText.click(function(){
    console.log("2");
    if(toggle){
        console.log("asd");
        current.css('display','block');
        toggle = false;
    }else{
        current.css('display','none');
        toggle = true;
    }
})

curli.click(function(){
    console.log("3");
    curli.removeClass("selected");

    $(this).addClass("selected");
    var selectedText = $(this).text();

    defaultText.text(selectedText);
    current.css('display','none');
    toggle = true;
})