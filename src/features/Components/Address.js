import { Button, Col, Form, Row } from "antd";
import React from "react";
import { CustomInput } from "../FormInputs/CustomInput";
import { CustomSelect } from "../FormInputs/CustomSelect";

export const Address = ({ data, setData, prev, next }) => {
  const handelSubmit = (value) => {
    const updateData = data[0];

    setData({ ...updateData, ...value });
    next();
  };
  return (
    <>
      <Form name="horizontal_login" layout="inline" onFinish={handelSubmit}>
        <div style={{ width: "80vw", height: "100%", margin: "25px auto" }}>
          <Row>
            <Col span={12}>
              <CustomInput
                name="address1"
                rules={[
                  {
                    required: true,
                    message: "AddressLine1 is a required field",
                  },
                ]}
                placeholder="AddressLine1"
              />
            </Col>
            <Col span={12}>
              <CustomInput
                name="address2"
                rules={[
                  {
                    required: true,
                    message: "AddressLine2 is a required field",
                  },
                ]}
                placeholder="AddressLine1"
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <CustomSelect
                name="city"
                rules={[
                  { required: true, message: "City is a required field" },
                ]}
                placeholder="City"
              />
            </Col>
            <Col span={12}>
              <CustomSelect
                name="state"
                rules={[
                  { required: true, message: "State is a required field" },
                ]}
                placeholder="State"
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <CustomSelect
                name="country"
                rules={[
                  { required: true, message: "Country is a required field" },
                ]}
                placeholder="Country"
              />
            </Col>
            <Col span={12}>
              <CustomInput
                name="pinCode"
                rules={[
                  { required: true, message: "PinCode is a required field" },
                ]}
                placeholder="PinCode"
              />
            </Col>
          </Row>
          <Button
            type="primary"
            style={{ margin: "0 8px" }}
            onClick={() => prev()}
          >
            Back
          </Button>

          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </>
  );
};
