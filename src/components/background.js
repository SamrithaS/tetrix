import { useEffect, useState } from "react";
import { getTetrix } from "../constants/tetromatrix";
import { fallingMotion } from "../helpers/tetrixhelpers";
export default function Background() {
  var defaultBgArray = new Array(15);
  for (var i = 0; i < defaultBgArray.length; i++) {
    defaultBgArray[i] = [
      { value: 0, colour: "" },
      { value: 0, colour: "" },
      { value: 0, colour: "" },
      { value: 0, colour: "" },
      { value: 0, colour: "" },
      { value: 0, colour: "" },
      { value: 0, colour: "" },
      { value: 0, colour: "" },
    ];
  }
  let [currentTetrix, setCurrentTetrix] = useState();

  let [bgArray, setBgArray] = useState(defaultBgArray);
  let positionArray = [];

  let [currentPosition, setCurrentPosition] = useState([]);
  let [flag, setFlag] = useState(0);
  let newBgArray = [...bgArray];
  let timeout;

  useEffect(() => {
    console.log("in here again");
    setCurrentTetrix(getTetrix());
  }, [flag]);

  useEffect(() => {
    for (let i = 0; i < currentTetrix?.array?.length; i++) {
      for (let j = 0; j < currentTetrix?.array?.length; j++) {
        newBgArray[i][j].value = currentTetrix.array[i][j];

        if (currentTetrix.array[i][j]) {
          newBgArray[i][j].colour = currentTetrix.colour;
          positionArray.push([i, j]);
        }
      }
    }
    setBgArray(newBgArray);
    setCurrentPosition(positionArray);
  }, [currentTetrix]);

  const timeOutHandler = () => {
    setBgArray(fallingMotion(currentPosition, bgArray, defaultBgArray)[0]);
    setCurrentPosition(
      fallingMotion(currentPosition, bgArray, defaultBgArray)[1]
    );
  };
  useEffect(() => {}, []);
  currentPosition.forEach((indexes) => {
    if (indexes[0] >= newBgArray.length - 2) {
      flag = 1;
      clearTimeout(timeout);

      if (indexes[0] === newBgArray.length - 1 && flag === 1) {
        defaultBgArray = [...newBgArray];
      }
    } else {
      if (flag === 0 && indexes[0] !== newBgArray.length - 1) {
        timeout = setTimeout(timeOutHandler, 1000);
      }
    }
  });

  return (
    <div>
      {bgArray.map((x, ind) => {
        return (
          <div key={ind} className="flex">
            {x.map((y, index) => (
              <div
                key={index}
                className={`w-10 h-10 ${
                  y.colour && y.value ? `${y.colour}` : "bg-[#3F3F3F]"
                } border border-[#1E1E1E]`}
              ></div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
