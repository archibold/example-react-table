
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

        const buttonsElement = [...Array(maxPage).keys()].map((number, index) => {
            const buttonNumber = (number + 1);
            return (
                <Button
                    key={index}
                    text={buttonNumber.toString()}
                    onClick={() => {
                        onSelect(buttonNumber);
                    }}
                    isActive={ activePage === buttonNumber }
                />
            );
        });

        return (
            <div>
                <Button text="«" onClick={() => {
                    onSelect(1);
                }}
                disabled={activePage === 1}
                />
                <Button text="‹" onClick={() => {
                    const selectedPage = (activePage-1 > 0)? activePage-1 : 1;
                    onSelect(selectedPage);
                }}
                disabled={activePage === 1}
                />

                {buttonsElement}

                <Button text="›" onClick={() => {
                    const selectedPage = (activePage+1 < maxPage)? activePage+1 : maxPage;
                    onSelect(selectedPage);
                }}
                disabled={activePage === maxPage}
                />
                <Button text="»" onClick={() => {
                    onSelect(maxPage);
                }}
                disabled={activePage === maxPage}
                />
            </div>
        );
    }

    onSelect = (selectedPage) => {
        const { onSelect } = this.props;
        onSelect(selectedPage);
    }
}
