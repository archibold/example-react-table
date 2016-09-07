import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import Table from 'components/Table';

export default class TableGuideComponent extends React.Component {
    static state: {
        sortBy: 'none';
    }

    componentWillMount() {
        this.setState({ sortBy: 'none' });
    }

    render() {
        const { onChangeSorting } = this;
        const { sortBy, direction } = this.state;

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

                <SGSection title="Table">
                    <Table
                        list={list}
                        direction={direction}
                        onChangeSorting={onChangeSorting}
                        sortBy={sortBy}
                    />
                </SGSection>

                <SGSection title="Table - with active user">
                    <Table
                        list={list}
                        direction={direction}
                        activeUser="Konna"
                        onChangeSorting={onChangeSorting}
                        sortBy={sortBy}
                    />
                </SGSection>

            </SGPage>
        );
    }

    onChangeSorting = (sortBy, direction) => {
        this.setState({ sortBy, direction });
    }
}
