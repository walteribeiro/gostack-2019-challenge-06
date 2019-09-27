import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.0.185', port: 9090, name: 'Github App' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
