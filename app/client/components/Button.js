
import React from 'react';

export default class Button extends React.Component {

    static propTypes = {
        text: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        isActive: React.PropTypes.bool,
        style: React.PropTypes.object,

        onClick: React.PropTypes.func,
    }

    static defaultProps = {
        onClick: () => {},
    }

    render() {
        const {
            text,
            disabled,
            isActive,
            style,
            onClick,
        } = this.props;

        let buttonStyle = STYLES.button;

        if (isActive) {
            buttonStyle = {
                ...buttonStyle,
                ...STYLES.activeButton,
            };
        }

        if (disabled) {
            buttonStyle = {
                ...buttonStyle,
                ...STYLES.disabledButton,
            };
        }
        buttonStyle = {
            ...buttonStyle,
            ...style,
        };

        return (
            <button style={buttonStyle} disabled={disabled} onClick={onClick}>
                {text}
            </button>
        );
    }
}

const STYLES = {
    button: {
        height: '50px',
        background: '#2980b9',
        color: 'white',
        border: 0,
        fontSize: '15px',

        // outline: 'none',
    },
    activeButton: {
        background: '#3498db',
    },
    disabledButton: {
        opacity: 0.8,
    },
};
