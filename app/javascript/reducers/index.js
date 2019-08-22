import { ADD_STORE, ADD_STORE_SUCCESS, ADD_STORE_FAILURE } from "../constants/action_types";

const initialState = {
  stores: []
};

function rootReducer(state = initialState, action ) {
  if(action.type == ADD_STORE) {
    return Object.assign({}, state, {
      stores: state.stores.push(action.payload)
    })

  }
  return state;
}

export default rootReducer;