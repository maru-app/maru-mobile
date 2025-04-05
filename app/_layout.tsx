import './global.css';

import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Pretendard: require('@/assets/fonts/PretendardVariable.ttf'),
    KCCDodamdodam: require('@/assets/fonts/KCCDodamdodam.otf')
  });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      if (fontsLoaded) setAppIsReady(true);
    }

    prepareApp();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <Stack />
    </View>
  );
}
