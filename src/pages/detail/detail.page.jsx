import { useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateTask } from "../../redux/tasks/tasks.actions";

import "./detail.styles.scss";

const DetailPage = ({ tasks, updateTask }) => {
  let { id } = useParams();
  let history = useHistory();
  let selectedTask = tasks.filter((task) => task.id === id)[0];
  const [taskName, setTaskName] = useState(selectedTask.name);
  const [taskDesc, setTaskDesc] = useState(selectedTask.desc);
  const [isComplete, setIsComplete] = useState(selectedTask.isComplete);

  const updateHandler = () => {
    // Confirm Update
    if (window.confirm("Do you really wwant to update this task ?")) {
        // Dispatch UPDATE action
        updateTask({ id, name: taskName, desc: taskDesc, isComplete });
        
        // Navigate user to TASKS page
        history.push("/app/tasks");
    }
  };
  return (
    <>
      <h1 style={{ marginBottom: 15 }}>Updating: {selectedTask.name}...</h1>
      <form onSubmit={(e) => e.preventDefault()} className="update-form">
        <input
          type="text"
          className="form-control"
          value={taskName}
          placeholder="Name"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <textarea
          type="text"
          rows="10"
          className="form-control"
          value={taskDesc}
          placeholder="Description"
          onChange={(e) => {
            setTaskDesc(e.target.value);
          }}
        ></textarea>

        <div className="form-group">
          <input
            type="checkbox"
            id="status-checkbox"
            checked={isComplete}
            onChange={(e) => setIsComplete(!isComplete)}
          />
          <label htmlFor="status-checkbox">Complete</label>
        </div>
        <button className="btn" onClick={updateHandler}>
          Update
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = (dispatch) => ({
  updateTask: (data) => dispatch(updateTask(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
