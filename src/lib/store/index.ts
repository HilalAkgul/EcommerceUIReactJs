import { createStore} from 'redux';

//import AsyncStorage from '@react-native-async-storage/async-storage';
// @ts-ignore

import RootReducer from '../../lib/store/reducers';


const store = createStore(RootReducer);


//sagaMiddleware.run(rootSaga);

export default store;
