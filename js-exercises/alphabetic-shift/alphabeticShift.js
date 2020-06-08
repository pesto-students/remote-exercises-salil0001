function alphabeticShift(inputString) {
  let shiftedString = "";
  for (let i = 0; i < inputString.length; i++) {
    shiftedString = alphabeticShiftSmallCharacters(
      inputString.charAt(i),
      shiftedString
    );
    shiftedString = alphabeticShiftLargeCharacters(
      inputString.charAt(i),
      shiftedString
    );
    shiftedString = alphabeticShiftNumbers(
      inputString.charAt(i),
      shiftedString
    );
  }
  return shiftedString;
}

function alphabeticShiftSmallCharacters(singleCharacter, shiftedString) {
  singleCharacter.codePointAt() >= 97 && singleCharacter.codePointAt() <= 122
    ? singleCharacter.codePointAt() !== 122
      ? (shiftedString =
          shiftedString + String.fromCharCode(singleCharacter.codePointAt() + 1))
      : (shiftedString = shiftedString + String.fromCharCode(97))
    : "";

  return shiftedString;
}

function alphabeticShiftLargeCharacters(singleCharacter, shiftedString) {
  singleCharacter.codePointAt() >= 65 && singleCharacter.codePointAt() <= 90
    ? singleCharacter.codePointAt() !== 90
      ? (shiftedString =
          shiftedString + String.fromCharCode(singleCharacter.codePointAt() + 1))
      : (shiftedString = shiftedString + String.fromCharCode(65))
    : "";

  return shiftedString;
}
function alphabeticShiftNumbers(singleCharacter, shiftedString) {
  singleCharacter.codePointAt() >= 48 && singleCharacter.codePointAt() <= 57
    ? singleCharacter.codePointAt() !== 57
      ? (shiftedString =
          shiftedString + String.fromCharCode(singleCharacter.codePointAt() + 1))
      : (shiftedString = shiftedString + String.fromCharCode(48))
    : "";

  return shiftedString;
}

export { alphabeticShift };
