import { useState } from "react";
import { IUser } from "shared/IUser";

function EditUser(props: {user: IUser, allUsers: IUser[], setUser: any, setEnabledEdit: any, setError: any, error: any}) {
    const initialUser : IUser = {name: '', email: ''};
    const [editUser, setEditUser] = useState(props.user ?? initialUser);        

    function EditUser(event: any) {
        if (editUser.name && editUser.name.trim() !== '' && editUser.email && editUser.email.trim() !== ''){
           const userNoEditable = props.allUsers.filter(items => items.id !== props.user.id);
           const newUserEdit : IUser = {id: props.user.id, name: editUser.name, email: editUser.email};
           props.setUser([...userNoEditable, newUserEdit]);
           setEditUser({name: '', email: ''});
           props.setEnabledEdit(false);
           props.setError(null);
        } else props.setError('Introduzca un usuario por favor');             
        event.preventDefault();
    }
    function Cancel(event: any) {
        setEditUser({name: '', email: ''});
        props.setEnabledEdit(false);
        props.setError(null);
        event.preventDefault();
    }
    return (
        <>
             <h4 className="text-center">Editar Usuario</h4>
            <form>
                {props.error && <span className="text-danger">{props.error}</span>}
                <input type="text" placeholder="Usuario" className="form-control mb-2" 
                onChange={e => setEditUser({id: editUser.id, name: e.target.value, email: editUser.email})} value={editUser.name}/>
                <input type="email" placeholder="Email" className="form-control mb-2" 
                onChange={e => setEditUser({id: editUser.id, name: editUser.name, email: e.target.value})} value={editUser.email}/>
                <button className="form-control btn btn-warning mb-2" type="submit" onClick={EditUser}>Editar</button>
                <button className="form-control btn btn-secondary" onClick={Cancel}>Cancelar</button>
            </form>
        </>
    )
}

export default EditUser;
