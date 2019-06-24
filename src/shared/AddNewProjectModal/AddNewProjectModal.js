import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'ui/modal/Modal';
import Form from 'ui/form/Form';
import InputField from 'ui/form/InputField';
import TextField from 'ui/form/TextField';
import Button from 'ui/form/Button';
import FormProgress from 'shared/FormProgress';
import DateField from 'ui/form/DateField';
import TagsField from 'ui/form/TagsField';
import ConnectImageField from 'ui/form/ConnectImageField';

import {html} from 'components';

import './AddNewProjectModal.scss';

const bem = html.bem('AddNewProjectModal');
const FORM_ID = 'AddNewProject';
const STEPS_COUNT = 5;

export default class AddNewProjectModal extends React.PureComponent {

    static propTypes = {

    };

    constructor() {
        super(...arguments);

        this.state = {
          step: 1,
        };

        this.onBackStep = this.onBackStep.bind(this);
        this.onNextStep = this.onNextStep.bind(this);
    }

    render() {
        return (
            <Modal
                {...this.props.modalProps}
                className={bem.block()}
            >
                <div className={bem.element('form-progress')}>
                    <FormProgress
                        stepCount={STEPS_COUNT}
                        step={this.state.step}
                    />
                </div>
                <div className={bem.element('form')}>
                    <Form
                        action={''}
                        formId={FORM_ID}
                        layout={'horizontal'}
                        layoutProps={{
                            cols: [3, 9]
                        }}
                    >
                        <div className={bem.element('title')}>
                            {__('You Are Creating New Project')}
                        </div>
                        <div className={bem.element('form-inner')}>
                            {this.state.step === 1 && (
                                <>
                                    {this.renderStepOne()}
                                </>
                            )}
                            {this.state.step === 2 && (
                                <>
                                    {this.renderStepTwo()}
                                </>
                            )}
                        </div>
                    </Form>
                </div>
                <div className={'buttons'}>
                    {this.state.step !== STEPS_COUNT && (
                        <Button
                            label={__('Next')}
                            onClick={this.onNextStep}
                        />
                    )}
                    {this.state.step !== 1 && (
                        <Button
                            label={__('Back')}
                            onClick={this.onBackStep}
                        />
                    )}
                </div>
            </Modal>
        );
    }

    onNextStep() {
        this.setState({
            step: this.state.step + 1
        })
    }

    onBackStep() {
        this.setState({
            step: this.state.step - 1
        })
    }


    renderStepOne() {
        return (
            <>
                <div className={bem.element('sub-title')}>
                    {__('You Need To Give All Necessary Information About It')}
                </div>
                <span className={bem(
                    bem.element('new-project-icon'),
                    'Icon Icon__new-project_lg')}
                />
                <InputField
                    label={__('Project Name')}
                    attribute={'name'}
                    placeholder={__('Enter Your Project Name')}
                />
                <TextField
                    label={__('Srort Description')}
                    attribute={'shortDescription'}
                    placeholder={__('Description')}
                />
                <div className={bem.element('deadlines')}>
                    <DateField
                        className={bem.element('deadlines-field')}
                        attribute='crowdfunding'
                        label={__('Crowdfunding')}
                    />
                    <DateField
                        className={bem.element('deadlines-field')}
                        attribute='grantDecision'
                        label={__('Grant decision')}
                    />
                </div>
                <div className={bem.element('tags')}>
                    <TagsField
                        attribute='hashtags'
                        label='Use ‘Enter’ to add a hashtag'
                        placeholder={__('Enter Tags')}
                    />
                </div>
                <div className={bem.element('logo')}>
                    <ConnectImageField
                        attribute='logoUrl'
                        placeholder={__('Enter URL')}
                    />
                </div>

            </>
        );
    }

    renderStepTwo() {
        return (
            <>
                <div className={bem.element('sub-title')}>
                    {__('123')}
                </div>
                123
            </>
        );
    }
}
