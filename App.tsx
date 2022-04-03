import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

export default function App() {
  const isLoaded = useCachedResources();
  const colorScheme = useColorScheme();

  if(isLoaded){
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme}/>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  }else{
    return null;
  }
}

