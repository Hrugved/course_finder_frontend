import axios from 'axios-server';
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";

const Info = (props) => {

  // if(props.loading) {
  //   return (<p>Loading...</p>)
  // }
  const [course,set_course] = useState(null)
  const [isSelected,setIsSelected] = useState(false)
  const [clashes,setClashes] = useState([])

  const {selected_course,courses_map,selected_courses_list} = props
  useEffect(() => {
    set_course(courses_map.get(selected_course))
    const list = [...selected_courses_list]
    if(selected_courses_list.indexOf(selected_course) > -1) {
      setIsSelected(true)
      list.splice(selected_courses_list.indexOf(selected_course),1)
    } else setIsSelected(false)
    axios.post('/find-clashes', {
      course_id:selected_course,
      course_ids:list}
    )
      .then( response => {
          //console.log('find-clashes response.data:'+response.data);
          setClashes([...response.data.map(id => courses_map.get(id).course_name)])
      } )
      .catch( error => {
          //console.log('find-clashes Error fetching filter!', error);
      } );
  },[selected_course,courses_map,selected_courses_list])

  if(course==null) {
    return <p>no course selected</p>
  }

  let clashStyle = styles.item10_key
  if (clashes.length>0) {
    clashStyle = styles.item10_key_clash
  }

  let btn=null
  if(isSelected) {
    btn = ( <div className={styles.remove} onClick={() => props.onRemove(course.course_id)}>Remove</div> )
  } else {
    if(clashes.length>0) {
      btn = ( <div className={styles.remove} onClick={() => props.onAdd(course.course_id)}>Add</div> )
    }
    else btn = ( <div className={styles.add} onClick={() => props.onAdd(course.course_id)}>Add</div> )
  }

  return (
      <div className={styles.wrapper}>
        {btn}
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
              {course.inst_names.split(',').map((name,i) => <p key={name} className={styles.inst}><a href={`mailto:${course.inst_emails.split(',')[i]}`}>{name}</a></p>)}
            </div>
            <div className={[clashStyle,styles.item_key].join(' ')}>Clashes</div>
            <div className={[styles.item10_val,styles.item_val].join(' ')}>
              {clashes.map(name => <p key={name} className={styles.clashCourse}>{name}</p>)}
            </div>
          </div>
        </div>  
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses_map: state.finder.all_courses_map,
    selected_course: state.finder.selected_course,
    selected_courses_list: state.finder.selected_courses_list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (filter) => dispatch(actions.fetchFilteredCourseList(filter)), 
    onAdd: (course_id) => dispatch(actions.onAddSelectedCourse(course_id)), 
    onRemove: (course_id) => dispatch(actions.onRemoveSelectedCourse(course_id)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
