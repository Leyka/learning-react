const initialState = {
  result: 0,
  valueToHandle: 0,
  history: []
};

// Add the given value to the current counter, and store the result in history
const addToCounter = (state, action) => {
  const newResult = state.result + state.valueToHandle;
  return {
    ...state,
    result: newResult,
    history: [
      ...state.history,
      {
        type: action.type,
        initial: state.result,
        value: state.valueToHandle,
        newResult: newResult
      }
    ]
  }
};

// Substract the given value to the current counter, and store the result in history
const substractToCounter = (state, action) => {
  const newResult = state.result - state.valueToHandle;
  return {
    ...state,
    result: newResult,
    history: [
      ...state.history,
      {
        type: action.type,
        initial: state.result,
        value: state.valueToHandle,
        newResult: newResult
      }
    ]
  }
};

// Store the inputted value to the global state (Controlled input)
// So that actions like addToCounter and substractToCounter can access to this value
const storeValue = (state, action) => {
  return {
    ...state,
    valueToHandle: parseInt(action.payload, 10)
  }
};

// Map the functions according the type of action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD' : return addToCounter(state, action);
    case 'SUBSTRACT': return substractToCounter(state, action);
    case 'INPUT_CHANGE' : return storeValue(state, action);
    default : return state;
  }
};

export default reducer;