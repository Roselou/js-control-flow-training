var userLogin =
{
	userName: "roselou",
	password: "Stella143"
}

var passwordInput; 

var loggedIn = false; 

let failures = 0;

while (!loggedIn && failures < 3) {
	passwordInput = prompt("Enter the password for user " + userLogin.userName + ".")
	if (passwordInput === userLogin.password){
		console.log("Correct password");
		loggedIn = true;
	} else {
		console.log("Incorrect password. Try again.");''
		failures++
	}
}
if (failures === 3) {
	alert("Wrong password entered too many times. You are now blocked.")
}