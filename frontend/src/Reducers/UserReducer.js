import isEmpty from 'lodash/isEmpty';

const defaultState = {
    user: {},
    isAuth: false,
    userDetails: {},
};
  
  const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER': 
            return Object.assign({}, state, {
                isAuth: !isEmpty(action.user),
                user: action.user
            });

        case 'USER_DETAILS': 
            return Object.assign({}, state, {
                userDetails: action.userDetails,
            });

        default:
        return state;
    }
};

export default UserReducer;
  