import {
    setFilter as setFilterAction,
    setActiveRowPerPage,
    setSortBy as setSortByAction,
    setDirection as setDirectionAction,
    setActivePage as setActivePageAction,
    setFiltredList as setFiltredListAction,
    setList as setListAction,
    setMaxPage as setMaxPageAction,
    setNewRow as setNewRowAction,
} from 'actions/table-actions';

import request from 'superagent';

export function init() {
    return (dispatch) => {
        request.get('/dataset')
        .end((err, response) => {
            let restLIST = [];

            if (!err) {
                restLIST = JSON.parse(response.text).list;
            }

            dispatch(setListAction(restLIST));
            dispatch(setFiltredListAction(restLIST));
            dispatch(setPaginator());
        });
    };
}

export function setFilter(value) {
    return (dispatch, getState) => {
        const {
            list,
            sortBy,
            direction,
        } = getState().table;

        dispatch(setFilterAction(value));

        // Filtering
        const filterList = filterBy('User name', value, list);

        // Sorting
        let sortedList = filterList;

        if (sortBy) {
            sortedList = sortByFunc(sortBy, direction, filterList);
        }
        dispatch(setFiltredListAction(sortedList));
        dispatch(setPaginator());
    };
}

export function setNumberOfRow(value) {
    return (dispatch) => {
        dispatch(setActiveRowPerPage(value));
        dispatch(setPaginator());
    };
}

export function setActivePage(value) {
    return (dispatch) => {
        dispatch(setActivePageAction(value));
    };
}

export function setSortBy(value, directionValue) {
    return (dispatch, getState) => {
        const {
            filtredList,
        } = getState().table;

        const sortedList = sortByFunc(value, directionValue, filtredList);

        dispatch(setSortByAction(value));
        dispatch(setDirectionAction(directionValue));
        dispatch(setFiltredListAction(sortedList));
    };
}

export function setNewRow(newRow) {
    return (dispatch) => {
        dispatch(setNewRowAction(newRow));
    };
}

export function addNewRowToTable() {
    return (dispatch, getState) => {
        const {
            newRow,
            list,
        } = getState().table;

        let newList = [];
        newList.push(newRow);
        newList = newList.concat(list);

        let newListFlitred = [];
        newListFlitred.push(newRow);
        newListFlitred = newListFlitred.concat(list);

        dispatch(setListAction(newList));
        dispatch(setFiltredListAction(newListFlitred));

        dispatch(setNewRowAction(null));
    };
}

function setPaginator() {
    return (dispatch, getState) => {
        const {
            filtredList,
            activePage,
            activeRowPerPage,
        } = getState().table;
        const maxPage = Math.ceil(filtredList.length / parseInt(activeRowPerPage, 10));
        dispatch(setMaxPageAction(maxPage));

        let inRangeActivePage = activePage;

        if (activePage > maxPage) {
            inRangeActivePage = maxPage;
        }

        if (activePage < 1) {
            inRangeActivePage = 1;
        }

        setMaxPageAction(maxPage);
        dispatch(setActivePage(inRangeActivePage));
    };
}

function filterBy(name, filter, list) {
    return list.filter((element) =>(
        element[name].indexOf(filter) !== -1)
    );
}

function sortByFunc(name, direction, list) {
    return list.sort(function (a, b) {
        let nameA = a[name];
        let nameB = b[name];

        if (typeof nameA === 'string') {
            nameA=a[name].toLowerCase();
        }

        if (typeof nameB === 'string') {
            nameB=b[name].toLowerCase();
        }

        if (nameA < nameB) {
            return (direction !== 'ASC')? -1 : 1;
        }
        if (nameA > nameB) {
            return (direction !== 'DESC')? -1 : 1;
        }
        return 0;
    });
}
