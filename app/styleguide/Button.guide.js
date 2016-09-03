import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import Button from 'components/Button';

export default class ButtonGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="Button with onClick">
                    <Button
                        text="Click me"
                        onClick={
                            () => {
                                console.log('clicked');
                            }} />
                </SGSection>

                <SGSection title="disabled Button">
                    <Button
                        text="Disabled Button"
                        disabled
                        onClick={() => {
                            console.log('clicked');
                        }} />
                </SGSection>

                <SGSection title="active Button">
                    <Button text="Active button" isActive/>
                </SGSection>
            </SGPage>
        );
    }
}
