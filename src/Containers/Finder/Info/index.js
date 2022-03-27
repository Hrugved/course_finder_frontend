import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import Item from "./Item";
import styles from "./styles.module.css";

const Info = (props) => {

  // if(props.loading) {
  //   return (<p>Loading...</p>)
  // }
  const [course,set_course] = useState(null)

  const {selected_course,courses_map} = props
  useEffect(() => {
    set_course(courses_map.get(selected_course))
  },[selected_course,courses_map])

  if(course==null) {
    return <p>no course selected</p>
  }

  return (
      <div className={styles.wrapper}>
        <div className={styles.ViewBox}>
          <div className={styles.GridBox}>
            <div className={[styles.item1_key,styles.item_key].join(' ')}>Course ID</div>
            <div className={[styles.item1_val,styles.item_val].join(' ')}>{course.course_name}</div>
            <div className={[styles.item2_key,styles.item_key].join(' ')}>Course Name</div>
            <div className={[styles.item2_val,styles.item_val].join(' ')}>{course.course_name_extended}</div>
            <div className={[styles.item3_key,styles.item_key].join(' ')}>Branch</div>
            <div className={[styles.item3_val,styles.item_val].join(' ')}>{course.branch}</div>
            <div className={[styles.item4_key,styles.item_key].join(' ')}>Credits</div>
            <div className={[styles.item4_val,styles.item_val].join(' ')}>{`${course.credits} (${course.credits_extended})`}</div>
            <div className={[styles.item5_key,styles.item_key].join(' ')}>Course Type</div>
            <div className={[styles.item5_val,styles.item_val].join(' ')}>{course.course_type}</div>
            <div className={[styles.item6_key,styles.item_key].join(' ')}>Discussion Schedule</div>
            <div className={[styles.item6_val,styles.item_val].join(' ')}>{course.sched_discussion}</div>
            <div className={[styles.item7_key,styles.item_key].join(' ')}>Tutorial Schedule</div>
            <div className={[styles.item7_val,styles.item_val].join(' ')}>{course.sched_tutorial}</div>
            <div className={[styles.item8_key,styles.item_key].join(' ')}>Practical Schedule</div>
            <div className={[styles.item8_val,styles.item_val].join(' ')}>{course.sched_practical}</div>
            <div className={[styles.item9_key,styles.item_key].join(' ')}>Instructors</div>
            <div className={[styles.item9_val,styles.item_val].join(' ')}>
              {course.inst_names.split(',').map((name,i) => <p className={styles.inst}><a href={`mailto:${course.inst_emails.split(',')[i]}`}>{name}</a></p>)}
            </div>
          </div>
        </div>  
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses_map: state.finder.all_courses_map,
    selected_course: state.finder.selected_course
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
)(Info);
