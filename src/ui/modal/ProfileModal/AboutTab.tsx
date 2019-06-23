import React from 'react';
import InputField from 'ui/form/InputField';
import Button from 'ui/form/Button/Button';
import SvgIcon from 'components/global/common/SvgIcon';


import { html } from 'components';
const bem: any = html.bem('AboutTab');

const AboutTab: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {

    return (
        <div {...props} className={bem.block()}>
            <h3>About tab</h3>
            <span>Add More Information about yourself</span>
            <div className={bem.element('grid')}>
                <div>
                    <span>Avatar URL</span>
                    <InputField />
                    <Button className="base-green">Connect</Button>
                    <img src="#" alt="#"/>
                </div>
                <div>
                    <span>Your Occupation</span>
                    <InputField placeholder="Enter Your Occupation / Specialty"/>
                </div>
                <div>
                    <span>Tags</span>
                    <div>
                        <label>Use ‘Enter’ to add a hashtag (10 max)</label>
                        <InputField placeholder="Enter Tags"/>
                        <div></div>
                    </div>
                </div>
                <div>
                    <span>Your Country</span>
                    <InputField placeholder="Enter"/>
                </div>
            </div>
        </div>
    );
}

export default AboutTab;