const defaultState = {
   userList: [], 
   userListCount: 0,
   userDetail: {},
};
  
const AppReducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'GET_USERS_LIST': 
            return Object.assign({}, state, {
                userList: action.rows,
				userListCount: action.count,
            });

        case 'GET_USER_DETAIL': 
            return Object.assign({}, state, {
                userDetail : action.userData,
            });

        default:
            return state;
    }
};

export default AppReducer;
  