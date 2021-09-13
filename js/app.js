var eleAnswer = document.body.querySelector(".answer");
var qOne = Number(prompt("What is the first number?"));

if(Number.isNaN(qOne)) {
    eleAnswer.innerHTML="You didn't input a number... Don't bother with the rest. Refresh and try again.";
} else {
    eleAnswer.innerHTML="Nice.";
    var operator = prompt("Give an operator, like +, -, / or *.");
    if((operator == "+") || (operator == "-") || (operator == "/") || (operator=="*")) {
        eleAnswer.innerHTML="Good, keep going.";
        var qTwo = Number(prompt("What is the second number?"));
        if(Number.isNaN(qTwo)) {
            eleAnswer.innerHTML="You didn't input a number... Don't bother with the rest. Refresh and try again.";
        } else {
            eleAnswer.innerHTML = "Nice.";
            if((operator == "+")) {
                var math = qOne + qTwo;
                eleAnswer.innerHTML=qOne + " " + operator + " " + qTwo + " = " + math;
            } else if((operator == "-")) {
                var math = qOne - qTwo;
                eleAnswer.innerHTML=qOne + " " + operator + " " + qTwo + " = " + math;
            } else if((operator == "/")) {
                var math = qOne / qTwo;
                eleAnswer.innerHTML=qOne + " " + operator + " " + qTwo + " = " + math;
            } else if((operator == "*")) {
                var math = qOne * qTwo;
                eleAnswer.innerHTML=qOne + " " + operator + " " + qTwo + " = " + math;
            }
        }
    } else {
        eleAnswer.innerHTML="Uh...can you read?";
    }
}

// = is used for assigning values to a variable in JavaScript.
// == is used for comparison between two variables irrespective of the datatype of variable.
// === is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values.