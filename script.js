var animals = "cat", dog = "dog", tiger = "tiger";

var one       = 1;
var two       = true;
var three     = false;
var four      = "Nummer4";
var five      = 5;
var six       = 6;
var seven     = 7;
var eight     = 8;
var nine      = 9;
var ten       = 10;
var eleven    = 11;
var twelve    = 12;
var thirtheen = 13;
var fourtheen = 14;
var fiftheen  = 15;

one = "one";
five = "five";
two = three;
three = two;
fourtheen = "14";

console.log(typeof(two));
console.log("--- Opdracht 6 - 7 - 8 ---");
// 1. Var + Var
var varplusvar   = seven + six;
console.log(("Var + Var = ") + varplusvar + (" Dit is een ") + typeof(varplusvar));
// 2. Number + String
var numberplusstring   = five  + six;
console.log(("Number + String = ") + numberplusstring + (" Dit is een ") + typeof(numberplusstring));
// 3. Number + Boolean
var numberplusboolean  = one + two;
console.log(("Number + Boolean = ") + numberplusboolean + (" Dit is een ") + typeof(numberplusboolean));
// 4. String + Boolean
var stringplusboolean  = four + three;
console.log(("String + Boolean = ") + stringplusboolean + (" Dit is een ") + typeof(stringplusboolean));
// 5. Number + String Number
var numberplusstringnumber = fiftheen + fourtheen;
console.log(("Number + String Number = ") + numberplusstringnumber + (" Dit is een ") + typeof(numberplusstringnumber));
// 6 String Number + Number
var stringnumberplusstring = fourtheen + fiftheen;
console.log(("String Number + Number = ") + stringnumberplusstring + (" Dit is een ") + typeof(stringnumberplusstring));

// Opdracht 9
console.log("--- Opdracht 9 ---")
function multiply() {
  var value = 5;
  var multiplier = 3;
  var timesthree = value * multiplier;
  return timesthree;
}
console.log(multiply());

function voorachter(voornaam,achternaam) {

  return voornaam + achternaam;
}
console.log(voorachter("Patrick", " Frumau"));

// Opdracht 10
console.log("--- Opdracht 10 ---")
var a = function delen() {

  return console.log(8 / 2);
}
console.log(a);

// Opdracht 11
console.log("--- Opdracht 11 ---")
button = document.getElementById("button")
button.addEventListener('click', function(event) {
    console.log('button is clicked!')
})

button = document.getElementById("button")
button.addEventListener('click', function(event) {
    alert("button is clicked!");
})
