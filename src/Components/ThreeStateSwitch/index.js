import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import { MdOutlineClose } from "react-icons/md";


// TODO: Add icon in <i> tags

const ThreeStateSwitch = (props) => {
console.log(props);
  return (
    <div className={styles.wrapper}>
      <label className={styles.btn_container}>
        <input type="radio" className={[styles.no, styles.input_radio].join(' ')} name="radio" value="no" onChange={() => props.onChange(0)} checked={props.value===0}/>
        <div className={styles.checkmark}><i className={styles.ion_close_round}></i></div>
      </label>
      <label className={styles.btn_container} >
        <input type="radio" className={[styles.neutral, styles.input_radio].join(' ')} name="radio" value="neutral" onChange={() => props.onChange(1)} checked={props.value===1}/>
        <div className={styles.checkmark}><i className={styles.ion_record}></i></div>
      </label>
      <label className={styles.btn_container}>
        <input type="radio" className={[styles.yes, styles.input_radio].join(' ')} name="radio" value="yes" onChange={() => props.onChange(2)} checked={props.value===2}/>
        <div className={styles.checkmark}><i className={styles.ion_checkmark_round}></i></div>
      </label>
    </div>
  );
};

export default ThreeStateSwitch
