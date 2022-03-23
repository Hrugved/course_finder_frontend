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
    console.log('fetchInit:'+semester);
    return dispatch => {
        axios.get('/init', {
            params: {
                semester: semester
            }
          })
            .then( response => {
               dispatch(setInit(response.data));
            } )
            .catch( error => {
                // dispatch(fetchIngredientsFailed());
                console.log('Error fetching init!', error);
            } );
    };
};

export const onUpdateFilterCourseTypes = ( course_type, val ) => {
    return {
        type: actionTypes.UPDATE_COURSE_TYPE,
        course_type,
        val
    };
};

export const onUpdateFilterBranch = ( branch, include ) => {
    return {
        type: actionTypes.UPDATE_BRANCH,
        branch,
        include
    };
};

export const onUpdateCredits = ( selected_credits ) => {
    console.log('onUpdateCredits:'+selected_credits);
    return {
        type: actionTypes.UPDATE_CREDITS,
        selected_credits
    };
};

export const onUpdateClash = ( Clash ) => {
    return {
        type: actionTypes.UPDATE_CLASH,
        clash: Clash
    };
};

const setLoading = ( val ) => {
    return {
        type: actionTypes.SET_LOADING,
        val: val
    };
};

const setFilteredCourseList = ( data ) => {
    // console.log('setFilteredCourseList: '+JSON.stringify(data));
    
    return {
        type: actionTypes.SET_FILTERED_COURSE_LIST,
        data: data.map(obj => [obj.course_id,!!obj.clash])
    };
};

export const fetchFilteredCourseList = (filter) => {
    console.log('fetchFilteredCourseList');
    return dispatch => {
        dispatch( setLoading(true) );
        axios.post('/filter', {filter:filter})
            .then( response => {
               dispatch(setFilteredCourseList(response.data));
               dispatch(setLoading(false))
            } )
            .catch( error => {
                // dispatch(fetchIngredientsFailed());
                console.log('Error fetching filter!', error);
            } );
    };
}