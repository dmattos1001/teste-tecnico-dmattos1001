/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import Calculadora from "./page/index";
import { Switch, Route } from "react-router-dom";
import Error from "./page/error";

function App() {
  

  return (
    <Switch>

      <Route exact path={"/"}>
      <Calculadora />
      </Route>

      <Route path={"/error"}>
        <Error />
      </Route>

    </Switch>
  );
}

export default App;
