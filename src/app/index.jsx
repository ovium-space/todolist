import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar";
import "./style.css";


export default function App(){
    const [value, setValue] = useState(moment());
    return <Calendar value={value} setValue={setValue} />
}

