import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import { click } from '../actions/click';

class List extends React.Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      users: [],
      user: {
        id: '',
        avatar: '',
        login: '',
        htmlurl: ''
      },
      loading: false,
      errors: {}
    }
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.fetchUsers();
  }

/* Function bind in the constructor so we can use the parameter and redirect */
  onClick = (login) => {
    this.setState({ loading: true });
    this.props.click(login).then(() => this.props.history.push(`user/${login}`));
  }

  fetchUsers() {
    fetch( 'https://api.github.com/users' ).then((res) => res.json() ).then((data) => {
      this.setState({users: data});
    })
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="ui container">
        <h2>GitHub users list</h2>
        <ul loading={loading}>
          { users.map(user =>
              <li key={user.login}>
                <h4 className="ui header">{user.login}</h4>
                <img className="ui avatar image" src={user.avatar_url} alt={user.login}/>
                <Button onClick={ () => this.onClick(user.login) } id={ user.login }>Details</Button>
              </li>
           )}
         </ul>
      </div>
    );
  }
};

/* Defining prop types to be used when clicking on User details. History is
provided by RouterBrowser */
List.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  click: PropTypes.func.isRequired
};

/* First parameter allows us to pass some data from Redux state, and second
one is to dispatch */
export default connect(null, { click })(List);
