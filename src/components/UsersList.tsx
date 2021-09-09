import { IUser } from "shared/IUser";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from "react";
import DialogAlert from "./DialogAlert";

function UsersList(props: { user: IUser[], deleteUser: any, editUser: any, enabledEdit: boolean}) {  
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(-1);
  
    function Delete(id: number) { 
        setId(id);
        setOpen(true);
    };
    function Edit(id: number) {
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
              <span className="lead">
                {u.name}&lt;-&gt;{u.email}
              </span>
              <button
                className="btn btn-danger btn-sm float-end mx-2"
                disabled={props.enabledEdit}
                onClick={() => Delete(u.id ?? -1)}>
                <DeleteIcon />
              </button>
              <button
                className="btn btn-warning btn-sm float-end"
                disabled={props.enabledEdit}
                onClick={() => Edit(u.id ?? -1)}>
                <EditIcon />
              </button>
            </li>
          );
        }))}
        </ul>
        <DialogAlert id={id} delete={props.deleteUser} open={open} setOpen={setOpen}/>
    </>
  );
}

export default UsersList;
