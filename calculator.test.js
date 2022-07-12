import Calculator from './calculator';

describe('My Calculator', () => {
  const calculator = new Calculator();


  describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(calculator.add(a, b)).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
      expect(calculator.add(a, b)).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
      expect(calculator.add(a, b)).not.toBeLessThan(expected);
    });
  });
  describe.each([
    [1, 1, 0],
    [1, 2, -1],
    [2, 1, 1],
  ])('.subtract(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(calculator.subtract(a, b)).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
      expect(calculator.subtract(a, b)).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
      expect(calculator.subtract(a, b)).not.toBeLessThan(expected);
    });
  });
  describe.each([
    [1, 1, 1],
    [1, 2, 2],
    [2, 3, 6],
  ])('.multiply(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(calculator.multiply(a, b)).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
      expect(calculator.multiply(a, b)).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
      expect(calculator.multiply(a, b)).not.toBeLessThan(expected);
    });
  });
  describe.each([
    [1, 1, 1],
    [1, 2, 0.5],
    [2, 1, 2],
  ])('.divide(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(calculator.divide(a, b)).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
      expect(calculator.divide(a, b)).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
      expect(calculator.divide(a, b)).not.toBeLessThan(expected);
    });
  });
});