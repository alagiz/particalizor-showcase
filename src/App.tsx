import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MovingPicture from "particalizor-3000";
import "antd/dist/antd.css";
import SliderWithLabel from "./components/slider-with-label/container/SliderWithLabel";

const App: React.FC = () => {
  const onChange = () => {};
  let inputValue = 50;

  return (
    <div className="App">
      <SliderWithLabel label={"asd"} range={{ min: 0, max: 22 }} />
      <MovingPicture imageSource={logo} />
    </div>
  );
};

export default App;
