import {
  FETCH_LIST_STADIUM_BEGIN,
  FETCH_LIST_STADIUM_SUCCESS,
  FETCH_LIST_STADIUM_FAILURE
} from "./Constant";
import { createStore } from "redux";

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_STADIUM_BEGIN:
      return Object.assign({}, state, {
        data: [],
        isFetching: true
      });
    case FETCH_LIST_STADIUM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.stadiumList
      });
    case FETCH_LIST_STADIUM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      });
    default:
      return state;
  }
}
