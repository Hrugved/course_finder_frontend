import * as actionTypes from '../actions/actionTypes';
import { setCharAt, updateObject } from 'store/utility';
import { threeStateSwitch } from 'constants';

const initialState = {
    semesters_list: [],
    selected_semester: "",
    all_courses_map: {},
    selected_courses_list: [], // [[id,clash]]
    sched_bitmap: "",
    course_types_included: "",
    course_types_excluded: "",
    course_types_map: {},
    branch_map: {},
    credits: [0,20],
    loading: false,
    clash: false
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
        course_types_map: new Map(data.course_types.map(([v, k]) => [v,k])),
        branch_map: new Map(data.branch_list.sort().map(name => [name,threeStateSwitch.neutral])),
        selected_courses_list: data.all_courses.map(i => [i.course_id,false])
    }
    console.log([...updatedState.all_courses_map.entries()]);
    console.log([...updatedState.selected_courses_list]);
    return updateObject( state, updatedState );
};

const updateCourseType = ( state, {pos,val} ) => {
    const val_include = (val===threeStateSwitch.neutral) ? '0' : (val===threeStateSwitch.include ? '1' : '0');
    const val_exclude = (val===threeStateSwitch.neutral) ? '0' : (val===threeStateSwitch.exclude ? '1' : '0');
    const updatedState = {
        course_types_included: setCharAt(state.course_types_included,pos,val_include),
        course_types_excluded: setCharAt(state.course_types_excluded,pos,val_exclude)
    }
    return updateObject( state, updatedState );
};

const setLoading = (state,{val}) => {
    return updateObject( state, {loading: val} );
}

const updateBranch = ( state, {branch,val} ) => {
    const updatedState = {
        branch_map: new Map(state.branch_map).set(branch,val)
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
        default: return state;
    }
};

export default reducer;