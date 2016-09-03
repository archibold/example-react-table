import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';

import Input from 'components/Input';

export default class InputGuideComponent extends React.Component {

    state = {
        inputValue: '',
    }

    render() {
        const { inputValue } = this.state;
        return (
            <SGPage>

                <SGSection title="Input">
                    <Input
                        value={inputValue}
                        onInputChange={(text) => {
                            this.setState({ inputValue: text });
                        }}
                        placeholder="This is placeholder"
                    />
                </SGSection>

            </SGPage>
        );
    }
}
