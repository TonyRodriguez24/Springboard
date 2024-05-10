function randomGame() {
  let counter = 1;
  let test = setInterval(function () {
    let decimal = Math.random();
    let decimalRounded = Math.floor(decimal * 100) / 100;

    if (decimalRounded < 0.75)
      {
      counter++;
      console.log(decimalRounded);
    }

    else if(counter === 1){
      console.log(decimalRounded)
      console.log(`It took ${counter} try to find a number greater than .75`)
      clearInterval(test);
    }

    else
    {
      console.log(decimalRounded)
      console.log(
        `It took ${counter} tries to find a number greater than .75`
      );
      clearInterval(test);
    }
  }, 1000);
}

randomGame();