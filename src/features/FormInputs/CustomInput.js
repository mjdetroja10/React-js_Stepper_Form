import React from "react";
import { Form, Input } from "antd";

export const CustomInput = (props) => {
  const {
    // control,
    rules,
    name,
    inputType = "text",
    placeholder,
    // label,
    // error,
    // variant = "standard",
  } = props;

  return (
    <>
      <Form.Item name={name} rules={rules} style={{ marginBottom: "20px" }}>
        <Input type={inputType} placeholder={placeholder} />
      </Form.Item>
    </>
  );
};
