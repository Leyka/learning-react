const initialState = {
  result: 0,
  valueToHandle: 0,
  history: []
};

// Add the value from the Input to the current counter and store the action in history
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

// Substract the value from the Input to the current counter and store the action in history
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