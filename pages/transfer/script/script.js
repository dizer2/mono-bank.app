
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

$(".taskbar__box").mouseenter(function () { 
	$(this).find(".more__img").addClass("more__img-hover");
	$(this).find(".more__img").removeClass("more__img");

});

$(".taskbar__box").mouseleave(function () { 
	$(this).find(".more__img-hover").addClass("more__img");
	$(this).find(".more__img").removeClass("more__img-hover");

});
//. taskbar .

$(".info__card-box").hide();
$(".info__users-info").hide();
$(".main__header-users").hide();



let lastUsers3 = users.length - 1;


if ("SignIn" in localStorage ) {
	let loginsCheck = usersSignIn.info[1].logins;
	let passwordCheck = usersSignIn.info[1].passwords;
		
	for(let i = 0; i < users.length; i++){
		if(loginsCheck == users[i].info[1].logins && passwordCheck == users[i].info[1].passwords){
		let includesTwenty2 = i;
		console.log(i)
		lastUsers3 = includesTwenty2;
	  }
	}
	}

console.log(users[0].info)
let lastUsers2 = users.length - 1;




$(".main__next").click(function () { 
	

		let inputValue = cardInput.value;
		if(inputValue == ""){
			$(".header__description").text("Enter the number of the card to which you want to transfer money");
			$(".header__description").css("color", "red");
		}
		for(let i = 0; i < users.length; i++){
			
			if(inputValue == users[i].info[1].cards){
				if(inputValue == users[lastUsers3].info[1].cards){
				$(".header__titel").text("You write you number card");
				$(".header__titel").css("color", "red");

				}else{
				// let yourMoney = users[lastUsers3].info[1].cardCost;
				// let transferMoney = users[i].info[1].cardCost;
				$(".header__titel").text("Transfer to the card");
				$(".header__description").css("color", "#E6E6E6");
				$(".header__titel").css("color", "#fff");
				console.log(users[lastUsers3].info[1].cards)
			$(".info__cat").hide();
			$(".info__users-info").show();
			let userUrl;
			let userLogin;
			if ("SignIn" in localStorage ) {
				userUrl = users[i].info[1].imageUrl;
				userLogin = users[i].info[1].logins;
			}else{
				userUrl = users[i].info[1].imageUrl;
				userLogin = users[i].info[1].logins;
			}

			$('.users__icon').css('background-image', `url(${userUrl})`);
			$('.users__login').text(userLogin);
			//!
			//!
			//!


			$(".users__container").click(function () { 
			$(".info__users-info").hide();
			$(".main__header").hide();
			$(".main__header-users").show();
			$(".info__card-box").show();
			$("#yourMoneytext").text(parseInt(users[lastUsers3].info[1].cardCost));
			$(".info__button").click(function () { 
				let moneWhichTransfer = info__input.value;
				$("#info__input").val("");
				let constol = moneWhichTransfer < 0;
				if(moneWhichTransfer != "" && constol == false){
					$("#info__input").removeClass("info__input__eror");
					if(moneWhichTransfer > 	users[lastUsers3].info[1].cardCost){
						$("#yourMoneytext").css("color", "red");
						$(".dollar").css("color", "red");
	
					}else{
						if ("SignIn" in localStorage ) {
						usersSignIn.info[1].cardCost -= parseInt(moneWhichTransfer);
						localStorage.SignIn = JSON.stringify(usersSignIn); 		

							}
					$("#yourMoneytext").css("color", "#fff");
					$(".dollar").css("color", "#fff");
					users[i].info[1].cardCost += parseInt(moneWhichTransfer);
					users[lastUsers3].info[1].cardCost -= parseInt(moneWhichTransfer);
					let innerToMoney = users[lastUsers3].info[1].cardCost
			
					console.log(users)
	                localStorage.USERS = JSON.stringify(users); 		
			$("#yourMoneytext").text(parseInt(users[lastUsers3].info[1].cardCost));

					}
				}else{
				$("#info__input").addClass("info__input__eror");

				}

			  });
			});
		     }
			}
		}


});