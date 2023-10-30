import { useDispatch } from "react-redux";
import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
  token: string,
  commentText: string,
}

const initialState: RootState = {
  token: '',
  commentText: 'Hello React!',
}

const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const setToken: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_TOKEN,
  text,
})

const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.text,
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    default:
      return state;
  }
}
