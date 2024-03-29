import * as actionTypes from './actionTypes';
import axios from 'axios-server';
import { threeStateSwitch } from 'constants';

export const selectSemester = ( semester ) => {
    //console.log('selectSemester: '+semester);
    return {
        type: actionTypes.SELECT_SEMESTER,
        semester: semester
    };
};

const setSemesters = ( semesters ) => {
    //console.log('setSemesters: '+semesters);
    return {
        type: actionTypes.SET_SEMESTERS,
        semesters: semesters
    };
};

export const fetchSemesters = () => {
    //console.log('fetchSemesters');
    return dispatch => {
        dispatch( setLoading(true) );
        axios.get( '/semesters' )
            .then( response => {
               dispatch(setSemesters(response.data));
               dispatch(setLoading(false))
            } )
            .catch( error => {
                //console.log('Error fetching semesters!', error);
            } );
    };
};

const setInit = ( data ) => {
    //console.log('setInit: '+data);
    return {
        type: actionTypes.SET_INIT_DATA,
        data: data
    };
};

export const fetchInit = (semester) => {
    //console.log('fetchInit:'+semester);
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
                //console.log('Error fetching init!', error);
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
    //console.log('onUpdateCredits:'+selected_credits);
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
    // //console.log('setFilteredCourseList: '+JSON.stringify(data));
    
    return {
        type: actionTypes.SET_FILTERED_COURSE_LIST,
        data: data.map(obj => [obj.course_id,!!obj.clash])
    };
};

export const fetchFilteredCourseList = (filter) => {
    //console.log('fetchFilteredCourseList');
    return dispatch => {
        dispatch( setLoading(true) );
        axios.post('/filter', {filter:filter})
            .then( response => {
               dispatch(setFilteredCourseList(response.data));
               dispatch(setLoading(false))
            } )
            .catch( error => {
                //console.log('Error fetching filter!', error);
            } );
    };
}

export const onSelectCourse = ( courseId ) => {
    return {
        type: actionTypes.SET_SELECTED_COURSE,
        course_id: courseId
    };
};

export const onAddSelectedCourse = ( courseId ) => {
    return {
        type: actionTypes.ADD_SELECTED_COURSE,
        course_id: courseId
    };
};

export const onRemoveSelectedCourse = ( courseId ) => {
    return {
        type: actionTypes.REMOVE_SELECTED_COURSE,
        course_id: courseId
    };
};

const setSchedBitmap = ( sched_bitmap ) => {
    //console.log('setSchedBitmap'+sched_bitmap);
    return {
        type: actionTypes.SET_SCHED_BITMAP,
        sched_bitmap: sched_bitmap
    };
};

export const updateSchedBitmap = (selected_course_ids) => { 
    //console.log('updateSchedBitmap:'+selected_course_ids);
    return dispatch => {
        axios.post('/sched_bitmap', {selected_course_ids:selected_course_ids})
            .then( response => {
                //console.log('response.data'+response.data);
               dispatch(setSchedBitmap(response.data));
            } )
            .catch( error => {
                //console.log('Error fetching filter!', error);
            } );
    };
}

