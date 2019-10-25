// Warm up challenge: write a vanilla JS script that will output a sideways pyramid of asterisks ("*") in the console. The tip of the pyramid will be ten asterisks tall. You can only use two console.log() statements. Do not use "\n" to create a new line.

function makeAPyramid(n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += "*";
    console.log(result);
  }

  for (let j = n - 1; j > 0; j--) {
    result = result.slice(0, -1);
    console.log(result);
  }
}

makeAPyramid(10);

// Bonus: write same function but only use one for loop:
