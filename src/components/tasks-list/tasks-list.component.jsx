import "./tasks-list.styles.scss";
// only import react to solve react-router bug
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const TaksList = ({ tasks }) => {
  return (
    <div className="card">
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
            <td><Link to={`/tasks/${task.id}`}>Edit</Link></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps)(TaksList);
