
const initState = {
    count: 0
  };
  
  const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case "ADD_COUNT":
        return {
          ...state,
          count: state.count + payload
        };
      case "REDUCE_COUNT":
        return {
          ...state,
          count: state.count - payload
        };
      case "ADD_VALUE":
        return {
          ...state,
          count: state.count + payload
        };
      case "SUBTRACT_VALUE":
        return {
          ...state,
          count: state.count - payload
        };
      case "MULTIPLY_VALUE":
        return {
          ...state,
          count: state.count * payload
        };
      case "DIVIDE_VALUE":
        return {
          ...state,
          count: state.count / payload
        };
      default:
        return state;
    }
  };
  
  export { reducer };