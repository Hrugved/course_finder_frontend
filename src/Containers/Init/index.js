import React, { Fragment, useState } from "react";
import styles from "./styles.module.css";

const Init = () => {

  const sems = ['22-even','22-odd'];
  let sem_selected = null;

  const onChange = (val) => {
    console.log(val); 
  }

  return (
    <div className={styles.root}>
      <div className={styles.col1}>
        <div className={styles.col1_name_div}>
          <p className={styles.col1_name_1}>Course</p>
          <p className={styles.col1_name_2}>Finder</p>
        </div>
        <div>
          <p>Credits</p>
        </div>
      </div>
      <div className={styles.col2}>
        <div className={styles.col2_1}>
          <div className={styles.col2_1_sem}>  
            <p className={styles.col2_1_sem_title}>Select Semester:</p>
            <div className={styles.col2_1_sem_select_div}>
              <select
                  className={styles.col2_1_sem_select}
                  value={sem_selected}
                  onChange={(e) => onChange(e.target.value)}>
                  {sems.map(option => (
                      <option key={option} value={option}>
                          {option}
                      </option>
                  ))}
              </select>
            </div>
          </div>
          <button className={styles.button}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Init;
