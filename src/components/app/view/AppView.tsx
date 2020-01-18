import React from "react";
import { IAppView } from "./IAppView";
import { Styled } from "../styled";
import "antd/dist/antd.css";
import MovingPictureShowcase from "../../moving-picture-showcase/container/MovingPictureShowcase";
import ParticleVortexShowcase from "../../particle-vortex-showcase/container/ParticleVortexShowcase";

const AppView: React.FC<IAppView> = ({
  switchShowcase,
  showcase,
  switchButtonTitle
}) => {
  const componentToDisplay =
    showcase === "moving-picture" ? (
      <MovingPictureShowcase />
    ) : (
      <ParticleVortexShowcase />
    );

  return (
    <Styled.TopContainerContainer>
      <Styled.ShowcaseSwitch onClick={switchShowcase}>
        {switchButtonTitle}
      </Styled.ShowcaseSwitch>
      {componentToDisplay}
    </Styled.TopContainerContainer>
  );
};

export default AppView;
