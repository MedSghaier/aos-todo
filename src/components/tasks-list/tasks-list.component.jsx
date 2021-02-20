import "./tasks-list.styles.scss";
// only import react to solve react-router bug
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


const TaksList = ({ tasks }) => {
  let history = useHistory();

  return (
    <>
      {/* Only renders Table if there is more than one Task */}
      {tasks.length > 0 ? ((<div className="card">
      <table cellSpacing="0">
       <thead>
       <tr id="header">
          <th>Quote Date</th>
          <th>Insured</th>
          <th>Status</th>
          <th></th>
        </tr>
       </thead>
        <tbody>
        {tasks.map((task) => (
          <tr className="dr" key={task.id}>
            <td>{ task.name }</td>
            <td>{ task.desc }</td>
            <td>{ task.status }</td>
            <td><button onClick={()=> history.push(`/app/tasks/${task.id}`)}>Edit</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>)) : (<h2>No tasks yet !</h2>)}
    </>
  );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps)(TaksList);
