import { useState } from "react";
import { ITask } from "shared/ITask";
import { GenerateId } from "shared/GenerateId";

function AddTask(props: {task: ITask[], setTask: any, setError: any, error: any}) {
    const initialTask : ITask = {id: '', taskName: ''};
    const [newTask, setNewTask] = useState(initialTask);       

    function NewTask(event: any) {     
        if (newTask.taskName.trim() !== ''){            
            props.setTask([...props.task, newTask]);
            setNewTask({id: '', taskName: ''});
            props.setError(null);   
        }            
        else props.setError('Introduzca una tarea por favor');               
        event.preventDefault();
    }

    return (
        <div>
            <h4 className="text-center">Agregar Tarea</h4>
            <form>
                {props.error && <span className="text-danger">{props.error}</span>}
                <input type="text" placeholder="Nombre de la tarea" className="form-control mb-2" 
                onChange={e => setNewTask({id: GenerateId(), taskName: e.target.value})} value={newTask.taskName}/>
                <button className="form-control btn btn-dark" type="submit" onClick= {NewTask}>Agregar</button>
            </form>
        </div>
    )
}

export default AddTask;
