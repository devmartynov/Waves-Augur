import {SCREEN_SET_WIDTH} from 'actions/screen';
import ScreenSizeEnum from 'enums/ScreenSizeEnum';

const initialState = {
    width: 1280,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SCREEN_SET_WIDTH:
            return {
                ...state,
                width: action.width,
            };
    }

    return state;
};

export const getDeviceType = state => ScreenSizeEnum.getDeviceBySize(state.screen.width);
export const isPhone = state => getDeviceType(state) === ScreenSizeEnum.PHONE;
export const isTablet = state => getDeviceType(state) === ScreenSizeEnum.TABLET;
export const isDesktop = state => getDeviceType(state) === ScreenSizeEnum.DESKTOP;