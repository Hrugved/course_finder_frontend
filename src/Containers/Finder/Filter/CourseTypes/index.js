import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import ThreeStateSwitch from "Components/ThreeStateSwitch"
import { useSearchParams } from "react-router-dom";
import { threeStateSwitch } from "constants";

const CourseTypes = (props) => {

  return (
  <Fragment>
    {[...props.course_types_map.entries()].map(([course_type,val]) => {
      return (
        <div key={course_type} className={styles.wrapper}>
          <p className={styles.name}>{course_type}</p>
          <ThreeStateSwitch name={course_type} onChange={(val) => props.onUpdate(course_type,val)} value={val}/>
        </div>
      )
    })}
  </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    course_types_map: state.finder.course_types_map
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (course_type,val) => dispatch(actions.onUpdateFilterCourseTypes(course_type,val)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseTypes);
