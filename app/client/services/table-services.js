import {
    setFilter as setFilterAction,
    setActiveRowPerPage,
    setSortBy as setSortByAction,
    setDirection as setDirectionAction,
    setActivePage as setActivePageAction,
    setFiltredList as setFiltredListAction,
    setList as setListAction,
    setMaxPage as setMaxPageAction,
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
        });
    };
}

export function setFilter(value) {
    return (dispatch, getState) => {
        const {
            list,
            activeRowPerPage,
            activePage,
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

        // Set maxPage and activePage
        const maxPage = Math.ceil(filterList.length / parseInt(activeRowPerPage, 10));

        let inRangeActivePage = activePage;

        if (activePage > maxPage) {
            inRangeActivePage = maxPage;
        }

        if (activePage < 1) {
            inRangeActivePage = 1;
        }

        dispatch(setMaxPageAction(maxPage));
        dispatch(setActivePage(inRangeActivePage));
    };
}

export function setNumberOfRow(value) {
    return (dispatch, getState) => {
        const {
            filtredList,
            activePage,
        } = getState().table;

        dispatch(setActiveRowPerPage(value));

        // SET maxPage and activePage
        const maxPage = Math.ceil(filtredList.length / parseInt(value, 10));
        dispatch(setMaxPageAction(maxPage));

        let inRangeActivePage = activePage;

        if (activePage > maxPage) {
            inRangeActivePage = maxPage;
        }

        if (activePage < 1) {
            inRangeActivePage = 1;
        }

        dispatch(setActivePage(inRangeActivePage));
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
