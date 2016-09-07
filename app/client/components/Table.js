
import React from 'react';
import Button from 'components/Button';

export default class Table extends React.Component {

    static propTypes = {
        list: React.PropTypes.array,
        sortBy: React.PropTypes.string,
        direction: React.PropTypes.string,
        activeUser: React.PropTypes.string,
        newRow: React.PropTypes.object,

        onChangeSorting: React.PropTypes.func,
        onChangeNewRow: React.PropTypes.func,
    }

    static defaultProps = {
        headers: [],
        list: [],
        sortBy: '',
        newRow: null,

        onChangeSorting: () => {},
        onChangeNewRow: () => {},
    }

    render() {
        const {
            list,
            sortBy,
            direction,
            activeUser,
            newRow,
        } = this.props;

        const {
            onChangeSorting,
            onChangeNewRow,
        } = this;

        const headers = ['Id', 'User name', 'Post title', 'Views', 'Likes', 'Created at'];

        const headerElement = headers.map((headerName, index) => {
            let value = headerName;
            if(sortBy.indexOf(headerName) !== -1) {
                if(direction.indexOf('ASC') !== -1) {
                    value += ' ▼';
                } else if(direction.indexOf('DESC') !== -1) {
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
                let elementStyle={};

                if (['Id', 'Views', 'Likes'].indexOf(headerName) > -1) {
                    elementStyle={
                        textAlign: 'right',
                    };
                }

                if (['Created at'].indexOf(headerName) > -1) {
                    elementStyle={
                        textAlign: 'center',
                    };
                }

                return (
                    <td style={elementStyle} key={rowIndex}>
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

        let newRowElement = null;
        if (newRow !== null) {
            newRowElement = headers.map((headerName, rowIndex) => {
                let elementType = 'text';
                if (['Id', 'Views', 'Likes'].indexOf(headerName) > -1) {
                    elementType= 'number';
                }

                return (
                    <td key={rowIndex}>
                        <input
                            value={newRow[headerName]}
                            type={elementType}
                            onChange={(e) => {
                                onChangeNewRow(headerName, e.target.value);
                            }}
                        />
                    </td>
                );
            });
        }

        return (
            <table>
                <thead>
                  <tr>
                    {headerElement}
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        {newRowElement}
                    </tr>
                    {listElement}
                </tbody>
            </table>
        );
    }

    onChangeSorting = (headerName) => {
        const { onChangeSorting, sortBy, direction } = this.props;
        let newDirection = direction;
        if (headerName === sortBy) {
            newDirection = (direction === 'ASC')? 'DESC' : 'ASC';
        }
        onChangeSorting(headerName, newDirection);
    }

    onChangeNewRow = (headerName, value) => {
        const {
            onChangeNewRow,
            newRow,
        } = this.props;

        const updatedNewRow = newRow;
        updatedNewRow[headerName] = value;
        onChangeNewRow(updatedNewRow);
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
