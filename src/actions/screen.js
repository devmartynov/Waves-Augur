let timer = null;
export const SCREEN_SET_WIDTH = 'SCREEN_SET_WIDTH';

export const setWidth = width => dispatch => {
    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        dispatch({
            type: SCREEN_SET_WIDTH,
            width,
        });
    }, 100);
};
