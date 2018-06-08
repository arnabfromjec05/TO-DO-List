strike();
remove();

$("input").on("keypress",function(evt){
	if(evt.which===13)
	{
		var str=$(this).val();
		var val="<li><span><i class=\"fas fa-trash-alt\"></i></span> "+str+"</li>";
		$("ul").html($("ul").html() + val);
		//$("ul").append(val);
		$("input").val("");
		strike();
		remove();
	}
})

$(".fa-plus").on("click",function(){
	$("input").fadeToggle(500);
})

function strike()
{
	$("li").on("click",function(){
		$(this).toggleClass("strike");
	})
}

function remove()
{
	$("span").on("click",function(evt){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		evt.stopPropagation();
	});
}