/**
 * table Actions
 */

export const SET_FILTER = 'setFilter@table';
export const SET_ACTIVE_ROW_PER_PAGE = 'setActiveRowPerPage@table';
export const SET_SORT_BY = 'setSortBy@table';
export const SET_ACTIVE_PAGE = 'setActivePage@table';
export const SET_FILTRED_LIST = 'setFiltredList@table';
export const SET_LIST = 'setlist@table';
export const SET_MAX_PAGE = 'setMaxPage@table';
export const SET_DIRECTION = 'setDirection@table';
export const SET_NEW_ROW = 'setNewRow@table';

export function setList(value) {

    return {
        type: SET_LIST,
        payload: value,
    };
}

export function setFiltredList(value) {

    return {
        type: SET_FILTRED_LIST,
        payload: value,
    };
}
export function setMaxPage(value) {

    return {
        type: SET_MAX_PAGE,
        payload: value,
    };
}
export function setDirection(value) {

    return {
        type: SET_DIRECTION,
        payload: value,
    };
}

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

export function setNewRow(value) {

    return {
        type: SET_NEW_ROW,
        payload: value,
    };
}
