/* eslint-disable array-callback-return */
import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import EditTask from "./EditTask";
import { ITask } from "shared/ITask";

function Layout() {
    const initialSingleTask : ITask = {id: '', taskName: ''};
    const initialTask : ITask [] = [];

    const [task, setTask] = useState(initialTask);
    const [enabledEdit, setEnabledEdit] = useState(false);
    const [singleTask, setSingleTask] = useState(initialSingleTask);
    const [error, setError] = useState(null);
   
    function DeleteTask(id : string) {
        const items = task.filter(item => item.id !== id);
        setTask(items);
    };

    function Edit(id: string) {
        setEnabledEdit(true);  
        task.map(item => {
            if (item.id === id){
                setSingleTask({id: item.id, taskName: item.taskName});
                return;
            }                
        });              
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <TaskList task={task} deleteTask={DeleteTask} editTask={Edit}/>
                </div>
                <div className="col-3">
                    {enabledEdit ? <EditTask task={singleTask} allTask={task} setTask={setTask} setEnabledEdit={setEnabledEdit} 
                    setError={setError} error={error}/> 
                    : <AddTask setTask={setTask} task={task} setError={setError} error={error}/>}
                </div>
            </div>
        </div>
    )
}

export default Layout;
