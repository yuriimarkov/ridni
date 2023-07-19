import React from "react";
import styles from "./Button.module.css"

export default function Button ({className, text, onClick}) {
    return (
        <button className={`${styles.btn} ${className}`} onClick={onClick}>{text}</button>
    )
}