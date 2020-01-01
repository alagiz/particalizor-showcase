import styled from "styled-components";

const DropdownWithLabelContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const DropdownLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  width: 200px;
`;

const DropdownContainer = styled.div`
  width: 100%;
  margin-right: 15px;
`;

export const Styled = {
  DropdownWithLabelContainer,
  DropdownLabel,
  DropdownContainer
};
