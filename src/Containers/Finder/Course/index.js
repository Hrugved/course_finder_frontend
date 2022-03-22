import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from "./styles.module.css";
import Search from "./Search"
import View from "./View";

const Filter = (props) => {

  return (
      <div className={styles.wrapper}>
        <div className={styles.SearchBox}>
          <Search/>
        </div>  
        <div className={styles.ViewBox}>
          <View/>
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
    onInitFetch: () => dispatch(actions.fetchInit()), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
