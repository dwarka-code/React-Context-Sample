import React, { Component } from "react";
import AppContext from "./context";

class Person extends Component {
  componentWillMount() {
    //console.log(this.context);
    //this.context.getData();
  }
  componentDidMount() {
    console.log(this.context);
    //this.context.state.getData()
  }
  render() {
    const data = this.context;
    return (
      <div className="person">
        <React.Fragment>
          <p>Age: {data.state.age}</p>
          <p>Name: {data.state.name}</p>
          <p>data: {data.state.data}</p>
          <button onClick={data.getData}>Ck</button>
        </React.Fragment>
      </div>
    );
  }
}

Person.contextType = AppContext;

export default Person;
