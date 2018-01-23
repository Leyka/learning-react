const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD' : {
      return {...state, counter: state.counter + action.payload}
    }
    case 'SUBSTRACT' : {
      return {...state, counter: state.counter - action.payload}
    }
    default : {
      return state;
    }
  }
}

export default reducer;