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
        const { sortBy } = this.state;
        // console.log(sortBy);
        const header = ['Id', 'User name', 'Post title', 'Views', 'Likes', 'Created at'];

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
                        headers={header}
                        list={list}
                        onChangeSorting={onChangeSorting}
                        sortBy={sortBy}
                    />
                </SGSection>

                <SGSection title="Table - with active user">
                    <Table
                        headers={header}
                        list={list}
                        activeUser="Konna"
                        onChangeSorting={onChangeSorting}
                        sortBy={sortBy}
                    />
                </SGSection>

            </SGPage>
        );
    }

    onChangeSorting = (sortBy) => {
        let value = sortBy;
        if(this.state.sortBy.indexOf('ASC') !== -1 &&
            this.state.sortBy.indexOf(sortBy) !== -1) {
            value += ' DESC';
        } else {
            value += ' ASC';
        }

        this.setState({ sortBy: value });
    }
}
