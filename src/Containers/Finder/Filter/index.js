import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import CourseTypes from "./CourseTypes";
import Branch from "./Branch"
import Credits from "./Credits"
import Clash from './Clash'

const Filter = (props) => {

  return (
      <div className={styles.wrapper}>
        <div className={styles.creditsBox}>
          <Credits/>
        </div>  
        <div className={styles.clashBox}>
          <Clash/>
        </div>  
        <div className={styles.courseFilterBox}>
          <CourseTypes />
        </div>  
        <div className={styles.branchFilterBox}>
          <Branch />
        </div>  
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // semesters_list: state.finder.semesters_list,
    // selected_semester: state.finder.selected_semester
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
)(Filter);
