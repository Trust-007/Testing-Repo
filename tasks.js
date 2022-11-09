const stringLength = (string) => {
  const toArr = string.split('');
  if (toArr.length >= 1 && toArr.length <= 10) {
    return toArr.length;
  } else {
    throw new Error('string length must be from 1 to 10')
  }
}

const reverseString = (string) => {
  const reversedString = string.split('').reverse().join('');
  return reversedString;
}

class Calculator {
  add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
    } else {
      throw new Error('not a number');
    }
  }
  subtract(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 - num2;
    } else {
      throw new Error('not a number');
    }
  }
  multiply(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 * num2;
    } else {
      throw new Error('not a number');
    }
  }
  divide(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('divide by zero');
      }
    } else {
      throw new Error('not a number');
    }
   
  }
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {stringLength, reverseString, Calculator, capitalize};