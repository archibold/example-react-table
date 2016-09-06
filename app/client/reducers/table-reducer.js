/**
 * table Reducer
 */

import {
    SET_FILTER,
    SET_ACTIVE_ROW_PER_PAGE,
    SET_SORT_BY,
    SET_ACTIVE_PAGE,
} from 'actions/table-actions';

export const INITIAL_STATE = {
    value: 'table reducer',

    filter: '',

    rowPerPage: ['5', '10', '15', '20'],
    activeRowPerPage: '5',

    list: [{
        Id: 1,
        'User name': 'Andrzej',
        'Post title': 'Suppa',
        Views: 13,
        Likes: 41,
        'Created at': '13-12-2014',
    },
    {
        Id: 2,
        'User name': 'Konna',
        'Post title': 'Suppa Extras',
        Views: 12,
        Likes: 44,
        'Created at': '13-12-2014',
    }],
    sortBy: 'none',
    headers: ['Id', 'User name', 'Post title', 'Views', 'Likes', 'Created at'],

    activePage: 0,
    maxPage: 5,

    activeUser: 'Andrzej',
};

export function tableReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case SET_FILTER: return setFilter(state, payload);
        case SET_ACTIVE_ROW_PER_PAGE: return setActiveRowPerPage(state, payload);
        case SET_SORT_BY: return setSortBy(state, payload);
        case SET_ACTIVE_PAGE: return setActivePage(state, payload);
        default: return state;
    }
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

function setActivePage(state, payload) {
    return {
        ...state,
        activePage: payload,
    };
}
