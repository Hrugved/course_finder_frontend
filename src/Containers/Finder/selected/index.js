import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";

const Selected = (props) => {

  // if(course==null) {
  //   return <p>no course selected</p>
  // }

  return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {props.selected_courses.map(id => {
            const {course_name,course_name_extended,credits} = props.courses_map.get(id);
            return (
            <div key={id} className={styles.item}>
              <div className={styles.name}>{`${course_name} (${course_name_extended})`}</div>
              <div className={styles.credit}>{credits}</div>
              <div className={styles.remove}>Remove</div>
            </div>
          )})}
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses_map: state.finder.all_courses_map,
    selected_courses: state.finder.selected_courses_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (filter) => dispatch(actions.fetchFilteredCourseList(filter)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selected);
