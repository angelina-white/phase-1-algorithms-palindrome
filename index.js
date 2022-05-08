function isPalindrome(word) {
  const oldArr = []
  const newArr = []
  //1. break down word into an array of each char
  for (let i in word)
  {
    oldArr.push(word[i])
  };

  //2. reverse old array into a new array
  for (let j = word.length; j >= 0; j--)
  {
    newArr.push(word[j])
  };

  var oldArrStr = oldArr.join("");
  var newArrStr = newArr.join("");

  console.log("newArr: " + oldArrStr)
  console.log("oldArr: " + newArrStr)

  //3. compare old array and new array
  if (newArrStr == oldArrStr)
  {
    //4. if same, then true
    return true
  }
  else if (newArrStr != oldArrStr)
  {
    //5. if different, then false
    return false;
  }
}

/* 
  Add your pseudocode here
  const oldArr=[]
  const newArr =[]
  for (let i in word)
  {
    oldArr.push(word[i])
  }
  for (let i=word.length, i>=0, i--)
  {
    newArr.push(word[i])
  }
  if (newArr == OldArr)
    return true
  else if (newArr != oldArr)
    return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
