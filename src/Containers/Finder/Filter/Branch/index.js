import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import ThreeStateSwitch from "Components/ThreeStateSwitch"
import { useSearchParams } from "react-router-dom";
import { threeStateSwitch } from "constants";

const Branch = (props) => {

  if(props.loading) {
    return (<p>Loading...</p>)
  }
  return (
    <Fragment>
      {[...props.branch_map.keys()].map(branch => {
        return (
          <div key={branch} className={styles.wrapper}>
            <p className={styles.name}>{branch}</p>
            <ThreeStateSwitch name={branch} onChange={(val) => props.onUpdate(branch,val)} value={props.branch_map.get(branch)}/>
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
    onUpdate: (branch,val) => dispatch(actions.onUpdateFilterBranch(branch,val)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Branch);
