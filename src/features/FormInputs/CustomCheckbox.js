import { Form, Radio } from "antd";
import React from "react";

export const CustomCheckbox = (props) => {
  const { rules, name, label, options } = props;

  return (
    <Form.Item
      name={name}
      rules={rules}
      label={label}
      style={{ marginBottom: "20px" }}
    >
      <Radio.Group name={name}>
        {options.map(({ lable, value }) => (
          <Radio value={value}>{lable}</Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};
