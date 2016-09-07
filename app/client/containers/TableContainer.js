
import React from 'react';
import { connect } from 'react-redux';

// Components:
import Input from 'components/Input';
import ButtonPanel from 'components/ButtonPanel';
import Button from 'components/Button';
import Table from 'components/Table';
import Pagination from 'components/Pagination';

// Services:
import {
    setFilter,
    setNumberOfRow,
    setSortBy,
    setActivePage,
    init,
    setNewRow,
    addNewRowToTable,
} from 'services/table-services';

@connect(state => {
    const {
        filter,
        rowPerPage,
        activeRowPerPage,
        filtredList,
        maxPage,
        sortBy,
        direction,
        activePage,
        activeUser,
        newRow,
    } = state.table;

    // SET PAGES
    const startAt = ((activePage - 1) * parseInt(activeRowPerPage, 10));
    const endAt = startAt + parseInt(activeRowPerPage, 10);

    // SLICE
    const newList = filtredList.slice(startAt, endAt);

    return {
        filter,
        rowPerPage,
        activeRowPerPage,
        list: newList,
        sortBy,
        direction,
        activePage,
        maxPage,
        activeUser,
        newRow,
    };
})
export default class TableContainer extends React.Component {

    static propTypes = {
        filter: React.PropTypes.string,
        rowPerPage: React.PropTypes.array,
        activeRowPerPage: React.PropTypes.string,
        list: React.PropTypes.array,
        sortBy: React.PropTypes.string,
        direction: React.PropTypes.string,
        activePage: React.PropTypes.number,
        maxPage: React.PropTypes.number,
        activeUser: React.PropTypes.string,
        newRow: React.PropTypes.object,

        dispatch: React.PropTypes.func,
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(init());
    }

    render() {
        const {
            filter,
            rowPerPage,
            activeRowPerPage,
            list,
            sortBy,
            direction,
            activePage,
            maxPage,
            activeUser,
            newRow,
        } = this.props;

        const {
            onSelectPage,
            onInputChange,
            onSelectRow,
            onChangeSorting,
            onAddNewRow,
        } = this;

        return (
            <div>
                <div style={STYLES.header}>
                    <Input
                        value={filter}
                        placeholder="filter"
                        onInputChange={onInputChange}
                        />
                    <ButtonPanel
                        style={STYLES.rowButtonPanel}
                        list={rowPerPage}
                        activeButon={activeRowPerPage}
                        onSelect={onSelectRow}
                    />
                </div>
                <div style={STYLES.content}>
                    <Table
                        list={list}
                        sortBy={sortBy}
                        newRow={newRow}
                        direction={direction}
                        activeUser={activeUser}
                        onChangeSorting={onChangeSorting}
                    />
                </div>
                <div style={STYLES.footer}>
                    <Pagination
                        maxPage={maxPage}
                        activePage={activePage}
                        onSelect={onSelectPage}
                    />
                </div>
                <div>
                    <Button
                        text={ newRow === null ? 'Add New Row' : 'Accept' }
                        onClick={onAddNewRow}
                        style={STYLES.addNewRowButton}
                    />
                </div>
            </div>
        );
    }

    onSelectPage = (page) => {
        const { dispatch } = this.props;
        dispatch(setActivePage(page));
    }

    onInputChange = (text) => {
        const { dispatch } = this.props;
        dispatch(setFilter(text));
    }

    onSelectRow = (row) => {
        const { dispatch } = this.props;
        dispatch(setNumberOfRow(row));
    }

    onChangeSorting = (sortBy, direction) => {
        const { dispatch } = this.props;
        dispatch(setSortBy(sortBy, direction));
    }

    onAddNewRow = () => {
        const { dispatch, newRow } = this.props;
        if (newRow === null) {
            dispatch(setNewRow({}));
        } else {
            console.log('add to table and finish it!');
            dispatch(addNewRowToTable());
            dispatch(setNewRow(null));
        }
    }
}

const STYLES = {
    header: {
        width: '926px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    rowButtonPanel: {
        float: 'right',
    },
    content: {
        display: 'flex',
    },
    footer: {
        display: 'flex',
    },
    addNewRowButton: {
        marginTop: '5px',
    },
};
