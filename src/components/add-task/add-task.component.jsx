import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/tasks/tasks.actions";
import { v4 as uuidv4 } from "uuid";

import './add-task.styles.scss';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, settaskDesc] = useState("");

  const saveHandler = (e) => {
    if(taskName !== ''){
      // Dispatch adding new task with unique ID
      addTask({ id: uuidv4(), name: taskName, desc: taskDesc });
      //Clear Input After save
      setTaskName('');
      settaskDesc('');
    } else{
      // Make sur task name is set
      alert('Please Provide at least a task name')
    }
  };
  return (
    <>
      <h2>Add a new task</h2>
      <form onSubmit={(e) => e.preventDefault()} className="form-holder">
        <input
          type="text"
          className="form-control"
          value={taskName}
          placeholder="Name"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          value={taskDesc}
          placeholder="Description"
          onChange={(e) => {
            settaskDesc(e.target.value);
          }}
        />
        <button className="btn btn--rounded" onClick={saveHandler}>+</button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

export default connect(null, mapDispatchToProps)(AddTask);
