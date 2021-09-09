import React from "react";
import UsersList from "./UsersList";
import EditUser from "./EditUser";
import { IUser } from "shared/IUser";
import AddUser from "./AddUser";

function Layout() {
    const initialSingleUser : IUser = {name: '', email: ''};
    const initialUser : IUser [] = [];

    const [user, setUser] = React.useState(initialUser);
    const [enabledEdit, setEnabledEdit] = React.useState(false);
    const [singleUser, setSingleUser] = React.useState(initialSingleUser);
    const [error, setError] = React.useState(null);
    
    async function GetUsers(){
        const data = await fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());    
        setUser(data); 
    };
    
    React.useEffect(()=>{
        try {
            GetUsers();
        }
        catch (error) {
           console.log(error);     
        }
    }, []);
   
    function DeleteUser(id : number) {
        const items = user.filter(item => item.id !== id);
        setUser(items);
    };

    function Edit(id: number) {
      setEnabledEdit(true);      
      setError(null);
      user.filter(f => f.id === id).map(item => (
          setSingleUser({ id: item.id, name: item.name, email: item.email })
      ));
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
