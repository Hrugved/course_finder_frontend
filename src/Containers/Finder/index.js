import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import Filter from './Filter'
import Course from './Course'
import { useNavigate } from "react-router-dom";
import Info from "./Info";
import Selected from "./selected";

const Finder = (props) => {
  const navigate = useNavigate();

  const {selected_semester} = props
  useEffect(() => {
    //console.log('selected_semester:'+selected_semester);
    if(selected_semester==="") {
      navigate("/");
    }
  }, [selected_semester,navigate]);

  if(!props.init_fetched) {
    return (<p>Loading...</p>)
  }

  return (
    <div className={styles.root}>
      <div className={styles.gridBox}>
        <div className={styles.filter}>
          <Filter/>
        </div>
        <div className={styles.course}>
          <Course />
        </div>
        <div className={styles.info}>
          <Info />
        </div>
        <div className={styles.selected}>
          <Selected />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    init_fetched: state.finder.init_fetched,
    selected_semester: state.finder.selected_semester
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onInitFetch: () => dispatch(actions.fetchInit()), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finder);
