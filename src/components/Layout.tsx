import React from "react";
import UsersList from "./UsersList";
import EditUser from "./EditUser";
import { IUser } from "shared/IUser";
import AddUser from "./AddUser";

function Layout() {
    const initialSingleUser : IUser = {id: '', name: '', email: ''};
    const initialUser : IUser [] = [];

    const [user, setUser] = React.useState(initialUser);
    const [enabledEdit, setEnabledEdit] = React.useState(false);
    const [singleUser, setSingleUser] = React.useState(initialSingleUser);
    const [error, setError] = React.useState(null);
   
    function DeleteUser(id : string) {
        const items = user.filter(item => item.id !== id);
        setUser(items);
    };

    function Edit(id: string) {
      setEnabledEdit(true);      
      setError(null);
      user.filter(f => f.id === id).map(item => {
          setSingleUser({ id: item.id, name: item.name, email: item.email });
          return null;
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <UsersList user={user} deleteUser={DeleteUser} editUser={Edit} enabledEdit={enabledEdit}/>
                </div>
                <div className="col-3">
                    {enabledEdit ? <EditUser user={singleUser} allUsers={user} setUser={setUser} setEnabledEdit={setEnabledEdit} 
                    setError={setError} error={error}/> 
                    : <AddUser setUser={setUser} user={user} setError={setError} error={error}/>}
                </div>
            </div>
        </div>
    )
}

export default Layout;
