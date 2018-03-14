console.log("security_questions.js loaded");

var securityQuestions = [
{ question: "What was your first pet's name?", 
  expectedAnswer:"FlufferNutter"
},
{ 
	question: "Which city did your parents meet?",
	expectedAnswer: "Toronto"
},
{
	question: "What is your mother's maiden name?"
    expectedAnswer: "Pedersen"
}
]

for (let i = 0; i < securityQuestions.length; i++) {
	let userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer) {
		alert("Incorrect response");
		console.log("Stop!");
		break;
	}
}