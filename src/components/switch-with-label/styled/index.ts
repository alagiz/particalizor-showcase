import styled from "styled-components";

const SwitchWithLabelContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`;

const SwitchLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  width: 200px;
`;

const SwitchContainer = styled.div`
  width: 100%;
  margin-right: 15px;
`;

export const Styled = {
  SwitchWithLabelContainer,
  SwitchLabel,
  SwitchContainer
};
