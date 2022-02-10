/*
     Team Quixotic Insects :: Qina Liu, Ivan Mijacika
     SoftDev pd2
     K29 -- DOM ++
     2022-02-10
   --------------------------------------------------
*/


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...

// FAC
let fact = (n) => {
  if (n == 0) {
    return 1;
  }
  else {
    return (fact(n - 1) * n);
  }
}

// prints fact 5 directly into dev console; gives 120, fact works!
console.log(fact(5));

// FIB
let fib = function(n) {
  if (n <= 1){
    return n;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
}
console.log(fib(5));

// GCD
let gcd = function(a, b) {
  if ( a < 0){
    return gcd (a*-1, b);
  }
  if (b < 0){
    return gcd (a, b*-1);
  }
  if (a == 0){
    return b;
  }
  if (a > b) {
    return gcd(b, a)
  }
  let r = b % a;
  if (r == 0) {
    return a;
  }
  else {
    return gcd(r, a);
  }
}

// fac implementation
let addFac = function(){
  text = "Factorial 5: " + fact(5);
  addItem(text);
}
let fac = document.getElementById("fac");
fac.addEventListener('click', addFac);

// fib implementation

let addFic = function(){
  addItem("7th Fibonacci: " + fib(7));
}
let fibButton = document.getElementById("fib");
fibButton.addEventListener('click', addFic);

// gcd implementation
let addGCD = function(){
  addItem("GCD of 27 and 72: " + gcd(27, 72));
}
let GCDButton = document.getElementById("gcd");
GCDButton.addEventListener('click', addGCD);

// extra
let newlist = document.createElement("p");
let green = document.getElementById("div1");
green.appendChild(newlist);
let ps = document.getElementsByTagName("p");
ps[0].innerHTML = "hi";
