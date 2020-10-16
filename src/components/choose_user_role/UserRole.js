import React from 'react';
import './UserRole.css'





const UserRole=()=> {
    return (
            <div className="user-role">



                <h1>Choose your user role</h1>

                <button className='btn simple-user' value="user">user </button>
                <button className='btn admin' value="admin">admin </button>




            </div>

);
}

export default UserRole;