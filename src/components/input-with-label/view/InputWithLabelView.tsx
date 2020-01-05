import React from "react";
import { Styled } from "../styled";
import { IInputWithLabelView } from "./IInputWithLabelView";
import Input from "antd/es/input";

const InputWithLabelView: React.FC<IInputWithLabelView> = ({
  onChange,
  defaultValue,
  label
}) => {
  return (
    <Styled.InputWithLabelContainer>
      <Styled.InputLabel>{label}</Styled.InputLabel>
      <Styled.InputContainer>
        <Input
          placeholder={"set background color"}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </Styled.InputContainer>
    </Styled.InputWithLabelContainer>
  );
};

export default InputWithLabelView;
