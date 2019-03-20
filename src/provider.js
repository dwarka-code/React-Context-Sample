import React, { Component } from "react";
import axios from "axios";
import AppContext from "./context";

// Then create a provider Component
class AppProvider extends Component {
  Local = JSON.parse(localStorage.getItem("state"));

  state = {
    name: "Wes",
    age: 100,
    cool: true,
    data: []
  };

  updateStorage(data) {
    localStorage.removeItem("state");
    localStorage.setItem("state", JSON.stringify(data));
  }

  getData = async () => {
    await axios
      .request({
        method: "get",
        url: "https://reqres.in/api/users?page=2"
      })
      .then(res => this.setState({ data: JSON.stringify(res) }));
    await this.updateStorage(this.state);
    console.log(this.state);
  };

  componentWillMount() {
    //this.updateStorage(this.state);
  }

  render() {
    const state = this.Local ? this.Local : this.state;
    return (
      <AppContext.Provider
        value={{
          state: state,
          getData: this.getData
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
