import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import Table from 'components/Table';

export default class TableGuideComponent extends React.Component {
    static state: {
        sortBy: 'none';
        newRow: {};
    }

    componentWillMount() {
        this.setState({ sortBy: 'none', newRow: {} });
    }

    render() {
        const { onChangeSorting, onChangeNewRow } = this;
        const { sortBy, direction, newRow } = this.state;

        const list = [
            {
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
                Likes: 41,
                'Created at': '13-12-2014',
            },
        ];

        return (
            <SGPage>

                <SGSection title="Table - with active user">
                    <Table
                        list={list}
                        direction={direction}
                        activeUser="Konna"
                        onChangeSorting={onChangeSorting}
                        sortBy={sortBy}
                    />
                </SGSection>

                <SGSection title="Table - add new row">
                    <Table
                        list={list}
                        direction={direction}
                        onChangeSorting={onChangeSorting}
                        sortBy={sortBy}
                        newRow={newRow}
                        onChangeNewRow={onChangeNewRow}
                    />
                </SGSection>

            </SGPage>
        );
    }

    onChangeSorting = (sortBy, direction) => {
        this.setState({ sortBy, direction });
    }

    onChangeNewRow = (newRow) => {
        this.setState({ newRow });
    }
}
