export const getTetrix = () => {
  let T = {
    array: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    colour: "bg-[#1EE682]",
  };

  let O = {
    array: [
      ["O", "O"],
      ["O", "O"],
    ],
    colour: "bg-[#1DB4F3]",
  };

  let L = {
    array: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    colour: "bg-[#E7C61D]",
  };

  let J = {
    array: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    colour: "bg-[#881DF3]",
  };

  let I = {
    array: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    colour: "bg-[#E71DA4]",
  };

  let S = {
    array: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    colour: "bg-[#FF0550]",
  };

  let Z = {
    array: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    colour: "bg-[#FB8708]",
  };

  return [T, O, L, S, I, J, Z][
    Math.floor(Math.random() * [T, O, L, S, I, J, Z].length)
  ];
};
