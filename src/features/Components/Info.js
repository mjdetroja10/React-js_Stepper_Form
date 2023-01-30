import React, { useState } from "react";
import { Button, Col, Form, Row } from "antd";
import { CustomInput } from "../FormInputs/CustomInput";
import { CustomCheckbox } from "../FormInputs/CustomCheckbox";

export const Info = ({ data, setData, next }) => {
  const handelSubmit = (value) => {
    const updateData = [...data, value];
    setData(updateData);
    next();
  };
  return (
    <Form name="horizontal_login" layout="inline" onFinish={handelSubmit}>
      <div style={{ width: "80vw", height: "100%", margin: "25px auto" }}>
        <Row>
          <Col span={12}>
            <CustomInput
              name="firstName"
              rules={[
                { required: true, message: "firstName is required field" },
              ]}
              placeholder="First Name"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              name="middleName"
              rules={[
                { required: true, message: "middleName is required field" },
              ]}
              placeholder="Middle Name"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <CustomInput
              name="lastName"
              rules={[
                { required: true, message: "lastName is required field" },
              ]}
              placeholder="last name"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              name="mobile"
              rules={[
                { required: true, message: "mobile no is required field" },
              ]}
              placeholder="Mobile No"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <CustomInput
              name="email"
              rules={[{ required: true, message: "email is required field" }]}
              placeholder="Email"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              name="birthday"
              rules={[
                { required: true, message: "birthday is required field" },
              ]}
              placeholder="Birthday"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <CustomInput
              name="age"
              rules={[{ required: true, message: "age is required field" }]}
              placeholder="Age"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              name="bloodGroup"
              rules={[
                { required: true, message: "bloodGroup is required field" },
              ]}
              placeholder="BloodGroup"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <CustomInput
              name="height"
              rules={[{ required: true, message: "height is required field" }]}
              placeholder="Height"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              name="weight"
              rules={[{ required: true, message: "weight is required field" }]}
              placeholder="Weight"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <CustomCheckbox
              name="gender"
              label="gender"
              rules={[{ required: true, message: "gender is required field" }]}
              options={[
                {
                  lable: "Male",
                  value: "male",
                },
                {
                  lable: "Female",
                  value: "female",
                },
              ]}
            />
          </Col>
          <Col span={12}>
            <CustomCheckbox
              name="martialStatus"
              label="Martial Status"
              rules={[
                { required: true, message: "Martial Status is required field" },
              ]}
              options={[
                {
                  lable: "Single",
                  value: "single",
                },
                {
                  lable: "Married",
                  value: "married",
                },
                {
                  lable: "Divorced",
                  value: "divorced",
                },
                {
                  lable: "Widowed",
                  value: "widowed",
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};
