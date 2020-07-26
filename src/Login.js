import React, { Component } from "react";
import firebase from "./firebase";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  clickHandler = (e) => {
    e.preventDefault();
    firebase
      .doSignInWithEmailAndPassword(this.state.username, this.state.password)
      .then((res) => {
        console.log(res);
        this.props.login();
      })
      .catch((err) => {
        console.log(err);
        alert("Username or Password Missmatch!!!!!!");
        window.location.href = "http://localhost:3000/";
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form>
          <input
            name="username"
            type="text"
            value={username}
            onChange={this.changeHandler}
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.changeHandler}
          />
          <button onClick={this.clickHandler}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
