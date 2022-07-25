import {createStore} from "redux";

const initialState = {
  likes: 10,
}

const reducer = (state = initialState, action) => {
  console.log("reducer >", action);
  switch (action.type){
    case "INCREMENT":
      return {
        ...state,
        likes: state.likes + 1
      };
    case "DECREMENT":
      if (state.likes > 0){
        return {
          ...state,
          likes: state.likes - 1
        }
      } else {
        return state;
      }
      
    default: return state;
  }
}

const store = createStore(reducer);

export default store;