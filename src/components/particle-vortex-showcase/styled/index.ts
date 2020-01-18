import styled from "styled-components";

const ShowcaseComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
`;

const PropertiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PropertiesSet = styled.div`
  flex: 1;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex: 1;
`;

const ImageContainer = styled.div`
  margin: 10px;
`;

const ImageContainerImg = styled.img`
  max-width: 100%;
`;

export const Styled = {
  ImageContainer,
  ImageContainerImg,
  Images,
  PropertiesContainer,
  PropertiesSet,
  ShowcaseComponentContainer
};
