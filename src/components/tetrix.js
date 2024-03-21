import { useEffect } from "react";
import { getTetrix } from "../constants/tetromatrix";

export default function Tetrix() {
  useEffect(() => {
    console.log(getTetrix(), "tetromatrix");
  }, []);
  return <div></div>;
}
