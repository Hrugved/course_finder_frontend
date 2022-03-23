
import * as React from 'react';
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from './styles.module.css'

const Card = (props) => {
 
  // console.log(props);
  // const bgColor = props.clash ?  'rgba(255,0,0,.5)' : 'rgba(127,255,0,.5)'
  const course = props.courses_map.get(props.courseId)
  let wrapperClass = styles.wrapper;
  wrapperClass += " " + (props.clash ? styles.clash : styles.noClash);

  return (
    <div className={styles.button}>
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
    onUpdate: (Clash) => dispatch(actions.onUpdateClash(Clash)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);