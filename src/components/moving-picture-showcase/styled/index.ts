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
  flex: 1 1 300px;
`;

const ImageModeSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 50%;
  padding: 5px 10px 5px 11px;
  background: #a8a8b2;
  color: black;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    background: #83838a;
  }
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

const Dashed = styled.div`
  border: 2px dashed #999;
`;

const DropZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 300px;
  background: #a8a8b2;
`;

const DropImageText = styled.div`
  padding: 10px;
`;

const UploadedPicture = styled.div`
  width: 100%;
  margin-right: 15px;
`;

export const Styled = {
  Dashed,
  DropImageText,
  DropZone,
  ImageContainer,
  ImageModeSwitch,
  ImageContainerImg,
  Images,
  PropertiesContainer,
  PropertiesSet,
  ShowcaseComponentContainer,
  UploadedPicture
};
