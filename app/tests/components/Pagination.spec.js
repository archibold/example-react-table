/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Pagination from 'components/Pagination';

describe('Pagination Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<Pagination />);
    });
});
