// 這個函式接收一個參數叫 name，
// 如果 name 是 undefined 或是 null 的話，回傳 "One for you, one for me"
// 如果 name 是其它名字的話，那回傳 "One for 名字, one for me"
function twoFer(name) {
  
  if ((name === null) || (name === undefined)) {
    return 'One for you, one for me';
  }
  return `One for ${name}, one for me`;
}

module.exports = {twoFer};
