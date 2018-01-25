const initialState = {
  result: 0,
  valueToHandle: 0,
  history: []
};

// Helper function that returns a new history object
const newHistoryElement = (state, action, newResult) => ({
  type: action.type,
  initial: state.result,
  value: state.valueToHandle,
  newResult: newResult
});

// Add the given value to the current counter, and store the result in history
const addToCounter = (state, action) => {
  const newResult = state.result + state.valueToHandle;
  return {
    ...state,
    result: newResult,
    history: [
      ...state.history,
      newHistoryElement(state, action, newResult)
    ]
  }
};

// Subtract the given value to the current counter, and store the result in history
const subtractToCounter = (state, action) => {
  const newResult = state.result - state.valueToHandle;
  return {
    ...state,
    result: newResult,
    history: [
      ...state.history,
      newHistoryElement(state, action, newResult)
    ]
  }
};

// Store the inputted value to the global state (Controlled input)
// So that actions like addToCounter and substractToCounter can access to this value
const storeValue = (state, action) => {
  return {
    ...state,
    valueToHandle: parseInt(action.payload)
  }
};

// Map the functions according the type of action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD' : return addToCounter(state, action);
    case 'SUBTRACT': return subtractToCounter(state, action);
    case 'INPUT_CHANGE' : return storeValue(state, action);
    default : return state;
  }
};

export default reducer;