function reverse(str){
    let result = '';
    for (let i = str.length - 1; i>= 0; i--){
        result += str[i]
    }
    return result
}

function reverse2(str){
    return str.split('').reverse().join('')
}

function addUpToFirst(n){
    let total =0;

    for (let i = 1; i <= n; i++){
        total += i
    }
    return total;
}

function addUpToSecond(n) {
    return n * (n + 1) / 2
}

function allEven(nums) {
    let loopCount = 0
    for (let i = 0; i < nums.length; i++){
        loopCount++
        if (nums[i] % 2 !== 0){
            console.log("LOOP COUNT:", loopCount)
            return false
        }
    }
    return true
}


function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }

function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }

  function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  
  
  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }