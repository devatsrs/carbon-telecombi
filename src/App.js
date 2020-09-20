import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginLayout from "./components/Layouts/LoginLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <LoginLayout {...props} />} />
        <Route render={(props) => <DashboardLayout {...props} />}></Route>
      </Switch>
    </div>
  );
}

export default App;
