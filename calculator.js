var buttons = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

var operators = {
  "plus" : function(a,b) {return a+b},
  "minus" : function(a,b) {return a-b},
  "divide" : function(a,b) {return a/b},
  "multiply" : function(a,b) {return a*b}
}

var operatorsKeys = Object.keys(operators);
var operand = "";
var operand_2 = "";
var buttonsKeys = Object.keys(buttons);
var first = "";
var second = "";
var result = "";
// Assign onclick functions to all numbers

var result;
var input = document.getElementById('input');
for (let i=0;i<10;i++) {
  $("#" + buttonsKeys[i]).click(function() {
    $("#input").fadeOut(50).fadeIn(50);
    if (input.innerHTML === "0" || first.length === 0) {
      input.innerHTML = i;
    } else if (input.innerHTML.length < 11) {
    input.innerHTML = input.innerHTML + i;
    }
     first = first + i.toString();
  });
}

// -----------

// Assign the clear function to the ON and CE buttons

$(".red-button").click(function () {
  $("#input").fadeOut(50).fadeIn(50);
  input.innerHTML = "0";
  first = "";
  second = "";
  result = "";
});

// ----------

// Assign the dot operand to the dot button

$("#dot").click(function () {
  $("#input").fadeOut(50).fadeIn(50);
  if (input.innerHTML.indexOf('.') < 0) {
    input.innerHTML = input.innerHTML + ".";
    first += ".";
  }
});

// -----------

// Assign delete function to the DEL button

$("#del").click(function() {
  $("#input").fadeOut(50).fadeIn(50);
  if (input.innerHTML.length === 1) {
    input.innerHTML = "0";
    first = "";
  } else if (result.toString() === input.innerHTML) {
    input.innerHTML = input.innerHTML.slice(0, -1);
    result = parseFloat(input.innerHTML);
  } else {
    input.innerHTML = input.innerHTML.slice(0, -1);
    first = first.slice(0, -1);
  }
});

// -----------

// This function will make sure that the result will fit the screen

function results() {
  var lastChar = result.toString().charAt(result.toString.length -1);
  if (result.toString().indexOf(".") != -1) {
    input.innerHTML = result.toFixed(10 - result.toString().indexOf("."));
    result = parseFloat(input.innerHTML);
  }
   if (lastChar === "0") {
   result = result.toString().slice(0, -1);
   results();
 } else {input.innerHTML = result;}
 }


// ------------

// Assign mathematical functions to their respective buttons

for (let i=0; i<4; i++) {
$("#" + operatorsKeys[i]).click(function() {
  if (operand === "") {
  operand = operatorsKeys[i];
  } else {
    operand_2 = operatorsKeys[i];
  }
  $("#input").fadeOut(50).fadeIn(50);
  if (second.length === 0) {
  second = parseFloat(first);
  first = "";
  } else if (first.length > 0 && second.toString() >0) {
    result = operators[operand](second, parseFloat(first));
    results();
    first = "";
    second = "non"
  } else if (second = "non" && first.length === 0) {
     results();
  } else if(second = "non" && first.length > 0) {
    result = operators[operand](result, parseFloat(first));
    results();
    first = "";
  }
 operand = operatorsKeys[i];
});
}

// ------------



// Assign function for the equal button

$("#equal").click(function() {
  if (operand === "") {
    input.innerHTML = 0;
  }
   $("#input").fadeOut(50).fadeIn(50);
  if (second.length === 0) {
  second = parseFloat(first);
  first = "";
  } else if (first.length > 0 && second.toString() >0) {
    result = operators[operand](second, parseFloat(first));
    results();
  } else if (second = "non" && first.length === 0) {
    results();
  } else if(second = "non" && first.length > 0) {
    result = operators[operand](result, parseFloat(first));
    results();
  }
  first = "";
});

// ------------
