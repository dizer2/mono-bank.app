
$(".taskbar__box").mouseenter(function () { 
	$(this).find(".taskbar__titiel").css("color", "#FB5256");
});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".taskbar__titiel").css("color", "#A9A9A9");
	let theColorIs = $('.card__taskbar__text').css("color");
	if(theColorIs == "rgb(251, 82, 86)"){
	  $(".card__taskbar__text").css("color", "#FB5256");
	}
});


$('.change__bg-card').click(function() {
	location.href = "../card__color/card__color.html";
 });

// taskbar 
$(".card__taskbar__img").click(function () { 
	location.href = "../main/main.html";

});



$(".transfers__taskbar").click(function () { 
	location.href = "../transfer/transfer.html";

});


$(".gift__taskbar").click(function () { 
	location.href = "../gift/gift.html";

});

$(".more__taskbar").click(function () { 
	location.href = "../more/more.html";

});

$(".taskbar__box").mouseenter(function () { 
	$(this).find(".card__taskbar__img").addClass("card__taskbar__img-hover");
	$(this).find(".card__taskbar__img").removeClass("card__taskbar__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".card__taskbar__img-hover").addClass("card__taskbar__img");
	$(this).find(".card__taskbar__img").removeClass("card__taskbar__img-hover");

});

$(".taskbar__box").mouseenter(function () { 
	$(this).find(".transfers__taskbar__img").addClass("transfers__taskbar__img-hover");
	$(this).find(".transfers__taskbar__img").removeClass("transfers__taskbar__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".transfers__taskbar__img-hover").addClass("transfers__taskbar__img");
	$(this).find(".transfers__taskbar__img").removeClass("transfers__taskbar__img-hover");

});

$(".taskbar__box").mouseenter(function () { 
	$(this).find(".gift__img").addClass("gift__img-hover");
	$(this).find(".gift__img").removeClass("gift__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".gift__img-hover").addClass("gift__img");
	$(this).find(".gift__img").removeClass("gift__img-hover");

});

$(".taskbar__box").mouseenter(function () { 
	$(this).find(".more__img").addClass("more__img-hover");
	$(this).find(".more__img").removeClass("more__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".more__img-hover").addClass("more__img");
	$(this).find(".more__img").removeClass("more__img-hover");

});
//. taskbar .




