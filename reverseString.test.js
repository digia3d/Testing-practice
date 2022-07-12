import reverseString from './reverse-string';

const testingValue = 'hello'

test(`Should be true when you pass ${testingValue}`, () => {
  expect(reverseString(testingValue)).toMatch(/olleh/);
});