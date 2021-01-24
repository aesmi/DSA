var factorial = function (num) {
  return num === 1 ? 1 : num * factorial(num - 1);
};

var t0 = new Date().getMilliseconds();

factorial(999); // <---- The function you're measuring time for

var t1 = new Date().getMilliseconds();
console.log(factorial(999));
console.log("Call to factorial took " + (t1 - t0) + " milliseconds.");
