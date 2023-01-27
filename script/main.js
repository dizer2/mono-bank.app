var codeVerivicate = Math.floor(1000 + Math.random() * 9000);


$(".wrap").hide();

$(".verificate__container").hide();

setTimeout(function(){
	$(".loading__monobank").hide();
	$(".wrap").show();
	
}, 2000);

const isEmpty = str => !str.trim().length;

document.getElementById("inputNumber1").addEventListener("input", function() {
  if( isEmpty(this.value) ) {
    console.log( "NAME is invalid (Empty)" )
  } else {
    document.getElementById("inputNumber2").focus();
  }
});


document.getElementById("inputNumber2").addEventListener("input", function() {
	if( isEmpty(this.value) ) {
	  console.log( "NAME is invalid (Empty)" )
	} else {
	  document.getElementById("inputNumber3").focus();
	}
  });

document.getElementById("inputNumber3").addEventListener("input", function() {
	if( isEmpty(this.value) ) {
	  console.log( "NAME is invalid (Empty)" )
	} else {
	  document.getElementById("inputNumber4").focus();
	}
  });




$(".user__block2").click(function () { 
	

	let gmailUser = gmail__number.value;
	const validateEmail = (email) => {
		return email.match(
		  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	  };
	  
	  const validate = () => {
		const email = gmailUser;
		if (validateEmail(email)) {

			let userControlUsers = [];

		
			if("USERS" in localStorage ){
				users.push({info : [email]})
				
			for(let i = 0; i < users.length - 1; i++){
				let gg = users[i].info[0];
				let ct = gg.includes(gmail__number.value);
				userControlUsers.push(ct);

		
		
			}
			
			let includsContol = userControlUsers.includes(true);
		
				
			if(includsContol == false){
				console.log("CONT")
				$(".card__titel").css('color', '#000');
			$(".card__title__email").css('color', '#000');
			$(".user__block").css("background-color", "transparent");
			$(".user__block").css('border', '1px solid #D2D2D2');
			$(".user__text").css('color', '#D2D2D2');
			$(".user__block2").css("background-color", "#FA5255");
			$(".user__block2").css('border', 'none');
			$(".user__text2").css('color', '#fff');
	
			function SendMail(){
				var params = {
					email: email,
					code: codeVerivicate,
				}
				emailjs.send("service_tnijpws", "template_zide3yt", params).then(function (res) {
					console.log("Success!" + res.status)
				})
			}
			SendMail();

			$(".card__title__email").text("sms");
			$(".card__titel").text("Enter the code from ");
			$(".verificate__container").show();
			$(".phone__container-input").hide();
			$(".control__user").addClass("control__user__active");

		$(".user__block3").click(function () { 
			let inputNumber1 = $("#inputNumber1").val();
			let inputNumber2 = $("#inputNumber2").val();
			let inputNumber3 = $("#inputNumber3").val();
			let inputNumber4 = $("#inputNumber4").val();
			let resInputNimber = inputNumber1 + inputNumber2 + inputNumber3 + inputNumber4
			if(resInputNimber == codeVerivicate){
				$(".user__block2").css("background-color", "transparent");
				$(".user__block2").css('border', '1px solid #D2D2D2');
				$(".user__text2").css('color', '#D2D2D2');
				$(".user__block3").css("background-color", "#FA5255");
				$(".user__block3").css('border', 'none');
				$(".user__text3").css('color', '#fff');
				$(".wrap__signup").hide();
				
			    localStorage.USERS = JSON.stringify(users); 	
				location.href = "../card__create/card.html";



			}else{
				inputNumber1 = $("#inputNumber1").val("");
				inputNumber2 = $("#inputNumber2").val("");
			    inputNumber3 = $("#inputNumber3").val("");
			    inputNumber4 = $("#inputNumber4").val("");
				$(".card__title__email").text("wrong");
				$(".card__titel").text("Your code");
				$(".card__titel").css('color', 'red');
				$(".card__title__email").css('color', 'red');
			}
			});
			
			}else{
				users.pop();
				$(".card__title__email").text("exists");
			    $(".card__titel").text("Such email already");
			    $(".card__titel").css('color', 'red');
			    $(".card__title__email").css('color', 'red');
				console.log("Sorry");
			}
		   }else{
			
			$(".card__titel").css('color', '#000');
			$(".card__title__email").css('color', '#000');
			$(".user__block").css("background-color", "transparent");
			$(".user__block").css('border', '1px solid #D2D2D2');
			$(".user__text").css('color', '#D2D2D2');
			$(".user__block2").css("background-color", "#FA5255");
			$(".user__block2").css('border', 'none');
			$(".user__text2").css('color', '#fff');

		users.push({info : [email]})

	
			function SendMail(){
				var params = {
					email: email,
					code: codeVerivicate,
				}
				emailjs.send("service_tnijpws", "template_zide3yt", params).then(function (res) {
					console.log("Success!" + res.status)
				})
			}
			SendMail();

			$(".card__title__email").text("sms");
			$(".card__titel").text("Enter the code from ");
			$(".verificate__container").show();
			$(".phone__container-input").hide();
			$(".control__user").addClass("control__user__active");

		$(".user__block3").click(function () { 
			let inputNumber1 = $("#inputNumber1").val();
			let inputNumber2 = $("#inputNumber2").val();
			let inputNumber3 = $("#inputNumber3").val();
			let inputNumber4 = $("#inputNumber4").val();
			let resInputNimber = inputNumber1 + inputNumber2 + inputNumber3 + inputNumber4
			if(resInputNimber == codeVerivicate){
				$(".user__block2").css("background-color", "transparent");
				$(".user__block2").css('border', '1px solid #D2D2D2');
				$(".user__text2").css('color', '#D2D2D2');
				$(".user__block3").css("background-color", "#FA5255");
				$(".user__block3").css('border', 'none');
				$(".user__text3").css('color', '#fff');
				$(".wrap__signup").hide();
				localStorage.USERS = JSON.stringify(users); 	
				location.href = "../card__create/card.html";



			}else{
				inputNumber1 = $("#inputNumber1").val("");
				inputNumber2 = $("#inputNumber2").val("");
			    inputNumber3 = $("#inputNumber3").val("");
			    inputNumber4 = $("#inputNumber4").val("");
				$(".card__title__email").text("wrong");
				$(".card__titel").text("Your code");
				$(".card__titel").css('color', 'red');
				$(".card__title__email").css('color', 'red');
			}
			});
		   }
			

// 
// 
// 
		} else {
			$(".card__title__email").text("wrong");
			$(".card__titel").text("Your emali");
			$(".card__titel").css('color', 'red');
			$(".card__title__email").css('color', 'red');
		}
		return false;
	  }
	  validate();

	console.log(gmailUser)



	
});


	









