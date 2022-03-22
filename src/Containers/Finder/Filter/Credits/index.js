import * as React from 'react';
import { connect } from "react-redux";
import * as actions from "store/actions/";
import Slider from '@mui/material/Slider';
import styles from './styles.module.css'

const Credits = (props) => {
  // const [value, setValue] = React.useState([0, 20]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className={styles.wrapper}>
      <p className={styles.p_credits}>Credits</p>
      <div className={styles.slider_wrapper} >
        <p>{props.credits[0]}</p>
        <Slider
          min={0}
          max={20}
          value={props.credits}
          onChange={(e,credits) => props.onUpdate(credits)}
          valueLabelDisplay="auto"
          className={styles.slider}
        />
        <p>{props.credits[1]}</p>
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    credits: state.finder.credits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (credits) => dispatch(actions.onUpdateCredits(credits)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Credits);