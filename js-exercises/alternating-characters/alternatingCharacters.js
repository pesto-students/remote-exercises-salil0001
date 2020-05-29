const alternatingCharacters = (arrayOfStrings) =>
  arrayOfStrings.map((string) => {
    let deletedCharsCount = 0;
    for (let i = 0; i < string.length; i++)
      if (string.charAt(i) === string.charAt(i + 1)) deletedCharsCount++;

    return deletedCharsCount;
  });

export { alternatingCharacters };
