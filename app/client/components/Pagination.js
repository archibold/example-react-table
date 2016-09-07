
import React from 'react';
import Button from 'components/Button';

export default class Pagination extends React.Component {

    static propTypes = {
        maxPage: React.PropTypes.number,
        activePage: React.PropTypes.number,

        onSelect: React.PropTypes.func,
    }

    static defaultProps = {
        activePage: 1,
        onSelect: () => {},
    }

    render() {
        const { maxPage, activePage } = this.props;
        const { onSelect } = this;

        if (maxPage === 0 || maxPage === 1) {
            return null;
        }

        let inRangeActivePage = activePage;

        if (activePage > maxPage) {
            inRangeActivePage = maxPage;
        }

        if (activePage < 1) {
            inRangeActivePage = 1;
        }

        const buttonsElement = [...Array(maxPage).keys()].map((number, index) => {
            const buttonNumber = (number + 1);
            return (
                <Button
                    key={index}
                    text={buttonNumber.toString()}
                    onClick={() => {
                        onSelect(buttonNumber);
                    }}
                    isActive={ inRangeActivePage === buttonNumber }
                />
            );
        });

        return (
            <div>
                <Button text="«" onClick={() => {
                    onSelect(1);
                }}
                disabled={inRangeActivePage === 1}
                />
                <Button text="‹" onClick={() => {
                    const selectedPage = (
                        inRangeActivePage-1 > 0)? inRangeActivePage-1 : 1;
                    onSelect(selectedPage);
                }}
                disabled={inRangeActivePage === 1}
                />

                {buttonsElement}

                <Button text="›" onClick={() => {
                    const selectedPage = (
                        inRangeActivePage+1 < maxPage) ? inRangeActivePage+1 : maxPage;
                    onSelect(selectedPage);
                }}
                disabled={inRangeActivePage === maxPage}
                />
                <Button text="»" onClick={() => {
                    onSelect(maxPage);
                }}
                disabled={inRangeActivePage === maxPage}
                />
            </div>
        );
    }

    onSelect = (selectedPage) => {
        const { onSelect } = this.props;
        onSelect(selectedPage);
    }
}
