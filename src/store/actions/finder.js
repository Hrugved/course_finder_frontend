import * as actionTypes from './actionTypes';
import axios from 'axios-server';
import { threeStateSwitch } from 'constants';

export const selectSemester = ( semester ) => {
    console.log('selectSemester: '+semester);
    return {
        type: actionTypes.SELECT_SEMESTER,
        semester: semester
    };
};

const setSemesters = ( semesters ) => {
    console.log('setSemesters: '+semesters);
    return {
        type: actionTypes.SET_SEMESTERS,
        semesters: semesters
    };
};

export const fetchSemesters = () => {
    console.log('fetchSemesters');
    return dispatch => {
        dispatch( setLoading(true) );
        axios.get( '/semesters' )
            .then( response => {
               dispatch(setSemesters(response.data));
               dispatch(setLoading(false))
            } )
            .catch( error => {
                // dispatch(fetchIngredientsFailed());
                console.log('Error fetching semesters!', error);
            } );
    };
};

const setInit = ( data ) => {
    console.log('setInit: '+data);
    return {
        type: actionTypes.SET_INIT_DATA,
        data: data
    };
};

export const fetchInit = (semester) => {
    console.log('fetchInit');
    return dispatch => {
        dispatch( setLoading(true) );
        axios.get('/init', {
            params: {
                semester: semester
            }
          })
            .then( response => {
               dispatch(setInit(response.data));
               dispatch(setLoading(false))
            } )
            .catch( error => {
                // dispatch(fetchIngredientsFailed());
                console.log('Error fetching init!', error);
            } );
    };
};

export const onUpdateFilterCourseTypes = ( pos, val ) => {
    return {
        type: actionTypes.UPDATE_COURSE_TYPE,
        pos: pos,
        val: val
    };
};

const setLoading = ( val ) => {
    return {
        type: actionTypes.SET_LOADING,
        val: val
    };
};