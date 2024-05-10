//countdown(4);
//4
//3
// //2
// //1
// //"DONE!"

function countdown(number) {
  let timer = setInterval(function () {
    if (number > 0) {
      console.log(number);
      number--;
    } else {
      console.log("DONE!");
      clearInterval(timer);
    }
  }, 1000);
}

countdown(4);


