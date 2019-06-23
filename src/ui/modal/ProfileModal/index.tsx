import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from 'ui/form/Button/Button';

import AboutTab from './AboutTab';
import LinksTab from './LinksTab';
import WaitingTab from './WaitingTab';
import ProgressLine from './ProgressLine';

import { html } from 'components';
const bem: any = html.bem('ProfileModal');

import './ProfileModal.scss';

class ProfilePopup extends React.Component {
    state: { 
        isOpened: boolean;
        currentTab: number;
    };
    tabs: React.ReactNode[];

    constructor (props: any) {
        super(props);

        this.state = {
            isOpened: false,
            currentTab: 0
        }

        this.tabs = [
            <WaitingTab className={bem.element('body-inner')}/>,
            <LinksTab className={bem.element('body-inner')}/>,
            <AboutTab className={bem.element('body-inner')}/>
        ];
    }

    onClose = () => {
        this.setState({ isOpened: false });
    }

    onOpen = () => {
        this.setState({ isOpened: true });
    }

    onNext = (tab: number) => { 
        if (tab < this.tabs.length) this.setState({ currentTab: tab })
    }
    onBack = (tab: number) => {
        if (tab >= 0) this.setState({ currentTab: tab });
    }

    render () {
        const { onBack, onNext, onClose, onOpen } = this;
        const { isOpened, currentTab } = this.state;

        const visibleTab: React.ReactNode = this.tabs
            .filter((tab: React.ReactNode, tabIndex: number) => tabIndex === currentTab)[0];

        return (
            <div className={bem.block()}>
                <button onClick={onOpen}>open modal</button>
                <Modal open={isOpened} onClose={onClose}>
                    <div className={bem.element('body')}>
                        <ProgressLine index={currentTab}/>
                        {visibleTab}
                        <div className={bem.element('buttons-cont')}>
                            {currentTab > 0 ? (
                                <Button className="base-green outline" onClick={() => onBack(currentTab - 1)}>Back</Button>
                            ) : <div></div>}
                            <Button className="base-green" onClick={() => onNext(currentTab + 1)}>Next</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ProfilePopup;