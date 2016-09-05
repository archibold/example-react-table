import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import Pagination from 'components/Pagination';

export default class PaginationGuideComponent extends React.Component {
    static state: {
        selectedPage: 1;
    }

    componentWillMount() {
        this.setState({ selectedPage: 1 });
    }

    render() {
        const { onSelect } = this;
        const { selectedPage } = this.state;

        return (
            <SGPage>

                <SGSection title="Pagination - without properties">
                    <Pagination activePage={selectedPage} maxPage={5} onSelect={onSelect}/>
                </SGSection>

            </SGPage>
        );
    }

    onSelect = (selectedPage) => {
        this.setState({ selectedPage });
    }
}
