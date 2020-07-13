
const initialState = {
    show: false,
    collapse: false
};
  
export default function (state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_SIDEBAR_VISIBILITY':
        return {...state, collapse: !state.collapse};
      case 'CHANGE_MOBILE_SIDEBAR_VISIBILITY':
        return {...state, show: !state.show};
      default:
        return state;
    }
}