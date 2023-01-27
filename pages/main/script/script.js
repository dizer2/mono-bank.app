let lastUsers = users.length - 1;


console.log(users[lastUsers].info[1]);
console.log(lastUsers);
let lastInfo = users[lastUsers].info
let newLastInfo = lastInfo.length
let checkColor;


if ("SignIn" in localStorage ) {
	$(".card-number-box").text(usersSignIn.info[1].cards);
	$(".card-holder-name").text(usersSignIn.info[1].logins);
	$(".exp-month").text(usersSignIn.info[1].mm);
	$(".exp-year").text(usersSignIn.info[1].yy);
	$(".cvv__text").text(usersSignIn.info[1].cvv);
	$(".main__money").text(usersSignIn.info[1].cardCost);

	checkColor = usersSignIn.info[usersSignIn.info.length - 1].cardsColors;

} else {
     checkColor = users[lastUsers].info[newLastInfo - 1].cardsColors;
	 $(".card-number-box").text(users[lastUsers].info[1].cards);
	$(".card-holder-name").text(users[lastUsers].info[1].logins);
	$(".exp-month").text(users[lastUsers].info[1].mm);
	$(".exp-year").text(users[lastUsers].info[1].yy);
	$(".cvv__text").text(users[lastUsers].info[1].cvv);
	$(".main__money").text(users[lastUsers].info[1].cardCost);

}



if(checkColor == "black"){
	$('.front').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#111111), to(#272727))" 
});
$('.back').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#111111), to(#272727))" 
});
   $(".logo__text").css("color", "#fff");
   $(".card-number-box").css("color", "#fff");
   $(".box").css("color", "#fff");
   $(".expires").css("color", "#fff");
}

if(checkColor == "white"){
	$('.front').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#F4F4F4), to(#FEFEFE))" 
});
$('.back').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#F4F4F4), to(#FEFEFE))" 
});
   $(".logo__text").css("color", "#000");
   $(".card-number-box").css("color", "#000");
   $(".box").css("color", "#000");
   $(".expires").css("color", "#000");
}

if(checkColor == "purple"){
	$('.front').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#F6BEBC), to(#BB989B))" 
});
$('.back').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#F6BEBC), to(#BB989B))" 
});
   $(".logo__text").css("color", "#fff");
   $(".card-number-box").css("color", "#fff");
   $(".box").css("color", "#fff");
   $(".expires").css("color", "#fff");
}

if(checkColor == "yellow"){
	$('.front').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#F2DE03), to(#F4DF04))" 
});
$('.back').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#F2DE03), to(#F4DF04))" 
});
   $(".logo__text").css("color", "#fff");
   $(".card-number-box").css("color", "#fff");
   $(".box").css("color", "#fff");
   $(".expires").css("color", "#fff");
}

if(checkColor == "dia"){
	$('.front').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#8FE7C1), to(#6FBBE1))" 
});
$('.back').css({
    background: "-webkit-gradient(linear, left bottom, right top, from(#8FE7C1), to(#6FBBE1))" 
});
   $(".logo__text").css("color", "#fff");
   $(".card-number-box").css("color", "#fff");
   $(".box").css("color", "#fff");
   $(".expires").css("color", "#fff");
}



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
$(".credit__taskbar").click(function () { 
	location.href = "../credit/credit.html";

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
	$(this).find(".credit__taskbar__img").addClass("credit__taskbar__img-hover");
	$(this).find(".credit__taskbar__img").removeClass("credit__taskbar__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".credit__taskbar__img-hover").addClass("credit__taskbar__img");
	$(this).find(".credit__taskbar__img").removeClass("credit__taskbar__img-hover");

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




// swipe
// swipe
// swipe

$(".wrap__main__card").hide();

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

const logBlock = document.querySelector(".main__header");

let x1 = null;
let y1 = null;

function handleTouchStart(event){
	const firstTouch = event.touches[0];
	console.log(firstTouch);
	x1 = firstTouch.clientX;
	y1 = firstTouch.clientY;
	// console.log(x1, y1)

}
function handleTouchMove(event){
	if(!x1 || !y1){
		return false;
	}
	let x2 = event.touches[0].clientX;
	let y2 = event.touches[0].clientY;
	// console.log(x2, y2);
	let xDif = x2 - x1;
	let yDif = y2 - y1;
	if(Math.abs(xDif) > Math.abs(yDif)){
		//* right - left
		if(xDif > 0){
			console.log('right')

		}else{
			console.log('left')
	        $(".wrap__main__card__active").removeClass("wrap__main__card__active__none");
			$(".wrap__main__card__active").addClass("wrap__main__card");
			$(".wrap__main__card").show();
			$('.wrap__main').css({
				position: 'absolute',
				left: '-100%' 
			});
			$(".wrap__main__card").addClass("wrap__main__card__active");
			$(".wrap__main__card").removeClass("wrap__main__card");


		}

	}else{
		//* top - bottom
		if(yDif > 0){
			console.log('down');
		}else{
			console.log('top');
		}
	}

}

$('.header__leave').click(function() {
	$(".wrap__main__card__active").addClass("wrap__main__card__active__none");
			$('.wrap__main').css({
				position: 'absolute',
				left: '0%',
			});


});

$(".card-container").click(function(){
	$(".wrap__main__card").addClass("wrap__main__card__active");
	$(".wrap__main__card__active").removeClass("wrap__main__card__active__none");
	$(".wrap__main__card__active").addClass("wrap__main__card");
	$(".wrap__main__card").show();
	$('.wrap__main').css({
		position: 'absolute',
		left: '-100%' 
	});
	$(".wrap__main__card").removeClass("wrap__main__card");
});


$("#card__flip").mouseenter(function(){
	front.style.transform = 'perspective(1000px) rotateY(-180deg)';
    back.style.transform = 'perspective(1000px) rotateY(0deg)';
});

$("#card__flip").mouseleave(function(){
	front.style.transform = 'perspective(1000px) rotateY(0deg)';
    back.style.transform = 'perspective(1000px) rotateY(180deg)';
});


let opened = false;

$('#card__flip').click(function() {
   if(opened == false) {
	  front.style.transform = 'perspective(1000px) rotateY(-180deg)';
      back.style.transform = 'perspective(1000px) rotateY(0deg)';
	   opened = true;
   } else{
	front.style.transform = 'perspective(1000px) rotateY(0deg)';
    back.style.transform = 'perspective(1000px) rotateY(180deg)';
	   opened = false
   }
});

// .swipe.
// .swipe.
// .swipe.

