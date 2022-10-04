import React from "react";
import t from './Temp.module.css'

export default function Temp({ label, value, className }){
    return (
        <div className={[t.temp, className].join(" ")}>
            <span className={t.label}>{label}</span>
            <span className={t.value}>{value}</span>
            
        </div>
    )
}