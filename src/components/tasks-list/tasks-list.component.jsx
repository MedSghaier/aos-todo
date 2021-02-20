import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { deleteTask } from '../../redux/tasks/tasks.actions';
import "./tasks-list.styles.scss";

const TaksList = ({ tasks, deleteTask }) => {
  let history = useHistory();

  const deleteHandler = (id) => {
    // Confirm deletion
    if(window.confirm('Do you really want to delete this item')){
      deleteTask(id);
    }
  }
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
            <td><button onClick={()=>deleteHandler(task.id)} style={{color: '#ff0f0f'}}>Detale</button></td>
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

const mapDispatchToProps = dispatch => ({
  deleteTask : id => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaksList);
