import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";

const Init = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.onFetchSemesters();
  }, []);

  const onStart = () => {
    props.onInitFetch(props.selected_semester);
    navigate("/finder");
  }

  return (
    <div className={styles.root}>
      <div className={styles.col1}>
        <div className={styles.col1_name_div}>
          <p className={styles.col1_name_1}>Course</p>
          <p className={styles.col1_name_2}>Finder</p>
        </div>
        <div>
          <p>Credits</p>
        </div>
      </div>
      <div className={styles.col2}>
        <div className={styles.col2_1}>
          <div className={styles.col2_1_sem}>  
            <p className={styles.col2_1_sem_title}>Select Semester:</p>
            <div className={styles.col2_1_sem_select_div}>
              <select
                  className={styles.col2_1_sem_select}
                  value={props.selected_semester || ""}
                  onChange={(e) => props.onSelectSemester(e.target.value)}>
                  {props.semesters_list.map(option => (
                      <option key={option} value={option}>
                          {option}
                      </option>
                  ))}
              </select>
            </div>
          </div>
          <button className={styles.button} onClick={() => onStart()}>Start</button>
        </div>
      </div>
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
    onInitFetch: (semester) => dispatch(actions.fetchInit(semester)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Init);
