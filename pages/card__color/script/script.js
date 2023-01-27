let lastUsers2 = users.length - 1;
let lastInfo = users[lastUsers2].info
let newLastInfo = lastInfo.length
let checkColor = users[lastUsers2].info[newLastInfo - 1].cardsColors;
let controlIncludes = users[lastUsers2].info[newLastInfo - 1];
let checkColorSignIn;
if ("SignIn" in localStorage ) {
	checkColorSignIn = usersSignIn.info[usersSignIn.info.length - 1].cardsColors;
    checkColor = checkColorSignIn;

} 


if ("SignIn" in localStorage ) {
let loginsCheck = usersSignIn.info[1].logins;
let passwordCheck = usersSignIn.info[1].passwords;


for(let i = 0; i < users.length; i++){
	console.log(users[i].info[1].passwords)
	if(loginsCheck == users[i].info[1].logins && passwordCheck == users[i].info[1].passwords){
	let includesTwenty2 = i;
	lastUsers2 = includesTwenty2;
  }
}
}



if(checkColor == "black"){
	$(".card__row").removeClass("card__row-active");
	$(".black__card").addClass("card__row-active");
}

if(checkColor == "white"){
	$(".card__row").removeClass("card__row-active");
	$(".white__card").addClass("card__row-active");
}

if(checkColor == "purple"){
	$(".card__row").removeClass("card__row-active");
	$(".purple__card").addClass("card__row-active");
}

if(checkColor == "yellow"){
	$(".card__row").removeClass("card__row-active");
	$(".yellow__card").addClass("card__row-active");
}

if(checkColor == "dia"){
	$(".card__row").removeClass("card__row-active");
	$(".dia__card").addClass("card__row-active");
}




$(".leave").click(function(){
	location.href = "../main/main.html";

});


$(".card__row").mouseenter(function () { 
	$(".card__row").removeClass("card__row-active2");
	$(this).addClass("card__row-active2");
});

$(".card__row").mouseleave(function () { 
	$(this).removeClass("card__row-active2");
})

$(".card__row").click(function () { 
	$(".card__row").removeClass("card__row-active");
	$(this).addClass("card__row-active");
});
console.log(users)
console.log(checkColor)
$(".black__card").click(function () { 
	if(checkColor != undefined){
		users[lastUsers2].info.pop();
	}
	if ("SignIn" in localStorage ) {

	if(checkColorSignIn != undefined){
		usersSignIn.info.pop();
	}
	users[lastUsers2].info.push({
		cardsColors: "black",
	});

	usersSignIn.info.push({
		cardsColors: "black",
	});	
	localStorage.SignIn = JSON.stringify(usersSignIn); 
    }     		
	localStorage.USERS = JSON.stringify(users); 	

});

$(".white__card").click(function () { 
	if(checkColor != undefined){
		users[lastUsers2].info.pop();
	}
	users[lastUsers2].info.push({
		cardsColors: "white",
	});
	if ("SignIn" in localStorage ) {

	if(checkColorSignIn != undefined){
		usersSignIn.info.pop();
	}

	usersSignIn.info.push({
		cardsColors: "white",
	});	

	localStorage.SignIn = JSON.stringify(usersSignIn); 	
      }  	
	localStorage.USERS = JSON.stringify(users); 		

});

$(".yellow__card").click(function () { 
	if(checkColor != undefined){
		users[lastUsers2].info.pop();
	}
	users[lastUsers2].info.push({
		cardsColors: "yellow",
	});

	if ("SignIn" in localStorage ) {
	
	if(checkColorSignIn != undefined){
		usersSignIn.info.pop();
	}
	
	usersSignIn.info.push({
		cardsColors: "yellow",
	});	
	localStorage.SignIn = JSON.stringify(usersSignIn); 	
   }	
	localStorage.USERS = JSON.stringify(users); 		

	
});


$(".dia__card").click(function () { 
	if(checkColor != undefined){
		users[lastUsers2].info.pop();
	}
	users[lastUsers2].info.push({
		cardsColors: "dia",
	});
	
	if ("SignIn" in localStorage ) {

	if(checkColorSignIn != undefined){
		usersSignIn.info.pop();
	}
	
	usersSignIn.info.push({
		cardsColors: "dia",
	});	

	localStorage.SignIn = JSON.stringify(usersSignIn); 
    }	
	localStorage.USERS = JSON.stringify(users); 		

	
});

$(".purple__card").click(function () { 
	if(checkColor != undefined){
		users[lastUsers2].info.pop();
	}
		
	users[lastUsers2].info.push({
		cardsColors: "purple",
	});
	if ("SignIn" in localStorage ) {

	if(checkColorSignIn != undefined){
		usersSignIn.info.pop();
	}
	
	usersSignIn.info.push({
		cardsColors: "purple",
	});	
	localStorage.SignIn = JSON.stringify(usersSignIn);
	} 	
	localStorage.USERS = JSON.stringify(users); 		
	
});

