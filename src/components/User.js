import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const User = ({ user }) =>
<div className="ui card">
  <div className="image">
    <img src={user.avatar_url} alt={user.login}/>
  </div>
  <div className="content">
    <p className="header">{user.login}</p>
    <div className="meta">
      <span className="meta">User id: {user.id}</span>
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon" />
      <Link to={`{user.html_url}`}>Go to GitHub</Link>
    </a>
  </div>
  <div className="extra content">
    <a>
      <Link className="ui button" to="/">Previous page</Link>
    </a>
  </div>

</div>

/* React components are functions */
User.propTypes = {
  user: PropTypes.shape.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(User);