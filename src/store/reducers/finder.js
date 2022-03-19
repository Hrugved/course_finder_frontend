import * as actionTypes from '../actions/actionTypes';
import { updateObject } from 'store/utility';

const initialState = {
    semesters_list: [],
    selected_semester: null,
    all_courses_map: null,
    selected_courses_list: [],
    sched_bitmap: null,
    course_types_included: null,
    course_types_excluded: null,
};

const setSemesters = ( state, action ) => {
    const updatedState = {
        semesters_list: action.semesters,
        selected_semester: action.semesters[0]
    }
    return updateObject( state, updatedState );
};

const setSelectedSemester = ( state, action ) => {
    const updatedState = {
        selected_semester: action.semester
    }
    return updateObject( state, updatedState );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_SEMESTERS: return setSemesters( state, action );
        case actionTypes.SELECT_SEMESTER: return setSelectedSemester(state,action);
        default: return state;
    }
};

export default reducer;