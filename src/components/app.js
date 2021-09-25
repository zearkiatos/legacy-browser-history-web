import React, { Component } from "react";
import { Link } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <h4>App</h4>
        <Link to="/users">Users</Link>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default App;
