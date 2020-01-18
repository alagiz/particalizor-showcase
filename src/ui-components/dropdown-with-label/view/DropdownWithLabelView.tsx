import React from "react";
import { Styled } from "../styled";
import { IDropdownWithLabelView } from "./IDropdownWithLabelView";
import { Select } from "antd";

const { Option } = Select;

const DropdownWithLabelView: React.FC<IDropdownWithLabelView> = ({
  onChange,
  options,
  defaultValue,
  label
}) => {
  const dropdownOptions = options.map((option, index) => (
    <Option value={option.value} key={index}>
      {option.title}
    </Option>
  ));

  return (
    <Styled.DropdownWithLabelContainer>
      <Styled.DropdownLabel>{label}</Styled.DropdownLabel>
      <Styled.DropdownContainer>
        <Select
          defaultValue={defaultValue}
          style={{ width: "100%" }}
          onChange={onChange}
        >
          {dropdownOptions}
        </Select>
      </Styled.DropdownContainer>
    </Styled.DropdownWithLabelContainer>
  );
};

export default DropdownWithLabelView;
