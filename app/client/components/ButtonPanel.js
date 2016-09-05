
import React from 'react';
import Button from 'components/Button';

export default class ButtonPanel extends React.Component {

    static propTypes = {
        activeButon: React.PropTypes.string,
        list: React.PropTypes.array,

        onSelect: React.PropTypes.func,
    }

    static defaultProps = {
        list: [],
    }

    render() {
        const { list, activeButon } = this.props;
        const { onClick } = this;

        const listElement = list.map((object, index) => {
            return (
                <Button
                    key={index}
                    text={object}
                    onClick={() => {
                        onClick(object);
                    }}
                    isActive={ activeButon === object }
                />
            );
        });

        return (
            <div>
                {listElement}
            </div>
        );
    }

    onClick = (buttonNumber) => {
        const { onSelect } = this.props;
        onSelect(buttonNumber);
    }
}
