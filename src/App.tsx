import { useState } from "react";
import "./App.css";
import ShapeChanger from "./components/shapechanger"; 
import ShapeButtons from "./components/shapebuttons"; 

function App() {
  const buttonText = {
    Button1: "Círculo",
    Button2: "Rectángulo",
    Button3: "Triángulo",
  };
  const [shape, setShape] = useState("");

  const handleClick = (elem: string) => {
    setShape(elem);
  };

  return (
    <div className="container">      
      <ShapeChanger shape={shape} /> 
      <ShapeButtons buttonText={buttonText} onClick={handleClick} />
    </div>
  );
}

export default App;

