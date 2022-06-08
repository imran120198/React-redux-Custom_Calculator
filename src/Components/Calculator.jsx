import React from "react";
import { useState } from "react";
import style from "./Calculator.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  reduceCounter,
  addValue,
  subtractValue,
  multiplyValue,
  divideValue,
} from "../Redux/action";

export const Calculator = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  const handleAdd = () => {
    dispatch(addCounter(1));
  };

  const handleReduce = () => {
    dispatch(reduceCounter(1));
  };

  const handleAddValue = () => {
    dispatch(addValue(Number(value)));
  };
  const handleSubValue = () => {
    dispatch(subtractValue(value));
  };
  const handleMulValue = () => {
    dispatch(multiplyValue(value));
  };
  const handleDivideValue = () => {
    dispatch(divideValue(value));
  };
  return (
    <>
      <h1> REACT REDUX CUSTOM CALCULATOR</h1>
      <div className={style.box1}>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={handleAdd}>Increment</button>
      </div>
      <div>
        <button onClick={handleReduce}>Decrement</button>
      </div>
      <div className={style.box2}>
        <div>
          <input
            value={value}
            type="number"
            placeholder="X"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <div>
            <button onClick={handleAddValue}>Add</button>
            <button onClick={handleMulValue}>Multiply</button>
          </div>
          <div>
            <button onClick={handleSubValue}>Subtract</button>
            <button onClick={handleDivideValue}>Divide</button>
          </div>
        </div>
      </div>
    </>
  );
};
