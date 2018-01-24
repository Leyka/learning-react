const initialState = {
  result: 0,
  currentValue: 0,
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD' : {
      const newResult = state.result + parseInt(state.currentValue, 10);
      return {
        ...state,
        result: newResult,
        history: [...state.history, {type: action.type, initial: state.result, value: state.currentValue, newResult: newResult}]
      }
    }
    case 'SUBSTRACT' : {
      const newResult = state.result - state.currentValue;
      return {
        ...state,
        result: newResult,
        history: [...state.history, {type: action.type, initial: state.result, value: state.currentValue, newResult: newResult}]
      }
    }
    case 'INPUT_CHANGE' : {
      return {
        ...state,
        currentValue: action.payload
      }
    }
    default : {
      return state;
    }
  }
};

export default reducer;