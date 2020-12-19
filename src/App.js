import React, { useState } from "react";
import "./styles.css";

let name = "";
let year = "";

export default function App() {
  const [out, setOut] = useState();

  function checkInput() {
    if (year < 0 || year > 2020 || isNaN(parseInt(year)) == isNaN(NaN))
      return 0;
    return 1;
  }

  function checkLeapYear() {
    if (checkInput()) {
      if (year % 400 == 0) return `${name} you were born in a Leap Year!!`;
      if (year % 100 == 0) return `${name} you were not born in a Leap Year`;
      if (year % 4 == 0) return `${name} you were born in a Leap Year!!`;
      return `${name} you were not born in a Leap Year`;
    }
    return "Enter a vaild Input";
  }

  return (
    <div className="App">
      <h1>Check if your birth year is a leap year</h1>
      <input
        placeholder="Enter your Name"
        onChange={(n) => (name = n.target.value)}
      ></input>
      <input
        placeholder="Enter your Birth Year"
        onChange={(y) => (year = y.target.value)}
      ></input>
      <button onClick={() => setOut(checkLeapYear())}>Check</button>
      {out}
    </div>
  );
}
