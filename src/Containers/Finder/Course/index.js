import ThreeStateSwitch from "Components/ThreeStateSwitch";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
// import Search from "./Search"
import View from "./View";
import { threeStateSwitch } from "constants";

const Course = (props) => {

  const {selected_semester,clash,course_types_map,branch_map,credits,sched_bitmap,onUpdate} = props;

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
        min: credits[0],
        max: credits[1],
      },
      sched_bitmap: sched_bitmap
    }
    console.log('constructed filter:'+JSON.stringify(filter));
    // onUpdate(filter);
  }, [selected_semester,clash,course_types_map,branch_map,credits,sched_bitmap,onUpdate]);

  if(props.loading) {
    return (<p>Loading...</p>)
  }

  return (
      <div className={styles.wrapper}>
        <div className={styles.SearchBox}>
          {/* <Search/> */}
        </div>  
        <div className={styles.ViewBox}>
          <View/>
        </div>  
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selected_semester: state.finder.selected_semester,
    clash: state.finder.clash,
    course_types_map: state.finder.course_types_map,
    branch_map: state.finder.branch_map,
    credits: state.finder.credits,
    sched_bitmap: state.finder.sched_bitmap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (filter) => dispatch(actions.onUpdateFilterCourseTypes(filter)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);
