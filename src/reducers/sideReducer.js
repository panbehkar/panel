export const sideReducer = (state, action) => {
    switch (action.type) {
        case 'SIDE_TOGGLE':
            return !state;
        default:
            return state;
    };
};