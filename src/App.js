import React, { useState } from "react";

import "./App.css";
import DemoList from "./components/DemoList";
import Demo from "./components/Demo";
import Button from "./components/UI/Button/Button";
import { useCallback } from "react";
import { useMemo } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [letShow, setLetShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev); //если false => true либо наоборот
  };

  // const demoHandler = () => {
  // setLetShow(true);//false изменится на тру
  // };

  const demoHandler = useCallback(() => {
    setLetShow(true); //ne budet lishnei renderinga
  }, []);

  // const user = {
  //   name: "Alina",
  //   age: 30,
  // };

  const user = useMemo(() => {
    //memo используем для запоминания в памяти и чтобы не перерендеровался каждый раз
    return {
      name: "LINA",
      age: 25,
    };
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {show && <p>this new open</p>}{" "}
      {/*uslovnyi rendering true bolso text chygat */}
      <Button onClick={showHandler}>Click me</Button>
      <DemoList />
      <Demo onClick={demoHandler} user={user} />
    </div>
  );
}

export default App;
