import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'ui/modal/Modal';
import Form from 'ui/form/Form';
import InputField from 'ui/form/InputField';
import TextField from 'ui/form/TextField';
import Button from 'ui/form/Button';

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

        console.log(11, this.state);

        return (
            <Modal
                {...this.props.modalProps}
                className={bem.block()}
            >
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
                    attribute={'a'}
                    placeholder={__('Enter Your Project Name')}
                />
                <TextField
                    label={__('Srort Description')}
                    attribute={'b'}
                    placeholder={__('Description')}
                />
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
