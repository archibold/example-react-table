/**
 * table Reducer
 */

import {
    SET_FILTER,
    SET_ACTIVE_ROW_PER_PAGE,
    SET_SORT_BY,
    SET_ACTIVE_PAGE,
    SET_FILTRED_LIST,
    SET_LIST,
    SET_MAX_PAGE,
    SET_DIRECTION,
} from 'actions/table-actions';

export const INITIAL_STATE = {
    value: 'table reducer',

    filter: '',

    rowPerPage: ['5', '10', '15', '20'],
    activeRowPerPage: '5',

    list: [],
    filtredList: [],
    sortBy: '',
    direction: 'DESC',

    activePage: 1,
    maxPage: 1,
    activeUser: 'Andrzej',
};

export function tableReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case SET_FILTER: return setFilter(state, payload);
        case SET_FILTRED_LIST: return setFiltredList(state, payload);
        case SET_LIST: return setlist(state, payload);
        case SET_ACTIVE_ROW_PER_PAGE: return setActiveRowPerPage(state, payload);
        case SET_SORT_BY: return setSortBy(state, payload);
        case SET_DIRECTION: return setDirection(state, payload);
        case SET_ACTIVE_PAGE: return setActivePage(state, payload);
        case SET_MAX_PAGE: return setMaxPage(state, payload);
        default: return state;
    }
}

function setFiltredList(state, payload) {
    return {
        ...state,
        filtredList: payload,
    };
}

function setlist(state, payload) {
    return {
        ...state,
        list: payload,
    };
}

function setFilter(state, payload) {
    return {
        ...state,
        filter: payload,
    };
}

function setActiveRowPerPage(state, payload) {
    return {
        ...state,
        activeRowPerPage: payload,
    };
}

function setSortBy(state, payload) {
    return {
        ...state,
        sortBy: payload,
    };
}
function setDirection(state, payload) {
    return {
        ...state,
        direction: payload,
    };
}

function setActivePage(state, payload) {
    return {
        ...state,
        activePage: payload,
    };
}

function setMaxPage(state, payload) {
    return {
        ...state,
        maxPage: payload,
    };
}
