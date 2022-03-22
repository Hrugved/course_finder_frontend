
import * as React from 'react';
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from './styles.module.css'
import Card from './Card'

const View = (props) => {

  if(props.loading) {
    return (<p>Loading...</p>)
  }

  return (
    <div className={styles.wrapper}>
      {props.selected_course.map(([id,clash]) => {
        // console.log("id:"+id+" clash:" + clash);
        return(<Card key={id} courseId={id} clash={clash} />)
})}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.finder.loading,
    selected_course: state.finder.selected_courses_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (Clash) => dispatch(actions.onUpdateClash(Clash)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);