import React, { useState } from "react";
import AppView from "../view/AppView";

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

  return (
    <AppView
      switchShowcase={switchShowcase}
      showcase={selectedShowcase}
      switchButtonTitle={switchButtonTitle}
    />
  );
};

export default App;
