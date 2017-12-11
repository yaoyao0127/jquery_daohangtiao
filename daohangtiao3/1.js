$(function(){
	$(".nav .list li").hover(function(){
		$(this).find(".down").stop().slideDown(300)
	},function(){
		$(this).find(".down").stop().slideUp(300)
	})
})