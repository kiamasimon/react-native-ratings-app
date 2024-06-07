import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import Home from './screens/Home';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import Navigator from './routes/Drawer';


SplashScreen.preventAutoHideAsync();
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  
  onLayoutRootView();

  if(appIsReady){
    return (
      <Navigator/>
    );
  }else{
    if (!appIsReady) {
      return null;
    }
  }
}
