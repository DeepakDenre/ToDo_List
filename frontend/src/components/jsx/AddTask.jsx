import "../css/AddTask.css"

function AddTask(){
    return (
        <>
            <div className="AddTask-wrapper">
                <div className="AddTask-content">
                    <div className="task-div">
                        <div className="task-label">Task</div>
                        <input type="text" name="task" id="task" className="task" />
                    </div>
                    <div className="status-div">
                        <div className="status-label">Status</div>
                        <select name="status" id="status" className="status">
                            <option value="complete">complete</option>
                            <option value="incomplete">incomplete</option>
                        </select>
                        
                    </div>
                    <div className="deadline-div">
                        <div className="deadline-label">Deadline</div>
                        <input type="date" name="deadline" id="deadline" className="deadline"/>
                    </div>
                    <div className="submit-div">
                        <input type="button" value="Add" className="button" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddTask;