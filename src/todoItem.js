import React from 'react';
import store from "./redux/store";


const mapStateToProps = state => {
  return {

  }
}

function TodoItem(props) {
  return(
    <li className='taskList'><div className="firstColumn"><input type='checkbox'/></div><div className="tasksButtonsDiv"><button className={'deleteButton'}/><button className={'editButton'}/></div>  </li>

  )
}

// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <li className='taskList'><div className="firstColumn"><input type='checkbox'/>{this.props.record.text}</div> <div className="tasksButtonsDiv"><button className={'deleteButton'}/><button className={'editButton'}/></div>  </li>
//   }
//
// }

export default TodoItem;