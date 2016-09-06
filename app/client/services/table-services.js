import {
    setFilter as setFilterAction,
    setActiveRowPerPage,
    setSortBy as setSortByAction,
    setActivePage as setActivePageAction,
} from 'actions/table-actions';

export function setFilter(value) {
    return (dispatch) => {
        dispatch(setFilterAction(value));
    };
}

export function setNumberOfRow(value) {
    return (dispatch) => {
        dispatch(setActiveRowPerPage(value));
    };
}

export function setActivePage(value) {
    return (dispatch) => {
        dispatch(setActivePageAction(value));
    };
}

export function setSortBy(value) {
    return (dispatch, getState) => {
        const { sortBy } = getState().table;
        let newSortBy = value;

        if (sortBy.indexOf('ASC') !== -1 &&
            sortBy.indexOf(newSortBy) !== -1) {
            newSortBy += ' DESC';
        } else {
            newSortBy += ' ASC';
        }

        dispatch(setSortByAction(newSortBy));
    };
}
