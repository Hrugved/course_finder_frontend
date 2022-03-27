import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import ThreeStateSwitch from "Components/ThreeStateSwitch"
import { useSearchParams } from "react-router-dom";
import Switch from '@mui/material/Switch';

const Branch = (props) => {

  const handleClear = () => {
    [...props.branch_map.keys()].map(name => props.onUpdate(name,false));
  }

  const handleSet = () => {
    [...props.branch_map.keys()].map(name => props.onUpdate(name,true));
  }

  return (
    <div>
      <div className={styles.controls}>
        <div className={styles.control1} onClick={handleSet}>SET</div>
        <div className={styles.control2} onClick={handleClear}>CLEAR</div>
      </div>
      {[...props.branch_map.entries()].map(([branch,include]) => {
        return (
          <div key={branch}>
            <div className={styles.list}>
              <p className={styles.name}>{branch}</p>
              <Switch
                checked={include}
                onChange={(event) => props.onUpdate(branch,event.target.checked)}
              />
            </div>
          </div>
        )
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    branch_map: state.finder.branch_map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (branch,include) => dispatch(actions.onUpdateFilterBranch(branch,include)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Branch);
