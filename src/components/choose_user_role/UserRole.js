import React from 'react'
import './UserRole.css'
import { bindActionCreators } from 'redux'
import { selectUser } from '../../store/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserRole = ({ selectUser }) => {
  return (
    <div className="user-role">
      <h1>Choose your user role</h1>

      <Link to="/goods_gallery">
        <button
          className="btn simple-user"
          value="user"
          onClick={(e) => selectUser(e.target.value)}
        >
          {' '}
          user{' '}
        </button>
      </Link>
      <Link to="/goods_gallery">
        <button
          className="btn admin"
          value="admin"
          onClick={(e) => selectUser(e.target.value)}
        >
          {' '}
          admin{' '}
        </button>
      </Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectUser: bindActionCreators(selectUser, dispatch),
})

export default connect(null, mapDispatchToProps)(UserRole)
