import React from 'react';
import './UserRole.css'
import {bindActionCreators} from "redux";
import {selectUser} from "../../store/actions";
import {connect} from "react-redux";


const UserRole = ({ selectUser }) => {
    return (
            <div className="user-role">
                <h1>Choose your user role</h1>

                <button className='btn simple-user' value="user" onClick={(e)=>selectUser(e.target.value)}>user </button>
                <button className='btn admin' value="admin"  onClick={(e)=>selectUser(e.target.value)}>admin </button>
            </div>

);
}

const mapDispatchToProps = (dispatch) => ({
    selectUser: bindActionCreators(selectUser, dispatch)

});



export default connect(null,mapDispatchToProps )(UserRole);



