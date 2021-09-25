import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers = ({ users }) =>
    users.map((user) => <li key={user.id}>{user.name}</li>);

  render() {
    return (
      <div>
        <ul>{this.renderUsers(this.props)}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  fetchUsers: userActions.fetchUsers
})(UsersList);
