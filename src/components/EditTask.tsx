import { useState } from "react";
import { ITask } from "shared/ITask";

function EditTask(props: {task: ITask, allTask: ITask[], setTask: any, setEnabledEdit: any, setError: any, error: any}) {
    const initialTask : ITask = {id: '', taskName: ''};
    const [editTask, setEditTask] = useState(props.task ?? initialTask);        

    function EditTask(event: any) {
        if (editTask.taskName.trim() !== ''){
           const taskNoEditable = props.allTask.filter(items => items.id !== props.task.id);
           const newTaskEdit = {id: props.task.id, taskName: editTask.taskName};
           props.setTask([...taskNoEditable, newTaskEdit]);
           setEditTask({id: '', taskName: ''});
           props.setEnabledEdit(false);
           props.setError(null);
        } else props.setError('Introduzca una tarea por favor');             
        event.preventDefault();
    }
    function Cancel(event: any) {
        setEditTask({id: '', taskName: ''});
        props.setEnabledEdit(false);
        event.preventDefault();
    }
    return (
        <>
             <h4 className="text-center">Editar Tarea</h4>
            <form>
                {props.error && <span className="text-danger">{props.error}</span>}
                <input type="text" placeholder="Nombre de la tarea" className="form-control mb-2" 
                onChange={e => setEditTask({id: editTask.id, taskName: e.target.value})} value={editTask.taskName}/>
                <button className="form-control btn btn-warning mb-2" type="submit" onClick={EditTask}>Editar</button>
                <button className="form-control btn btn-secondary" onClick={Cancel}>Cancelar</button>
            </form>
        </>
    )
}

export default EditTask;
