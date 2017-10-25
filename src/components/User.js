import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const User = ({ user }) =>
<div className="container">
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
    <i className="user icon" />
    <Link to={`{user.html_url}`}>Go to GitHub</Link>
  </div>
  <div className="extra content">
    <Link className="ui button" to="/">Previous page</Link>
  </div>
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
