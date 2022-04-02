import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import { MdOutlineClose } from "react-icons/md";
import { threeStateSwitch } from "constants";


// TODO: Add icon in <i> tags

const ThreeStateSwitch = (props) => {
// //console.log(props);
  return (
    <div className={styles.wrapper}>
      <label className={styles.btn_container}>
        <input type="radio" className={[styles.no, styles.input_radio].join(' ')} name={props.name} value={threeStateSwitch.exclude}  onChange={() => props.onChange(threeStateSwitch.exclude)} checked={props.value===threeStateSwitch.exclude}/>
        <div className={styles.checkmark}><i className={styles.ion_close_round}></i></div>
      </label>
      <label className={styles.btn_container} >
        <input type="radio" className={[styles.neutral, styles.input_radio].join(' ')} name={props.name} value={threeStateSwitch.neutral} onChange={() => props.onChange(threeStateSwitch.neutral)} checked={props.value===threeStateSwitch.neutral}/>
        <div className={styles.checkmark}><i className={styles.ion_record}></i></div>
      </label>
      <label className={styles.btn_container}>
        <input type="radio" className={[styles.yes, styles.input_radio].join(' ')} name={props.name} value={threeStateSwitch.include}  onChange={() => props.onChange(threeStateSwitch.include)} checked={props.value===threeStateSwitch.include} />
        <div className={styles.checkmark}><i className={styles.ion_checkmark_round}></i></div>
      </label>
    </div>
  );
};

export default ThreeStateSwitch
