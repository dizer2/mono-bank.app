let cardReshit = document.getElementById("card-number-box");
if ("SignIn" in localStorage ) {
	localStorage.removeItem("SignIn");
}

console.log(users)

function onCharInput()
{
  var conpagechars = document.getElementById("cardNumbemInput").value;
  cardReshit.innerHTML = conpagechars;

  
}

function onHoldInput()
{
  var conpagechars2 = document.getElementById("login").value;
  cardholder.innerHTML = conpagechars2;

}

document.querySelector('.month-input').oninput = () =>{
	document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
	document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}


document.querySelector('.cvv-input').oninput = () =>{
	document.querySelector('.cvv__text').innerText = document.querySelector('.cvv-input').value;
}


document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}



$(".sumbit-btn").click(function () { 
	let cardUser =  cardNumbemInput.value;
	let loginUser =  login.value;
	let passwordUser =  password.value;
	let mmUser =  expMmonth.innerHTML;
	let yyUser =  expYear.innerHTML;
	let cvvUser =  cvv.value;



	if(passwordUser.length < 8){
		$("#password__titel").text("Your passwrod to short");
		$("#password__titel").css('color', 'red');
	}else{
		$("#password__titel").text("Create a password");
		$("#password__titel").css('color', '#A5A3A3');
	}

	if(loginUser.length > 4){
		$("#login__titel").text("Login");
		$("#login__titel").css('color', '#A5A3A3');
	}else{
		$("#login__titel").text("Your login to short");
		$("#login__titel").css('color', 'red');
	}

	if(cvvUser.length == 3){
		$("#cvv__titel").text("CVV");
		$("#cvv__titel").css('color', '#A5A3A3');
	}else{
		$("#cvv__titel").text("Your cvv to short");
		$("#cvv__titel").css('color', 'red');
	}


	
	if(cardUser.length != 16){
		$("#card__titel").text("Your card number to short");
		$("#card__titel").css('color', 'red');
	}else{
		$("#card__titel").text("Card Number");
		$("#card__titel").css('color', '#A5A3A3');
	}

	if(mmUser == "mm"){
		$("#exprainsMM__titlel").text("Chose MM");
		$("#exprainsMM__titlel").css('color', 'red');
	}else{
		$("#exprainsMM__titlel").text("Expiration MM");
		$("#exprainsMM__titlel").css('color', '#A5A3A3');
	}
	if(passwordUser.length > 8 && loginUser.length > 4 && cvvUser.length == 3 && cardUser.length == 16 && mmUser != "mm"){
		
		
	let userControlUsers = [];
	let userLoginUsers = [];
	let userPasswordsUsers = [];


	let controlArr = users[0].info.length;

	if(controlArr != 1){
		let lengthArr = users.length - 1;
		users[lengthArr].info.push({
		cards: cardUser,
		logins: loginUser,
		passwords: passwordUser,
		mm: mmUser,
		yy: yyUser,
		cvv: cvvUser,
		cardCost: 100,
		imageUrl: `../../../img/main__img/icon__users.svg`,
	});
	for(let i = 0; i < users.length - 1; i++){
		let gg = users[i].info[1].cards;
		let ggLogin = users[i].info[1].logins;
		let ggPassword = users[i].info[1].passwords;


		let ct = gg.includes(cardUser);
		let ctLogin = ggLogin.includes(loginUser);
		let ctPassword = ggPassword.includes(passwordUser);


		userControlUsers.push(ct);
		userLoginUsers.push(ctLogin);
		userPasswordsUsers.push(ctPassword);


	}
	
	let includsContol = userControlUsers.includes(true);
	let includsContolLogins = userLoginUsers.includes(true);
	let includsContolPassword = userPasswordsUsers.includes(true);

		
	if(includsContol == false){
		$("#card__titel").text("Card Number");
		$("#card__titel").css('color', '#A5A3A3');
		if(includsContolLogins == false && includsContolPassword == false){
			console.log("COnt")
		
		localStorage.USERS = JSON.stringify(users); 		
				location.href = "../main/main.html";
				
		}else{
			console.log("Sorry")
			users[users.length - 1].info.pop();
			$("#login__titel").text("This login is already in use");
			$("#login__titel").css('color', 'red');
			$("#password__titel").text("This password is already in use");
			$("#password__titel").css('color', 'red');
		}
		// console.log("CONT")

	}else{
		users[users.length - 1].info.pop();
		$("#card__titel").text("This card number is already in use, please enter another");
		$("#card__titel").css('color', 'red');
	}
   }else{
	let lengthArr = users.length - 1;
		users[lengthArr].info.push({
		cards: cardUser,
		logins: loginUser,
		passwords: passwordUser,
		mm: mmUser,
		yy: yyUser,
		cvv: cvvUser,
		cardCost: 100,
		imageUrl: `../../../img/main__img/icon__users.svg`,
	});

	
	localStorage.USERS = JSON.stringify(users); 		
			location.href = "../main/main.html";
   }
	
	

	}
	

	
	
});

