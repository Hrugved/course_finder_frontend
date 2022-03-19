import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";

const Finder = (props) => {

  return (
    <div className={styles.root}>
      Finder
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
)(Finder);
