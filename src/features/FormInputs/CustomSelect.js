import { Form, Select } from "antd";
import React from "react";

export const CustomSelect = (props) => {
  const { rules, name, placeholder } = props;
  return (
    <Form.Item name={name} rules={rules} style={{ marginBottom: "20px" }}>
      <Select placeholder={placeholder}>
        <Select.Option value="test">Test</Select.Option>
      </Select>
    </Form.Item>
  );
};
