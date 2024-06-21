
import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";
import './index.css'
import Popup from "reactjs-popup";
import { useState } from "react";


const Users = () => {
    const{users,loading,errors} = useGetUsers();
    const [popup,setPopup] = useState(<Users/>);
    console.log({users});
    return(
        <div className="cards">
            <Popup trigger={
                 <button type="submit" className="butt" onClick={(event)=>setPopup}>Login</button>
            }>
            </Popup>
       {loading && <h2>Loading users ...</h2>}
        {errors.length>0 && <h2>{errors}</h2>}
        {users.length > 0
        ?users.map((user)=>(
            <UserCard
            key={user.id}
            image={user.image}
            fullName={`${user.firstName} ${user.lastName}`}
            />
        ))
        :!loading && <h2>Users not found</h2>
    }
        </div>
    );
};
export default Users;