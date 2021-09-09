import { IUser } from "shared/IUser";

function UsersList(props: { user: IUser[], deleteUser: any, editUser: any, enabledEdit: boolean}) {
    function Delete(id: string) {        
        props.deleteUser(id);
    };
    function Edit(id: string) {
        props.editUser(id);
    };    
  return (
    <>
      <h4 className="text-center">Lista de Usuarios</h4>
        <ul>
        {
         props.user.length === 0 ? 
         (<li className="list-group-item">No existen usuarios</li>)
        : (props.user.map(u => {
          return (
            <li key={u.id} className="list-group-item">
              <span className="lead">{u.name}&lt;-&gt;{u.email}</span>
              <button className="btn btn-danger btn-sm float-end mx-2" disabled={props.enabledEdit} onClick={() => Delete(u.id ?? '')}>Eliminar</button>
              <button className="btn btn-warning btn-sm float-end" disabled={props.enabledEdit} onClick={() => Edit(u.id ?? '')}>Editar</button>
            </li>
          );
        }))}
        </ul>
    </>
  );
}

export default UsersList;
