// 輸入會是一個數字的陣列，回傳一個新的陣列，保持原來的數字，除了以下幾種：
// 3 的倍數要換成 Fizz
// 5 的倍數要換成 Buzz
// 又是 3 又是 5 的倍數要換成 FizzBuzz

// 例如   [1, 2, 3, 4, 5]
// 會回傳 [1, 2, Fizz, 4, Buzz]

function fizzBuzz(input) {
  
  let outputArray = [];
  for (let i = 0; i < input; i++) {
    if ((i + 1) % 15 === 0) {
      outputArray[i] = 'FizzBuzz';
    } else if ((i + 1) % 3 === 0) {
      outputArray[i] = 'Fizz';
    } else if ((i + 1) % 5 === 0) {
      outputArray[i] = 'Buzz';
    } else {
      outputArray[i] = i + 1;
    }
  }
  let output = outputArray.join(' ');
  return output;
}

module.exports = {fizzBuzz};
