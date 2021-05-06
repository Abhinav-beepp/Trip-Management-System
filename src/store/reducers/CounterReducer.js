const initialState = {
    value : 0
    }
     
    export default function CounterReducer(state = initialState, action) {
     
      switch (action.type) {
     
        case 'INCREMENT':
          console.log("inside reducer: "+state.value);
          return {
            ...state,
            value: state.value+1
          };
     
        case 'DECREMENT':
          return {
            ...state,
            value: state.value-1
          };
       
        default:
          return state;
     
      }
    }