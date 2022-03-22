import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import ThreeStateSwitch from "Components/ThreeStateSwitch"
import { useSearchParams } from "react-router-dom";
import { threeStateSwitch } from "constants";

const CourseTypes = (props) => {

  if(props.loading) {
    return (<p>Loading...</p>)
  }
  return (
    <Fragment>
      {[...props.course_types_map.keys()].map(type => {
        const bitmapPos = props.course_types_map.get(type);
        let val = threeStateSwitch.neutral; // neutral
        if(props.course_types_included[bitmapPos]==='1') val=threeStateSwitch.include; 
        else if(props.course_types_excluded[bitmapPos]==='1') val=threeStateSwitch.exclude;
        return (
          <div key={bitmapPos} className={styles.wrapper}>
            <p className={styles.name}>{type}</p>
            <ThreeStateSwitch name={bitmapPos} onChange={(val) => props.onUpdate(bitmapPos,val)} value={val}/>
          </div>
        )
      })}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.finder.loading,
    course_types_map: state.finder.course_types_map,
    course_types_included: state.finder.course_types_included,
    course_types_excluded: state.finder.course_types_excluded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (bitmapPos,val) => dispatch(actions.onUpdateFilterCourseTypes(bitmapPos,val)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseTypes);
