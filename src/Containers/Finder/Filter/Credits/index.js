import * as React from 'react';
import { connect } from "react-redux";
import * as actions from "store/actions/";
import Slider from '@mui/material/Slider';
import styles from './styles.module.css'

const Credits = (props) => {

  return (
    <div className={styles.wrapper}>
      <p className={styles.p_credits}>Credits</p>
      <div className={styles.slider_wrapper} >
        <p>{props.selected_credits[0]}</p>
        <Slider
          min={props.credits[0]}
          max={props.credits[1]}
          value={props.selected_credits}
          onChange={(e,selected_credits) => props.onUpdate(selected_credits)}
          valueLabelDisplay="auto"
          className={styles.slider}
        />
        <p>{props.selected_credits[1]}</p>
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    selected_credits: state.finder.selected_credits,
    credits: state.finder.credits
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (selected_credits) => dispatch(actions.onUpdateCredits(selected_credits)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Credits);