// src/App.jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setFighter] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      console.log("You are broke");
    }
  };

  const totalStats = team.reduce(
    (totals, fighter) => {
      totals.strength += fighter.strength;
      totals.agility += fighter.agility;
      return totals;
    },
    { strength: 0, agility: 0 }
  );

  return (
    <>
      <h1>Zombie Fighters!</h1>
      <h2>Current Money: {money}</h2>
      <p>
        {team.length > 0 ? "My Zombie Fighters!" : "Pick someone stupid"}
        <br />
        <h2>{money < 10 ? "You are broke" : ""}</h2>
        <br />
        {team.length > 0
          ? `Total Stats: 
          Strength: ${totalStats.strength}
          Agility: ${totalStats.agility}`
          : ""}
      </p>
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            <img
              src={member.img}
              alt={member.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h3> {member.name}</h3>
            Price: {member.price} <br />
            Strength: {member.strength} <br />
            Agility: {member.agility}
          </li>
        ))}
      </ul>

      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img
              src={fighter.img}
              alt={fighter.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h3> {fighter.name}</h3>
            Price: {fighter.price} <br />
            Strength: {fighter.strength} <br />
            Agility: {fighter.agility} <br />
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
