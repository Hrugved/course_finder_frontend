import ThreeStateSwitch from "Components/ThreeStateSwitch";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
// import Search from "./Search"
import View from "./View";
import { threeStateSwitch } from "constants";

const Course = (props) => {

  const {selected_semester,clash,course_types_map,branch_map,selected_credits,sched_bitmap,onUpdate,selected_courses_list,updateSchedBitmap} = props;

  useEffect(() => {
    console.log('useEffect:'+selected_courses_list);
    updateSchedBitmap(selected_courses_list)
  },[selected_courses_list,updateSchedBitmap])

  useEffect(() => {
    const filter = {
      semester: selected_semester,
      clash: clash,
      course_types_list: {
        include: [...course_types_map.entries()].filter(([type,val]) => val===threeStateSwitch.include).map(([type,val]) => type),
        exclude: [...course_types_map.entries()].filter(([type,val]) => val===threeStateSwitch.exclude).map(([type,val]) => type),
      },
      branch_list: [...branch_map.entries()].filter(([branch,val]) => val).map(([branch,val]) => branch),
      credits: {
        min: selected_credits[0],
        max: selected_credits[1],
      },
      sched_bitmap: sched_bitmap 
    }
    console.log('constructed filter:'+JSON.stringify(filter));
    onUpdate(filter);
  }, [selected_semester,clash,course_types_map,branch_map,selected_credits,sched_bitmap,onUpdate]);

  if(props.loading) {
    return (<p>Loading...</p>)
  }

  return (
      // <div className={styles.wrapper}>
        /* <div className={styles.SearchBox}>
          <Search/>
        </div>   */
        <div className={styles.ViewBox}>
          <View/>
        </div>  
      // </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selected_semester: state.finder.selected_semester,
    clash: state.finder.clash,
    course_types_map: state.finder.course_types_map,
    branch_map: state.finder.branch_map,
    selected_credits: state.finder.selected_credits,
    sched_bitmap: state.finder.sched_bitmap,
    selected_courses_list: state.finder.selected_courses_list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (filter) => dispatch(actions.fetchFilteredCourseList(filter)), 
    updateSchedBitmap: (selected_courses_list) => dispatch(actions.updateSchedBitmap(selected_courses_list)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);
