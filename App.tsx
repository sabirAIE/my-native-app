import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';

import Navigation from './navigation';

export default function App() {
  return (
    <>
      <Navigation/>
      <StatusBar style="auto" />
    </>
  );
}

