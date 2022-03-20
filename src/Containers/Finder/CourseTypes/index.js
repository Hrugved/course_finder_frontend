import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import ThreeStateSwitch from "Components/ThreeStateSwitch"
import { useSearchParams } from "react-router-dom";

const CourseTypes = (props) => {
 

  const [value, setValue] = useState(1);
  const onChange = (val) => {
    setValue(val);
  }

  return (
    <div>
      <ThreeStateSwitch onChange={onChange} value={value}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    semesters_list: state.finder.semesters_list,
    selected_semester: state.finder.selected_semester
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSemesters: () => dispatch(actions.fetchSemesters()), 
    onSelectSemester: (semester) => dispatch(actions.selectSemester(semester)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseTypes);
