import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import axios from 'axios-server';

const Selected = (props) => {

  // if(course==null) {
  //   return <p>no course selected</p>
  // }
  const [courses,setCourses] = useState([])
  const [credits,setCredits] = useState(0)

  const {courses_map,selected_courses_list} = props

  useEffect(() => {
    Promise.all(selected_courses_list.map(id => {
      const {course_name,course_name_extended,credits} = courses_map.get(id);
      console.log(course_name);
      const list = [...selected_courses_list]
      if(selected_courses_list.indexOf(id) > -1) {
        list.splice(selected_courses_list.indexOf(id),1)
      }
      console.log(list);
      let clash = false
      return axios.post('/find-clashes', {
        course_id:id,
        course_ids:list}
      )
        .then( response => {
            console.log('response.data:'+course_name+' '+response.data);
            if(response.data.length>0) {
              console.log('here');
              clash=true
            }
          return {
            id,course_name,course_name_extended,credits,clash
          }
        } )
        .catch( error => {
            console.log('useEffect Error fetching filter!', error);
        } );
    })).then(_courses => {
      console.log(_courses);
      setCourses(_courses)
      setCredits(_courses.map(item => item.credits).reduce((prev, next) => prev + next))
    });
    
  },[courses_map,selected_courses_list]) 

  return (
      <div className={styles.wrapper}>
        <div className={styles.credits}><p>Credits {credits}</p></div>
        <div className={styles.list}>
          {courses.map(el => {
            let nameStyle = styles.name
            if(el.clash) nameStyle = styles.name_clash
            return (
            <div key={el.id} className={styles.item}>
              <div className={nameStyle} onClick={() => props.onClick(el.id)}>{`${el.course_name} (${el.course_name_extended})`}</div>
              <div className={styles.credit}>{el.credits}</div>
              <div className={styles.remove} onClick={() => props.onRemove(el.id)}>Remove</div>
            </div>
          )})}
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses_map: state.finder.all_courses_map,
    selected_courses_list: state.finder.selected_courses_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (filter) => dispatch(actions.fetchFilteredCourseList(filter)), 
    onRemove: (course_id) => dispatch(actions.onRemoveSelectedCourse(course_id)), 
    onClick: (courseId) => dispatch(actions.onSelectCourse(courseId)) 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selected);
