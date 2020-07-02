import React from "react";
import TodoItem from "./todoItem";
import store from "./redux/store";
import { connect } from 'react-redux'
import {ADD_RECORD} from "./redux/actionTypes";
import { addRecord } from "./redux/actions";

let state = store.getState();

const mapStateToProps = (state, ownProps) => {
  const record = state.records[ownProps.index]
  return {record};
}

const mapDispatchToProps = dispatch => {
  return {
    addRecord: () => dispatch(addRecord())
  }
}


function TodoList(props) {
  console.log(state);
  return(
    <ul id = 'todoUl'>
      {state.records.map((record) => { return <TodoItem record = {record} key = {record.id}/>})}
    </ul>
  )
}
connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoList;