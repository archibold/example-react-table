
import React from 'react';
import Button from 'components/Button';

export default class ButtonPanel extends React.Component {

    static propTypes = {
        activeButon: React.PropTypes.string,
        list: React.PropTypes.array,
        style: React.PropTypes.object,

        onSelect: React.PropTypes.func,
    }

    static defaultProps = {
        list: [],
        onSelect: () => {},
    }

    render() {
        const { list, activeButon, style } = this.props;
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
            <div style={style}>
                {listElement}
            </div>
        );
    }

    onClick = (buttonNumber) => {
        const { onSelect } = this.props;
        onSelect(buttonNumber);
    }
}
