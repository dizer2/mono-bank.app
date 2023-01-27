$(".main__icon-picture").hide();


$(".main__info-box").click(function () { 
	location.href = "https://www.google.com/maps/d/u/0/viewer?mid=1zNth573iSChKga5SBVg15ZOPXjLTrHVf&ll=48.71083895704166%2C30.396858000000016&z=6";
});


 
let lastUsers6 = users.length - 1;
if ("SignIn" in localStorage ) {
	let loginsCheck = usersSignIn.info[1].logins;
	let passwordCheck = usersSignIn.info[1].passwords;
	for(let i = 0; i < users.length; i++){
		if(loginsCheck == users[i].info[1].logins && passwordCheck == users[i].info[1].passwords){
		let includesTwenty2 = i;
		lastUsers6 = includesTwenty2;
		console.log(i)
		console.log(users)
	  }
	}
		
}

let loginHeader = users[lastUsers6].info[1].logins;
let EmailHeader = users[lastUsers6].info[0];


$('.header__login').text(loginHeader);
$('.info__email').text(EmailHeader);





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
	$(this).find(".credit__taskbar__img").addClass("credit__taskbar__img-hover");
	$(this).find(".credit__taskbar__img").removeClass("credit__taskbar__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".credit__taskbar__img-hover").addClass("credit__taskbar__img");
	$(this).find(".credit__taskbar__img").removeClass("credit__taskbar__img-hover");

});

$(".taskbar__box").mouseenter(function () { 
	$(this).find(".gift__img").addClass("gift__img-hover");
	$(this).find(".gift__img").removeClass("gift__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".gift__img-hover").addClass("gift__img");
	$(this).find(".gift__img").removeClass("gift__img-hover");

});
//. taskbar .



$(".header__icon-box").click(function () { 
	$(".main__icon-picture").show();
	$(".main__container").hide();

	

});
let lastUsers3 = users.length - 1;


if ("SignIn" in localStorage ) {
	let loginsCheck = usersSignIn.info[1].logins;
	let passwordCheck = usersSignIn.info[1].passwords;
	for(let i = 0; i < users.length; i++){
		if(loginsCheck == users[i].info[1].logins && passwordCheck == users[i].info[1].passwords){
		let includesTwenty2 = i;
		lastUsers3 = includesTwenty2;
	  }
	}
		
}


let imageUrl = users[lastUsers3].info[1].imageUrl;
$('#image').css('background-image', `url(${imageUrl})`);


const file = document.querySelector("#file")
file.addEventListener("change", function() {
  const reader = new FileReader()
  reader.addEventListener("load", () => {
    document.querySelector("#image").src = reader.result
	users[lastUsers3].info[1].imageUrl = reader.result;
	localStorage.USERS = JSON.stringify(users); 	
	if ("SignIn" in localStorage ) {
	usersSignIn.info[1].imageUrl = reader.result;
	localStorage.SignIn = JSON.stringify(usersSignIn); 
	}
	$('#image').css('background-image', `url(${reader.result})`);



  })
  reader.readAsDataURL(this.files[0]);
})


$(".delate__accaunt").click(function () { 
	if ("SignIn" in localStorage ) {
		
		$(".top__sorry").text("Sorry, we are unable to view your account at this time");
		$(".top__sorry").css('color', 'red');

	}else{
    	users.pop();
	    localStorage.USERS = JSON.stringify(users); 	
	    location.href = "../../index.html";
	}


});
$(".leave__accaunt").click(function () { 
	location.href = "../../index.html";

});