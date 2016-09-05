import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import ButtonPanel from 'components/ButtonPanel';

export default class ButtonPanelGuideComponent extends React.Component {
    static state: {
        activeButton: '5';
    }

    componentWillMount() {
        this.setState({ activeButton: '5' });
    }

    render() {
        const list = ['5', '10', '15', '20'];
        const { activeButton } = this.state;
        const { onSelect } = this;

        return (
            <SGPage>

                <SGSection title="ButtonPanel - without properties">
                    <ButtonPanel
                        list={list}
                        activeButon={activeButton}
                        onSelect={onSelect}
                    />
                </SGSection>

            </SGPage>
        );
    }

    onSelect = (activeButton) => {
        this.setState({ activeButton });
    }
}
