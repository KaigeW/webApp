// check off specific TODO by Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("complete");
});

// Click on X to delete TODO
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var newTodo=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(500);
})
