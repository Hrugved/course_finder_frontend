import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import Filter from './Filter'
import Course from './Course'

const Finder = (props) => {

  if(!props.init_fetched) {
    return (<p>fetching data...</p>)
  }

  return (
    <div className={styles.root}>
      <div className={styles.row1}>
        <div className={styles.row1_col1}>
          <Filter/>
        </div>
        <div className={styles.row1_col2}>
          <Course />
        </div>
        <div className={styles.row1_col3}>
          <div className={styles.detailBox}>
            
          </div>
        </div>
      </div>
      <div className={styles.row2}>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    init_fetched: state.finder.init_fetched,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onInitFetch: () => dispatch(actions.fetchInit()), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finder);
