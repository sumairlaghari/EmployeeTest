import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AuthReducer from './authReducer';
import globalLoaderReducer from './globalLoaderReducer';
import statusBarColor from './statusBarColor';
import darkModeReducer from './darkModeReducer';
import languageModeReducer from './languageModeReducer';

const persistConfig1 = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userData', 'token'],
};
const persistConfig2 = {
  key: 'themeMode',
  storage: AsyncStorage,
  whitelist: ['state'],
};
const persistConfig4 = {
  key: 'languageMode',
  storage: AsyncStorage,
  whitelist: ['state'],
};

export const store = configureStore({
  reducer: {
    userData: persistReducer(persistConfig1, AuthReducer),
    themeMode: persistReducer(persistConfig2, darkModeReducer),
    languageMode: persistReducer(persistConfig4, languageModeReducer),
    loader: globalLoaderReducer,
    statusBar: statusBarColor,
  },
});
export const persistor = persistStore(store);
