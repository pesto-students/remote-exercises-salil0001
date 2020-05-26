import { longestWordInString } from './longestWordInString';

describe('get the long word in a string', () => {
  test('should get the longest word', () => {
    expect(longestWordInString('qwerty uiop asdf ghjkl')).toBe(6);
    expect(longestWordInString('asd fgh jkl qwerf tyui op')).toBe(5);
    expect(longestWordInString('asy fghjkl qyer ftyuiop')).toBe(7);
    expect(longestWordInString('psy fpg hjklqerf tyupiop')).toBe(8);
  });
});
