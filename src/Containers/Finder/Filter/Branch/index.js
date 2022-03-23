import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import ThreeStateSwitch from "Components/ThreeStateSwitch"
import { useSearchParams } from "react-router-dom";
import Switch from '@mui/material/Switch';

const Branch = (props) => {

  if(props.loading) {
    return (<p>Loading...</p>)
  }
  return (
    <Fragment>
      {[...props.branch_map.entries()].map(([branch,include]) => {
        return (
          <div key={branch} className={styles.wrapper}>
            <p className={styles.name}>{branch}</p>
            <Switch
              checked={include}
              onChange={(event) => props.onUpdate(branch,event.target.checked)}
            />
            {/* <ThreeStateSwitch name={branch} onChange={(val) => props.onUpdate(branch,val)} value={props.branch_map.get(branch)}/> */}
          </div>
        )
      })}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.finder.loading,
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
