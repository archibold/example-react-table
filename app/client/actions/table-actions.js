/**
 * table Actions
 */

export const SET_FILTER = 'setFilter@table';
export const SET_ACTIVE_ROW_PER_PAGE = 'setActiveRowPerPage@table';
export const SET_SORT_BY = 'setSortBy@table';
export const SET_ACTIVE_PAGE = 'setActivePage@table';

export function setFilter(value) {

    return {
        type: SET_FILTER,
        payload: value,
    };
}

export function setActiveRowPerPage(value) {

    return {
        type: SET_ACTIVE_ROW_PER_PAGE,
        payload: value,
    };
}

export function setSortBy(value) {

    return {
        type: SET_SORT_BY,
        payload: value,
    };
}

export function setActivePage(value) {

    return {
        type: SET_ACTIVE_PAGE,
        payload: value,
    };
}
