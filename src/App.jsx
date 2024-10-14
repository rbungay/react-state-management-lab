// src/App.jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);

  return <h1>Hello world!</h1>;
};

export default App;
