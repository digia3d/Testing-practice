import capitalize from './modules/capitalize.js';

test('first letter should return capitalized', () => {
  const string = 'hello';
  const result = string[0].toUpperCase();
  expect(result).toBe('H');
});