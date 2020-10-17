import React, {useState} from "react";
import './Header.css'
import {connect} from "react-redux";
import  logo from '../../graphic/logo.png'
import  menu from '../../graphic/arm.png'
import  closeMenu from '../../graphic/close.png'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {selectUser} from "../../store/actions";




const  Header=({user,selectUser})=> {

    const [active,setActive]= useState(false)


    return (
        <div className="header-wrapper">

            <img src={logo} alt="logo" className="logo" />



    <div className="nav-wrapper">
            {active? <nav>
             <Link to='/goods_gallery' className='nav-btn'>goods gallery</Link>
             {user==='admin'? <Link to='/goods_add' className='nav-btn'> add goods</Link>:''}
             {user?<Link to='/' className='nav-btn change-user' onClick={()=> {
                 setActive(false)
                 selectUser('')
             }}>change user status</Link>:''}

         </nav>:''}
        {user?  <img src={ active? closeMenu:menu} alt="menu" onClick={()=> {

            setActive(prev => !prev)
        }}   className="menu-btn" />:''}

    </div>



        </div>

    )
}


const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    selectUser: bindActionCreators(selectUser, dispatch)

});



export default connect(mapStateToProps,mapDispatchToProps )(Header);

