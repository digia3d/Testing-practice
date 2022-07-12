import stringLength from './modules/stringLength.js';

test('counts letters in string', () => {
  expect(stringLength('hello')).toBe(5);
});

test('throws an error if string character count isnt between 0 and 10', () => {
  const string = 'helloworld';
  const result = () => {
    stringLength(string);
  };
  expect(result).toThrow(Error);
});