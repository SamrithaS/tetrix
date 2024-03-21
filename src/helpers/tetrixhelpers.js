export const fallingMotion = (currentPosition, bgArray, defaultBgArray) => {
  let newBgArray = [...defaultBgArray];
  let newPos = [];
  currentPosition.forEach((element) => {
    newBgArray[element[0] + 1][element?.[1]].value =
      bgArray?.[element[0]][element?.[1]].value;
    newPos.push([element[0] + 1, element?.[1]]);
    newBgArray[element[0] + 1][element?.[1]].colour =
      bgArray?.[element[0]][element?.[1]].colour;
  });
  return [newBgArray, newPos];
};
