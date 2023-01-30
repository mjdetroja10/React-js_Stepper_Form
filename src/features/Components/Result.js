import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

export const Result = ({ data }) => {
  return (
    <div
      style={{
        width: "80vw",
        height: "100%",
        margin: "25px auto",
      }}
    >
      <Title level={2} type="success">
        Data added successfully
      </Title>
      <table>
        <tr style={{ borderBottom: "2px solid black" }}>
          <th style={{ padding: "0 45px" }}>Name</th>
          <th style={{ padding: "0 45px" }}>Value</th>
        </tr>
        {data &&
          Object.keys(data).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{data[key]}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
