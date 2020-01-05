import styled from "styled-components";

const InputWithLabelContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`;

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  width: 200px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-right: 15px;
`;

export const Styled = {
  InputWithLabelContainer,
  InputLabel,
  InputContainer
};
