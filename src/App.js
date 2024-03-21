import Background from "./components/background";
import Tetrix from "./components/tetrix";

export default function App() {
  return (
    <div className="bg-black h-full flex justify-center items-center">
      <Background />
      <Tetrix />
    </div>
  );
}
