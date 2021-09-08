import { ITask } from "shared/ITask";

function TaskList(props: { task: ITask[], deleteTask: any, editTask: any}) {
    function Delete(id: string) {        
        props.deleteTask(id);
    };
    function Edit(id: string) {
        props.editTask(id);
    };    
  return (
    <>
      <h4 className="text-center">Lista de Tareas</h4>
        <ul>
        {
         props.task.length === 0 ? 
         (<li className="list-group-item">No existen tareas</li>)
        : (props.task.map(t => {
          return (
            <li key={t.id} className="list-group-item">
              <span className="lead">{t.taskName}</span>
              <button className="btn btn-danger btn-sm float-end mx-2" onClick={() => Delete(t.id)}>Eliminar</button>
              <button className="btn btn-warning btn-sm float-end" onClick={() => Edit(t.id)}>Editar</button>
            </li>
          );
        }))}
        </ul>
    </>
  );
}

export default TaskList;
