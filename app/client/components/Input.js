
import React from 'react';

export default class Input extends React.Component {

    static propTypes = {
        value: React.PropTypes.string,
        placeholder: React.PropTypes.string,

        onInputChange: React.PropTypes.func,
    }

    static defaultProps = {
        onInputChange: () => {},
    }

    render() {
        const { value, placeholder } = this.props;
        const { onChange } = this;

        return (
            <div>
                <input
                    style={STYLES.input}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }

    onChange = (e) => {
        const { onInputChange } = this.props;
        onInputChange(e.target.value);
    }
}

const STYLES = {
    input: {
        height: '50px',
        padding: '0 5px',
        background: 'white',
        color: '#2980b9',
        fontSize: '15px',
        outline: 'none',
    },
};
