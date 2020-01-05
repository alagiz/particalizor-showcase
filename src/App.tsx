import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import MovingPictureShowcase from "./moving-picture-showcase";
import ParticleVortexShowcase from "./particle-vortex-showcase";

const App: React.FC = () => {
  const [selectedShowcase, setSelectedShowcase] = useState<string>(
    "moving-picture"
  );

  const switchShowcase = () => {
    setSelectedShowcase(
      selectedShowcase === "moving-picture"
        ? "particle-vortex"
        : "moving-picture"
    );
  };

  const switchButtonTitle =
    selectedShowcase === "moving-picture"
      ? "THIS IS MOVING PICTURE, CLICK TO SEE PARTICLE VORTEX"
      : "THIS IS PARTICLE VORTEX, CLICK TO SEE MOVING PICTURE";

  const componentToDisplay =
    selectedShowcase === "moving-picture" ? (
      <MovingPictureShowcase />
    ) : (
      <ParticleVortexShowcase />
    );

  return (
    <div className={"top-container"}>
      <div className={"showcase-switch"} onClick={switchShowcase}>
        {switchButtonTitle}
      </div>
      {componentToDisplay}
    </div>
  );
};

export default App;
