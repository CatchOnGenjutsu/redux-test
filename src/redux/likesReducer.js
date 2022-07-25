import { INCREMENT, DECREMENT } from "./types";

const initialState = {
  likes: 2,
}

export const likesReducer = (state = initialState, action) => { 
  switch (action.type){
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1
      };
    case DECREMENT:
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