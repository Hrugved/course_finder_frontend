
import * as React from 'react';
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from './styles.module.css'

const Card = (props) => {
 
  const course = props.courses_map.get(props.courseId)

  let wrapperClass = styles.wrapper;
  wrapperClass += " " + (props.clash ? styles.clash : styles.noClash);

  return (
    <div className={styles.button} onClick={() => props.onClick(props.courseId)}>
      <div className={wrapperClass}>
        <p className={styles.name}>{course.course_name}</p>
        <p className={styles.credits}>{course.credits}</p>
        <p className={styles.extendedName}>{course.course_name_extended}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    courses_map: state.finder.all_courses_map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (courseId) => dispatch(actions.onSelectCourse(courseId)) 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);