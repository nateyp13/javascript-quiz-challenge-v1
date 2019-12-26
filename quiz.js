var questions = [
    ["how many states are in the US?", 50],
    ["how many continents are there?", 7],
    ["How many legs do an insect have?", 6]
];

var correct;
var wrong;
var guess;
var correctNum = 0;

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

for (i = 0; i < questions.length; i += 1) {
    var question = questions[i][0];
    var answer = questions[i][1];
    guess = parseInt(prompt(question));
    if (guess === answer) {
        correctNum += 1;
    }
}

print('You got ' + correctNum + ' questions right.');
