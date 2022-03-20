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
    course_types_map: null
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

const setInitData = ( state, {data} ) => {
    const updatedState = {
        course_types_included: data.course_types_included,
        course_types_excluded: data.course_types_excluded,
        sched_bitmap: data.sched_bitmap,
        all_courses_map: new Map(data.all_courses.map(i => [i.course_id,i])),
        course_types_map: new Map(data.course_types_map.map(([v, k]) => [v,k]))
    }
    return updateObject( state, updatedState );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_SEMESTERS: return setSemesters( state, action );
        case actionTypes.SELECT_SEMESTER: return setSelectedSemester(state,action);
        case actionTypes.SET_INIT_DATA: return setInitData(state,action);
        default: return state;
    }
};

export default reducer;