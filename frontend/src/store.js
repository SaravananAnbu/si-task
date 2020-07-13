    
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import history from './history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import UserReducer from './Reducers/UserReducer';
import SideBarReducer from './Reducers/SidebarReducer';
import AlertMessages from './Reducers/AlertMessages';
import AppReducer from './Reducers/AppReducer'

const middleware = routerMiddleware(history);

export default function configureStore(preloadedState) {
    let store = null;
  
    if (module.hot) {
      let actionCreators = {};
      store = createStore(combineReducers({
            AppReducer,
            UserReducer,
            SideBarReducer,
            AlertMessages,
            router: routerReducer   
        }), compose(applyMiddleware(thunk, middleware),
        window.devToolsExtension ? window.devToolsExtension({actionCreators}) : f => f
      ));
    }
    else {
      store = createStore(
            combineReducers({
                AppReducer,
                UserReducer,
                SideBarReducer,
                AlertMessages,
                router: routerReducer   
            }), applyMiddleware(thunk, middleware));
        }
  
    return store
  }
  