/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import Card from "./components/Card";
import Body from "./components/Body";
import Aside from "./components/Aside";
import { useEffect, useState } from "react";
import Inputs from "./components/Inputs";
import Calculadora from "./page/index";

function App() {
  const [days, setDays] = useState([]);

  return <Calculadora />;
}

export default App;
