
$(".sumbit-btn").click(function () {
	if ("USERS" in localStorage ) {
		let loginUser =  login.value;
	let passwordUser =  password.value;
	console.log(users)
	console.log(usersSignIn)

	for(let i = 0; i < users.length; i++){
		if(loginUser == users[i].info[1].logins && passwordUser == users[i].info[1].passwords){
	
			let includesTwenty = users[i];
			if ("SignIn" in localStorage ) {
				usersSignIn = [];
				usersSignIn.push({
					signIn: includesTwenty,
				});

			}else{
			usersSignIn.push({
				signIn: includesTwenty,
		
			});
		    }
			console.log(includesTwenty)
			location.href = "../main/main.html";
	        localStorage.SignIn = JSON.stringify(includesTwenty); 		

		}
	}
	}else{
		console.log("NO")
		$("#card__titel").text("Sorry, but you have not registered any account yet");
		$("#card__titel").css('color', 'red');
		$("#login__titel").text("Sorry, but you have not registered any account yet");
		$("#login__titel").css('color', 'red');
	}
	


	
	
});

