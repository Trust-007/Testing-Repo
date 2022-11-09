const {stringLength, reverseString, Calculator, capitalize} = require('./tasks');

test('enters hello to output 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('enters hellothereyou to throw error', () => {
  expect(() => stringLength('hellothereyou')).toThrow('string length must be from 1 to 10');
});

test('enters empty string to throw error', () => {
  expect(() => stringLength('')).toThrow('string length must be from 1 to 10');
});


test('enters hello to output olleh', () => {
  expect(reverseString('hello')).toMatch(/olleh/);
});

describe('add', () => {
  const calculator = new Calculator();

  test('enters 4 and 5 to output 9', () => {
    expect(calculator.add(4,5)).toBe(9);
  });
  test('enters "8" and 5 to throw an error', () => {
    expect(() => calculator.add('8',5)).toThrow('not a number');
  });
  test('enters 0 and 5 to output 5', () => {
    expect(calculator.add(0,5)).toBe(5);
  });
});

describe('subtract', () => {
  const calculator = new Calculator();

  test('enters 4 and 5 to output -1', () => {
    expect(calculator.subtract(4,5)).toBe(-1);
  });
  test('enters 6 and "5" to throw an error', () => {
    expect(() => calculator.subtract(6,'5')).toThrow('not a number');
  });
  test('enters 7 and 5 to output 2', () => {
    expect(calculator.subtract(7,2)).toBe(5);
  });
});

describe('multiply', () => {
  const calculator = new Calculator();

  test('enters 4 and 5 to output 20', () => {
    expect(calculator.multiply(4,5)).toBe(20);
  });
  test('enters "7" and 5 to throw an error', () => {
    expect(() => calculator.multiply('7',5)).toThrow('not a number');
  });
  test('enters 7 and 5 to output 35', () => {
    expect(calculator.multiply(7,5)).toBe(35);
  });
});

describe('divide', () => {
  const calculator = new Calculator();

  test('enters 10 and 2 to output 5', () => {
    expect(calculator.divide(10,2)).toBe(5);
  });
  test('enters "7" and 5 to throw an error', () => {
    expect(() => calculator.divide('7',5)).toThrow('not a number');
  });
  test('enters 7 and 0 to throw an error', () => {
    expect(() => calculator.divide(7,0)).toThrow('divide by zero');
  });
});

test('enters string to output String', () => {
  expect(capitalize('string')).toMatch(/String/);
});