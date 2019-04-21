// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列
let numbers = [5, 7, 9, 11, 13, 15];


// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
	let counter = 0;
	while (counter < list.length) {
		list[counter]+= 1;
		counter++;
	}
	return list;
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  let listNew = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      listNew.push(list[i]);
    }
  }
  return listNew;
}

module.exports = {numbers, eachAddOne, onlyEven}
