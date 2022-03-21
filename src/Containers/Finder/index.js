import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import CourseTypes from "./CourseTypes";
import Branch from "./Branch"
import Credits from "./Credits"

const Finder = (props) => {

  // useEffect(() => {
  //   props.onInitFetch();
  // }, []);

  let value = 1;

  const handleChange = (val) => {
    value = val;
  }

  return (
    <div className={styles.root}>
      <div className={styles.row1}>
        <div className={styles.row1_col1}>

          <div className={styles.row1_col1_grid}>
            <div className={styles.creditsBox}>
              <Credits/>
            </div>  
            <div className={styles.courseFilterBox}>
              <CourseTypes />
            </div>  
            <div className={styles.branchFilterBox}>
              <Branch />
           </div>  
          
          </div>
          
        </div>
        <div className={styles.row1_col2}>
          <div className={styles.coursesBox}>
            
          </div>
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
    semesters_list: state.finder.semesters_list,
    selected_semester: state.finder.selected_semester
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitFetch: () => dispatch(actions.fetchInit()), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finder);
