const initialState = {
  counter: 0,
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD' : {
      const result = state.counter + action.payload;
      return {
        ...state,
        counter: result,
        history: [...state.history, {type: action.type, initial: state.counter, value: action.payload, result: result}]
      }
    }
    case 'SUBSTRACT' : {
      const result = state.counter - action.payload;
      return {
        ...state,
        counter: result,
        history: [...state.history, {type: action.type, initial: state.counter, value: action.payload, result: result}]
      }
    }
    default : {
      return state;
    }
  }

};

export default reducer;