
import React from 'react';
import Button from 'components/Button';

export default class Table extends React.Component {

    static propTypes = {
        headers: React.PropTypes.array,
        list: React.PropTypes.array,
        sortBy: React.PropTypes.string,

        activeUser: React.PropTypes.string,
        onChangeSorting: React.PropTypes.func,
    }

    static defaultProps = {
        headers: [],
        list: [],
        sortBy: '',
        onChangeSorting: () => {},
    }

    render() {
        const { headers, list, sortBy, activeUser } = this.props;
        const { onChangeSorting } = this;

        const headerElement = headers.map((headerName, index) => {
            let value = headerName;
            if(sortBy.indexOf(headerName) !== -1) {
                if(sortBy.indexOf('ASC') !== -1) {
                    value += ' ▼';
                } else if(sortBy.indexOf('DESC') !== -1) {
                    value += ' ▲';
                }
            }

            return (
                <th key={index}>
                    <Button style={STYLES.headerButton} text={value} onClick={() => {
                        onChangeSorting(headerName);
                    }}/>
                </th>
            );
        });

        const listElement = list.map((row, index) => {
            const rowElement = headers.map((headerName, rowIndex) => {
                return (
                    <td key={rowIndex}>
                        {row[headerName]}
                    </td>
                );
            });

            const isActive = row['User name'] === activeUser;

            return (
                 <tr key={index} style={isActive? STYLES.activeRow: null}>
                     {rowElement}
                 </tr>
            );
        });

        return (
            <table>
                <thead>
                  <tr>
                    {headerElement}
                  </tr>
                </thead>
                <tbody>
                    {listElement}
                </tbody>
            </table>
        );
    }

    onChangeSorting = (headerName) => {
        const { onChangeSorting } = this.props;
        onChangeSorting(headerName);
    }
}

const STYLES = {
    headerButton: {
        width: '150px',
    },
    activeRow: {
        background: '#f1c40f',
    },
};
