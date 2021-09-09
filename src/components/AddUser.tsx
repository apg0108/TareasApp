import React from "react";
import { GenerateId } from "shared/GenerateId";
import { IUser } from "shared/IUser";

function AddUser(props: {user: IUser[], setUser: any, setError: any, error: any}) {
    const initialUser : IUser = {name: '', email: ''};
    const [newUser, setNewUser] = React.useState(initialUser);       

    function NewUser(event: any) {     
        if (newUser.name && newUser.name.trim() !== '' && newUser.email && newUser.email.trim() !== ''){            
            props.setUser([...props.user, newUser]);
            setNewUser({name: '', email: ''});
            props.setError(null);   
        }            
        else props.setError('Introduzca un usuario por favor');               
        event.preventDefault();
    }

    return (
        <>
            <h4 className="text-center">Agregar Usuario</h4>
            <form>
                {props.error && <span className="text-danger">{props.error}</span>}
                <input type="text" placeholder="Usuario" className="form-control mb-2" 
                onChange={e => setNewUser({id: GenerateId(),name: e.target.value, email: newUser.email})} value={newUser.name}/>
                <input type="email" placeholder="Email" className="form-control mb-2" 
                onChange={e => setNewUser({id: newUser.id ,name: newUser.name, email: e.target.value})} value={newUser.email}/>
                <button className="form-control btn btn-dark" type="submit" onClick= {NewUser}>Agregar</button>
            </form>
        </>
    )
}

export default AddUser;
