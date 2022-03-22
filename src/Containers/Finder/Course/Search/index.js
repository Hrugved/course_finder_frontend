
import * as React from 'react';
import { connect } from "react-redux";
import * as actions from "store/actions/";
import styles from './styles.module.css'

const Search = (props) => {

  return (
    <div className={styles.wrapper}>
      search
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
)(Search);