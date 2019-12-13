import React, { useState, useEffect } from "react";
import "./CSS files/clock.css";

const option = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [calendar] = useState(new Date().toLocaleDateString("en-GB", option));
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    document.getElementById("checkbox").checked = true;
  }, []);

  const handleClick = () => {
    // makes the checkbox on or off

    if (toggle) {
      setToggle(!toggle);
      document.getElementById("checkbox").checked = false;
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="custom-toggle">
      <div onClick={handleClick} className="ui toggle checkbox">
        <input type="checkbox" id="checkbox" name="public" />
        <label>
          {" "}
          <i className="calendar alternate outline icon"></i> Calendar
        </label>
      </div>

      <div className="position-relative">
        <div className="custom-clock">
          <div className="time">
            <div>{time}</div>
            <div>{toggle ? calendar : ""} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
