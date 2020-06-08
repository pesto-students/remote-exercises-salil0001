import { alphabeticShift } from './alphabeticShift';

describe('Alphabetic Shift Test Cases', () => {
  it('returns a shifted alphabets', () => {
    expect(alphabeticShift('Pseudopseudohypoparathyroidism'))
      .toEqual('Qtfvepqtfvepizqpqbsbuizspjejtn');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Floccinaucinihilipilification'))
      .toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Antidisestablishmentarianism'))
      .toEqual('Boujejtftubcmjtinfoubsjbojtn');

    expect(alphabeticShift('supercalifragilisticexpialidocious'))
      .toEqual('tvqfsdbmjgsbhjmjtujdfyqjbmjepdjpvt');
  });
  it('returns a shifted alphabets with numbers', () => {
    expect(alphabeticShift('12345abcz'))
      .toEqual('23456bcda');

    expect(alphabeticShift('1Z0z9'))
      .toEqual('2A1a0');

  });
});
