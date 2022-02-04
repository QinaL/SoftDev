// Team (Liu)^2 :: Sophie Liu, Qina Liu
// SoftDev pd2
// K27 -- Basic functions in JavaScript
// 2022-02-04
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn

var fact = (n) => {
  if (n == 0) {
    return 1;
  }
  else {
    return (fact(n - 1) * n);
  }
};

// prints fact 5 directly into dev console; gives 120, fact works!
console.log(fact(5));

var fib = function(n) {
  if (n <= 1){
    return n;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
};

// gives 5 in dev console, fib fxn works!
console.log(fib(5));


// (define fact (int n)
//   (lambda (n)
//     (if (n = 0)
//         1
//         else {
//
//         }
//          (fact(- n 1)) n)
//         )
//     )
//   )
//
// (define fib
//   (lambda (n)
//     (if (<= n 1)
//         n
//         (+ (fib(- n 1)) (fib(- n 2)))
//         )
//     )
//   )
