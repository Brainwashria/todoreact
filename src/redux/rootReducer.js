import {ADD_RECORD} from "./actionTypes";

export function rootReducer(state, action) {
switch(action.type) {
  case ADD_RECORD:
    return Object.assign(state, {records: [...state.records, {
        id: Date.now(),
        text: action.text,
        completed: false
      }]})
  default:
    return state;
}
}