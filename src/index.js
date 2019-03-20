import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./provider";
import Person from "./Person";
import "./styles.css";

const AppContext = React.createContext();

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Person>Hello CodeSandbox</Person>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </AppProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
