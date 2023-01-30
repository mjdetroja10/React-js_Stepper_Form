import React, { useState } from "react";
import { Steps } from "antd";
import { Info } from "./Components/Info";
import { Address } from "./Components/Address";
import { Result } from "./Components/Result";

export const MainForm = () => {
  const [current, setCurrent] = useState(0);
  const [Data, setData] = useState([]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "User Information",
      content: <Info data={Data} setData={setData} next={next} />,
    },
    {
      title: "Address",
      content: (
        <Address data={Data} setData={setData} prev={prev} next={next} />
      ),
    },
    {
      title: "Thank you",
      content: <Result data={Data} />,
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps
        current={current}
        items={items}
        style={{ width: "100%", height: "100%" }}
        status="process"
      />

      <div>{steps[current].content}</div>
    </>
  );
};
