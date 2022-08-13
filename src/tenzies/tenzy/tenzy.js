import React, { useState } from "react";
import Data from "./data.js";
import "./tenzy.css";


function Header() {

  return (
    <div id="header-div">
      <div>
        <h1 id="tenzy-top">Tenzie Game</h1>
        <h5>Continously select a die untill all numbers have been checked</h5>
      </div>
    </div>
  );
}
const defaults=Data
function Main() {
  const [data, setdata] = useState(Data);
  function random() {
    return Math.floor(Math.random() * 10);
  }

  function handleclick(event) {
    let name = event.target.name;
    let index = "";
    let count = 0;

    for (let x of data) {
      if (x.name === name) {
        index = count;
      }
      count += 1;
    }
    function sett(obj) {
      let prevlist = [
        ...obj,
        (obj[index].status = [event.target.innerText, true]),
      ];
      console.log(prevlist);
      let renderedlis = prevlist.pop();
      console.log(prevlist);
      console.log(renderedlis);

      return prevlist;
    }

    setdata((prev) => {
      return sett(prev, event);
    });
  }
  function Checker(props) {
    return (
      <button
        name={props.name}
        className="buttons"
        id={props.status ? "clicked" : "unclick"}
        onClick={handleclick}
      >
        {props.status ? props.number : random()}
      </button>
    );
  }
  const list = data.map((item, key) => {
    return (
      <Checker
        key={key}
        name={item.name}
        status={item.status[1]}
        number={item.status[0]}
      />
    );
  });
  function restart(){
    console.log(defaults)
    window.location.reload()
  }
  function Restart() {
    for (let x of data) {
      if (x.status[1] === false) {
        return null;
      }
    }
    return <button onClick={restart}>restart</button>;
  }
  return (
    <div>
      <div id="button-div">{list}</div>
      <div id="restart-button-div">
        <Restart />
      </div>
    </div>
  );
}
export { Header, Main };
