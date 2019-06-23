import React from 'react';
import Modal from '@material-ui/core/Modal';
import FormInput from 'components/global/form/FormInput';
import SvgIcon from 'components/global/common/SvgIcon';
import BaseButton from 'components/global/form/BaseButton';
import {
  profileSvg,
  arrowDown
} from 'ui/icon/index';
import {
  StyledContainer,
  StyledInnerBody
} from './styled';

class ProfilePopup extends React.Component {
    state: { isOpened: boolean };

    constructor (props: any) {
        super(props);

        this.state = {
            isOpened: false
        }
    }

    onClose = () => {
        this.setState({ isOpened: false });
    }

    onOpen = () => {
        this.setState({ isOpened: true });
    }

    render () {
        const { isOpened } = this.state;

        return (
            <div>
                <button onClick={this.onOpen}>open modal</button>
                <Modal open={isOpened} onClose={this.onClose}>
                    <StyledContainer>
                        <StyledInnerBody>
                            <h3>We were waiting for you!</h3>
                            <span>You was invited by Tinh Tran</span>
                            <SvgIcon icon={profileSvg}/>
                            <h3>Please Register to Continue</h3>
                            <SvgIcon icon={arrowDown}/>
                            <span>Your Nickname (Your Log In)</span>
                            <FormInput />
                            <BaseButton>Next</BaseButton>
                        </StyledInnerBody> 
                    </StyledContainer>
                </Modal>
            </div>
        )
    }
}

export default ProfilePopup;