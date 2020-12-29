import React, {useState, useEffect} from "react";
import moment from "moment";
import "./calendarStyle.css"
import buildCalendar from "./build";


export default function Calendar() {
  const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const [calendar, setCalendar] = useState([]);  
  const [value, setValue] = useState(moment());


  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);
  
  function isSelected(day){
    return value.isSame(day, "day")
  }

  /*
  function beforeToday(day){
    return day.isBefore(new Date(), "day")
  }
  */

  function isToday(day){
    return day.isSame(new Date(), "day")
  }

  function isSameMonth(day){
    return day.isSame(new Date(), "month")
  }

  function dayStyles(day){
    
    if (isSelected(day)) return "selected"
    if(isToday(day)) return "today"
    if(isSameMonth(day) === false) return "notSameMonth"
    if(isSameMonth(day)) return "sameMonth"
    return ""
  }

  function currMonthName(){
    return value.format("MMMM")
  }

  function currYear(){
    return value.format("YYYY")
  }

  function prevMonth(){
    return value.clone().subtract(1, "month")
  }

  function nextMonth(){
    return value.clone().add(1, "month")
  }

  function prevYear(){
    return value.clone().subtract(1, "year")
  }

  function nextYear(){
    return value.clone().add(1, "year")
  }

  return (
    <div className="card">
    <div className="calendar">
      <div className="header">
        
        <div 
          className="previousMonth" 
          onClick={() => setValue(prevMonth())}>
            {String.fromCharCode(60)}
        </div>
        <div className="current">{currMonthName()}</div>
        <div 
          className="nextMonth"
          onClick={() => setValue(nextMonth())}>
            {String.fromCharCode(62)}
        </div>

        <div 
          className="previousYear" 
          onClick={() => setValue(prevYear())}>
            {String.fromCharCode(60)}
        </div>
        <div className="current">{currYear()}</div>
        <div 
          className="nextYear"
          onClick={() => setValue(nextYear())}>
            {String.fromCharCode(62)}
        </div>
      </div>

      <div className="day-name">
          {dayName.map((d) => (
              <div className="week">{d}</div>
          ))}
      </div>

      <div className="body">

        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day"
                onClick={() => setValue(day)}
              >
                <div
                  className={dayStyles(day)}
                  
                >
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
