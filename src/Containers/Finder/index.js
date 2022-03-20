import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import CourseTypes from "./CourseTypes";

const Finder = (props) => {



  useEffect(() => {
    props.onInitFetch();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.row1}>
        <div className={styles.row1_col1}>
          <div className={styles.filterBox}>
            <CourseTypes />
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
