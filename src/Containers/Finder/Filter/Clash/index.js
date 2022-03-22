
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from './styles.module.css'

const Clash = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.p_credits}>Clash</p>
      <Switch
        checked={props.clash}
        onChange={(event) => props.onUpdate(event.target.checked)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    clash: state.finder.clash,
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
)(Clash);