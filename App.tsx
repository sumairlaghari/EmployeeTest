import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/reducer';
import FlashMessage from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import {showMessage, hideMessage} from 'react-native-flash-message';
import AppNavigatior from './src/route';

const App = () => {
  
  const NetworkCheck = () => {
    NetInfo.addEventListener(networkState => {
      if (!networkState?.isConnected && !networkState.isInternetReachable) {
        showMessage({
          message: '',
          description: 'Please Check Your Internet Connection',
          autoHide: false,
          type: 'danger',
          hideOnPress: false,
        });
      } else {
        hideMessage();
      }
    });
  };

  useEffect(() => {
    NetworkCheck();
  }, [NetworkCheck()]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigatior/>
      </PersistGate>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
