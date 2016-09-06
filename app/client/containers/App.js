
import React from 'react';
import { connect } from 'react-redux';

// Components:
import TableContainer from 'containers/TableContainer';

@connect(s => s.app)
export default class App extends React.Component {
    render() {
        return (
            <div>
                <TableContainer />
            </div>
        );
    }
}
