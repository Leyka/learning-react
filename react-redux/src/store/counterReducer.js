const initialState = {
  result: 0,
  valueToHandle: 0,
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD' : {
      const newResult = state.result + state.valueToHandle;
      return {
        ...state,
        result: newResult,
        history: [...state.history, {type: action.type, initial: state.result, value: state.valueToHandle, newResult: newResult}]
      }
    }
    case 'SUBSTRACT' : {
      const newResult = state.result - state.valueToHandle;
      return {
        ...state,
        result: newResult,
        history: [...state.history, {type: action.type, initial: state.result, value: state.valueToHandle, newResult: newResult}]
      }
    }
    case 'INPUT_CHANGE' : {
      return {
        ...state,
        valueToHandle: parseInt(action.payload, 10)
      }
    }
    default : {
      return state;
    }
  }

};

export default reducer;