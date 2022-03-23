import * as actionTypes from '../actions/actionTypes';
import { setCharAt, updateObject } from 'store/utility';
import { threeStateSwitch } from 'constants';

const initialState = {
    semesters_list: [],
    selected_semester: "",
    all_courses_map: {},
    selected_courses_list: [],
    sched_bitmap: "",
    course_types_map: new Map(),
    branch_map: new Map(),
    credits: [0,20],
    loading: false,
    clash: false,
    filtered_courses_list: [],  // [[id,clash]]
    searched_course_list: [], // search bar
    init_fetched: false
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
        sched_bitmap: data.sched_bitmap,
        all_courses_map: new Map(data.all_courses.map(i => [i.course_id,i])),
        course_types_map: new Map(data.course_types_list.map(name => [name,threeStateSwitch.neutral])),
        branch_map: new Map(data.branch_list.sort().map(name => [name,true])),
        filtered_courses_list: data.all_courses.map(i => [i.course_id,false]),
        init_fetched: true
    }
    // console.log('setInitData all_courses_map:'+JSON.stringify([...updatedState.all_courses_map.entries()]));
    console.log('setInitData all_courses_map:'+updatedState.all_courses_map.size);
    // console.log('setInitData, filtered_courses_list:'+JSON.stringify(updatedState.filtered_courses_list));
    console.log('setInitData, filtered_courses_list:'+updatedState.filtered_courses_list.length);
    return updateObject( state, updatedState );
};

const updateCourseType = ( state, {course_type,val} ) => {
    const updatedState = {
        course_types_map: new Map(state.course_types_map).set(course_type,val)
    }
    console.log(updatedState);
    return updateObject( state, updatedState );
};

const setLoading = (state,{val}) => {
    return updateObject( state, {loading: val} );
}

const updateBranch = ( state, {branch,include} ) => {
    const updatedState = {
        branch_map: new Map(state.branch_map).set(branch,include)
    }
    return updateObject( state, updatedState );
};

const updateCredits = (state,{credits}) => {
    return updateObject( state, {credits: credits} );
}

const updateClash = (state,{clash}) => {
    console.log(clash);
    return updateObject( state, {clash: clash} );
}

const updateFilteredCourseList = (state,{data}) => {
    console.log('updateFilteredCourseList:',data.length);
    return updateObject( state, {filtered_courses_list: data} );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_SEMESTERS: return setSemesters( state, action );
        case actionTypes.SELECT_SEMESTER: return setSelectedSemester(state,action);
        case actionTypes.SET_INIT_DATA: return setInitData(state,action);
        case actionTypes.UPDATE_COURSE_TYPE: return updateCourseType(state,action);
        case actionTypes.SET_LOADING: return setLoading(state,action);
        case actionTypes.UPDATE_BRANCH: return updateBranch(state,action);
        case actionTypes.UPDATE_CREDITS: return updateCredits(state,action);
        case actionTypes.UPDATE_CLASH: return updateClash(state,action);
        case actionTypes.SET_FILTERED_COURSE_LIST: return updateFilteredCourseList(state,action);
        default: return state;
    }
};

export default reducer;