
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
      {props.filtered_course
      .filter(([id,clash]) => !props.selected_courses_list.includes(id))
      .map(([id,clash]) => {
        return(<Card key={id} courseId={id} clash={clash} />)
})}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.finder.loading,
    filtered_course: state.finder.filtered_courses_list,
    selected_courses_list: state.finder.selected_courses_list
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