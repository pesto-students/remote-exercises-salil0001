const animalSort = (animals) =>
  animals
    .sort((animalName1, animalName2) => {
      if (animalName1.name < animalName2.name) {
        return -1;
      }
      if (animalName1.name > animalName2.name) {
        return 1;
      }
      return 0;
    })
    .sort(
      (LegsCompare1, LegsCompare2) =>
        LegsCompare1.numberOfLegs - LegsCompare2.numberOfLegs
    );

export { animalSort };
