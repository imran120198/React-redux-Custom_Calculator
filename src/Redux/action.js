
const addCounter = (payload) => {
    return {
      type: "ADD_COUNT",
      payload
    };
  };
  
  const reduceCounter = (payload) => {
    return {
      type: "REDUCE_COUNT",
      payload
    };
  };
  const addValue = (payload) => {
    return {
      type: "ADD_VALUE",
      payload
    };
  };
  const subtractValue = (payload) => {
    return {
      type: "SUBTRACT_VALUE",
      payload
    };
  };
  const multiplyValue = (payload) => {
    return {
      type: "MULTIPLY_VALUE",
      payload
    };
  };
  const divideValue = (payload) => {
    return {
      type: "DIVIDE_VALUE",
      payload
    };
  };
  
  export { addCounter, reduceCounter, addValue,subtractValue,multiplyValue,divideValue};