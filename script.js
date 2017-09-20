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
var delen = function(a, b) {

  return a / b;


};
var uitkomst = delen(30,5);
console.log(uitkomst);

var vermenigvuldigen = function(a,b) {
  return a * b;
};
var uitkomst2 = vermenigvuldigen(10, 4);
console.log(uitkomst2);

// Opdracht 11
console.log("--- Opdracht 11 ---")
console.log("Klik op de button");
button = document.getElementById("button");
button.addEventListener('click', function(event) {
    console.log('button is clicked!')
})

button = document.getElementById("button");
button.addEventListener('click', function(event) {
    alert("button is clicked!");
})

// Opdracht 12
console.log("--- Opdracht 12 ---");
(function(){
  console.log("Dit is een IIFE funtion");
})();

// Opdracht 13
console.log("--- Opdracht 13 ---");
function closedFunction() {
    var a = 4;
    return a * a;
};
console.log(closedFunction());

// Opdracht 14
console.log("--- Opdracht 14 ---");

var zanger = "Ed Sheeran";

function showSinger(){
  zanger = "Mariah Carey";
  var zanger = "Avicii";
  console.log(zanger);
}
console.log(showSinger());


// Opdracht 15
console.log("--- Opdracht 15 ---");

var arrayNumbers = [1, 2, 3, 4];
console.log(arrayNumbers);

var arrayStrings = ['kat', 'hond', 'rat', 'papegaai', 'cavia'];
console.log(arrayStrings);

var arrayBooleans = [true, false, false, true];
console.log(arrayBooleans);


// Opdracht 16
console.log("--- Opdracht 16 ---");

var groente = [];
groente.push('kiwi');
console.log(groente);

// Opdracht 17
console.log("--- Opdracht 17 ---");

var fruit = ['Aardbei', 'Banaan', 'Kiwi', 'Sinasappel', 'Appel', 'Grapefruit', 'Mandarijn', 'Framboos'];
fruit.splice(0,1);
fruit.splice(1,1);
console.log(fruit);

// Opdracht 18
console.log("--- Opdracht 18 ---");
fruit.pop();
console.log(fruit);
console.log("Hij haalt het laatste String eruit ");

// Opdracht 19
console.log("--- Opdracht 19 ---");
console.log("De tegenhanger van pop is: shift");
fruit.shift();
console.log(fruit);
console.log("Hij haalt de eerste uit de String");

// Opdracht 20
console.log("--- Opdracht 20 ---");
var autos = ['Volkswagen', 'Volvo', 'Ferrari', 'Fiat', 'Lamborghini', 'Aston Martin', 'Audi']
autos.sort();
console.log(autos);
console.log("Dit is op alfabetische volgorde");


autos.reverse();
console.log(autos);
console.log("Dit is in omgekeerde volgorde");

// Opdracht 21
console.log("--- Opdracht 21 ---");
var numbers = [1,5,3,8,9,6];
numbers.sort();
console.log(numbers);
console.log("Ja eigenlijk wel, het gaat gewoon in de juiste volgorde");

// Opdracht 22
console.log("--- Opdracht 22 ---");
autos[0] = "Subaru";
var citrus = autos.slice(0,3);
console.log(citrus);
console.log("De waarde veranderd");

// Opdracht 23
console.log("--- Opdracht 23 ---");
var clubs = new Array("Feyenoord", "Ajax", "PSV", "AZ", "Vitesse", "FC Utrecht");
console.log(clubs);
var landen = ['Nederland', 'Engeland', 'Duitsland'];
landen.unshift('België', 'Frankrijk');
console.log(landen);

// Opdracht 24
console.log("--- Opdracht 24 ---");
/*button.addEventListener('click', function(event) {
    console.log('button is clicked!')
})

button = document.getElementById("button");
button.addEventListener('click', function(event) {
    alert("button is clicked!");
})*/


addEventListener("click", tekstKlik);

function tekstKlik() {
    document.getElementById("demo").innerHTML = "Je hebt op de knop gedrukt";
}

// Opdracht 25
console.log("--- Opdracht 25 ---");
var mobiel    = {type:"Samsung"           , oud  :"Three Years" ,color:"Black"};
var horloge   = {type:"Seiko"             , oud  :"One Month"   ,color:"White"};
var schoenen  = {type:"Le Coque Sportif"  , oud  :"Two Years"   ,color:"Brown"};
var laptop    = {type:"Asus"              , oud  :"One Year"    ,color:"Grey" };
var tas       = {type:"Under Armour"      , oud  :"Half a year" ,color:"Green"};
var tv        = {type:"Samsung"           , oud  :"Two Years"   ,color:"Black"};
var muis      = {type:"SharkForce"        , oud  :"One Year"    ,color:"Black"};
var broek     = {type:"PME Legend"        , oud  :"Two Weeks"   ,color:"Grey" };
var auto      = {type:"Peugeot"           , oud  :"Half a year" ,color:"Black"};
var fiets     = {type:"Batavus"           , oud  :"Five Years"  ,color:"Grey" };
