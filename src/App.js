import React, { Component } from "react";
import TaskAdd from "./TaskAdd";
import TaskDisplay from "./TaskDisplay";
import firebase from "./firebase";
import Login from "./Login";
//확인을 위한 주석 추가
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      data: "",
      login: true,
    };
    if (firebase.auth.currentUser === null) {
      this.state.login = false;
    }
    this.firestore = firebase.firestore;
  }
  componentDidMount() {
    const datas = [...this.state.datas];
    this.firestore
      .collection("datas")
      .get()
      .then((docs) => {
        docs.forEach((doc) =>
          datas.push({ todo: doc.data().todo, id: doc.id })
        );
        this.setState({ datas });
      })
      .catch((e) => console.log(e));
  }
  changeHandler = (e) => this.setState({ data: e.target.value });
  clickHandler = (e) => {
    e.preventDefault();
    // const firestore = firebase.firestore;
    this.firestore
      .collection("datas")
      .add({ todo: this.state.data })
      .then((res) => {
        const datas = [
          ...this.state.datas,
          { todo: this.state.data, id: res.id },
        ];
        this.setState({
          datas,
          data: "",
        });
      });
    // firestore.collection("datas").doc("key값").set({ todo: this.state.data })
    // 키값을 사용자가 지정하여 위와 같이 사용할 수도 있음
  };
  deleteHandler = (id) => {
    // const firestore = firebase.firestore;
    this.firestore
      .collection("datas")
      .doc(id)
      .delete()
      .then(() => {
        const datas = this.state.datas.filter((data, i) => data.id !== id);
        this.setState({ datas });
      });
    // const datas = this.state.datas.filter((data, i) => idx !== i);
    // this.setState({ datas });
  };
  checkLogin = () => {
    if (firebase.auth.currentUser !== null) this.setState({ login: true });
  };

  render() {
    return (
      <div>
        {this.state.login ? (
          <div>
            <TaskAdd
              data={this.state.data}
              changeHandler={this.changeHandler}
              clickHandler={this.clickHandler}
            />
            <TaskDisplay
              datas={this.state.datas}
              deleteHandler={this.deleteHandler}
            />
          </div>
        ) : (
          <Login login={this.checkLogin}></Login>
        )}
      </div>
    );
  }
}

export default App;
