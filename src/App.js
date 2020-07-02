import React from 'react';
import './styles.css'
// import TodoItem from "./todoItem";
import TodoList from "./todoList";
import { Provider } from 'react-redux'
// import {createStore} from "redux";
// import {rootReducer} from "./redux/rootReducer";
import store from "./redux/store"
import {ADD_RECORD} from "./redux/actionTypes";

window.store = store;


function App() {

  function addingAction() {
    let value = document.getElementById('textareaId').value;
    if(!value) return
    document.getElementById('textareaId').value = '';

    return {
      type: ADD_RECORD,
      id: Date.now(),
      text: value,
      completed: false
    }
  }

  function addingRecord() {
    let objRecord = addingAction()
    if(!objRecord) return;
    store.dispatch(objRecord)

  }

    return (
      <div className="App">
        <div id='todoList'>
          <div className='header'>
            <h1>Задачи</h1>
            <button className='sortingButton'/>
          </div>
          <textarea id="textareaId" placeholder="Enter a title for this card..."/>
          <button id="AddCard" onClick = {() => {addingRecord()}}>Add Card</button>
          <TodoList/>
          <div className="buttonsDiv">
            <button id="nextPage"/>
            <button id="prevPage"/>
          </div>
        </div>
      </div>
    );
}

export default App;