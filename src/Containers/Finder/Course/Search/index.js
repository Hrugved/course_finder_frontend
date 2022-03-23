
// import React,{useEffect} from 'react';
// import { connect } from "react-redux";
// import * as actions from "store/actions/";
// import styles from './styles.module.css'

// const Search = (props) => {

//   useEffect(() => {
    
//   }, [props.filtered_course_list]);

//   return (
//     <div className={styles.wrapper}>
//       search
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     filtered_course_list: state.finder.filtered_course_list,
//     searched_course_list: state.finder.searched_course_list
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpdate: (searched_course_list) => dispatch(actions.onUpdateSearchedCourseList(searched_course_list)), 
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Search);