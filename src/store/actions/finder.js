import * as actionTypes from './actionTypes';
import axios from 'axios-server';

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
        axios.get( '/semesters' )
            .then( response => {
               dispatch(setSemesters(response.data));
            } )
            .catch( error => {
                // dispatch(fetchIngredientsFailed());
                console.log('Error fetching semesters!', error);
            } );
    };
};