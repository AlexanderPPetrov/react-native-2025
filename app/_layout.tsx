import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer'
import { client } from '@/api/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { resources } from '@/translations';
import { getLocales } from 'expo-localization';
import AppDrawer from '@/components/AppDrawer';

const lng = getLocales()?.[0]?.languageCode || 'en'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

export type DrawerScreen = {
  name: string
  options: {
    drawerLabel: string
    title: string
  }
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation()

  const drawerScreens: DrawerScreen[] = [
    {
      name: "index",
      options: {
        drawerLabel: t('home'),
        title: t('home'),
      }
    },
    {
      name: 'profile',
      options: {
        drawerLabel: t('user'),
        title: t('user'),
      }
    }
  ]

  function getDrawerScreens() {
    return drawerScreens.map(({name, options}) => {
      return <Drawer.Screen
          key={name}
          name={name}
          options={options}
        />
    })
  }


  return (
    <QueryClientProvider client={client}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer drawerContent={()=> <AppDrawer drawerScreens={drawerScreens}/>}>
            { getDrawerScreens()}
        </Drawer>
      </ThemeProvider>
    </QueryClientProvider>

  );
}
