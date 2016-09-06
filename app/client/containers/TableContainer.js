
import React from 'react';
import { connect } from 'react-redux';

// Components:
import Input from 'components/Input';
import ButtonPanel from 'components/ButtonPanel';
import Table from 'components/Table';
import Pagination from 'components/Pagination';

// Services:
import {
    setFilter,
    setNumberOfRow,
    setSortBy,
    setActivePage,
} from 'services/table-services';

@connect(state => {
    const {
        filter,
        rowPerPage,
        activeRowPerPage,
        list,
        sortBy,
        headers,
        activePage,
        maxPage,
        activeUser,
    } = state.table;

    return {
        filter,
        rowPerPage,
        activeRowPerPage,
        list,
        sortBy,
        headers,
        activePage,
        maxPage,
        activeUser,
    };
})
export default class TableContainer extends React.Component {

    static propTypes = {
        filter: React.PropTypes.string,
        rowPerPage: React.PropTypes.array,
        activeRowPerPage: React.PropTypes.string,
        list: React.PropTypes.array,
        sortBy: React.PropTypes.string,
        headers: React.PropTypes.array,
        activePage: React.PropTypes.number,
        maxPage: React.PropTypes.number,
        activeUser: React.PropTypes.string,

        dispatch: React.PropTypes.func,
    }

    render() {
        const {
            filter,
            rowPerPage,
            activeRowPerPage,
            list,
            sortBy,
            headers,
            activePage,
            maxPage,
            activeUser,
        } = this.props;

        const {
            onSelectPage,
            onInputChange,
            onSelectRow,
            onChangeSorting,
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
                        headers={headers}
                        list={list}
                        sortBy={sortBy}
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

    onChangeSorting = (sortBy) => {
        const { dispatch } = this.props;
        dispatch(setSortBy(sortBy));
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
};
