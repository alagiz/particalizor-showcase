import React from "react";
import { Styled } from "../styled";
import { ISwitchWithLabelView } from "./ISwitchWithLabelView";
import { Switch } from "antd";

const SwitchWithLabelView: React.FC<ISwitchWithLabelView> = ({
  onChange,
  defaultValue,
  label
}) => {
  return (
    <Styled.SwitchWithLabelContainer>
      <Styled.SwitchLabel>{label}</Styled.SwitchLabel>
      <Styled.SwitchContainer>
        <Switch defaultChecked={defaultValue} onChange={onChange} />
      </Styled.SwitchContainer>
    </Styled.SwitchWithLabelContainer>
  );
};

export default SwitchWithLabelView;
