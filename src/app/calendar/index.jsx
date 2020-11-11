import React, { useState, useEffect } from "react";
import "./style.css";
import buildCalendar from "./build";
import dayStyles, {beforeToday} from "./style";
import Header from "./header";

export default function Calendar({ value, setValue }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      <Header value={value} setValue={setValue} />
      <div className="body">
        <div className="day-names">
          {
            ["SUN", "MOM", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
            <div className="week">{d}</div>
            ))
          }
        </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day" onClick={() => !beforeToday(day) && setValue(day)}>
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
