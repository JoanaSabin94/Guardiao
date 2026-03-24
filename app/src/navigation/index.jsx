/**
 * Guardião — Root Navigator
 *
 * Stack structure:
 *   Onboarding (shown once, on first launch)
 *     └── Splash → Welcome → Calls → Messages → Permissions → Preferences
 *
 *   App (main experience, tab-based)
 *     ├── Tab: Home
 *     ├── Tab: Verificar
 *     └── Tab: Proteção
 *
 *   Detail screens (push over tabs)
 *     ├── CallDetail
 *     ├── MessageDetail
 *     └── NumberDetail
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ── Onboarding ──────────────────────────────────────────────────────────────
import SplashScreen      from '../screens/onboarding/SplashScreen';
import WelcomeScreen     from '../screens/onboarding/WelcomeScreen';
import CallsVPScreen     from '../screens/onboarding/CallsVPScreen';
import MessagesVPScreen  from '../screens/onboarding/MessagesVPScreen';
import PermissionsScreen from '../screens/onboarding/PermissionsScreen';
import PreferencesScreen from '../screens/onboarding/PreferencesScreen';

// ── App tabs ─────────────────────────────────────────────────────────────────
import HomeScreen      from '../screens/app/HomeScreen';
import VerificarScreen from '../screens/app/VerificarScreen';
import ProtecaoScreen  from '../screens/app/ProtecaoScreen';
import PerfilScreen    from '../screens/app/PerfilScreen';

// ── Detail screens ───────────────────────────────────────────────────────────
import CallDetailScreen    from '../screens/detail/CallDetailScreen';
import MessageDetailScreen from '../screens/detail/MessageDetailScreen';
import NumberDetailScreen  from '../screens/detail/NumberDetailScreen';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: 'rgba(0,0,0,0.08)',
        },
        tabBarActiveTintColor:   '#0A0A0A',
        tabBarInactiveTintColor: '#AAAAAA',
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tab.Screen name="Home"      component={HomeScreen} />
      <Tab.Screen name="Verificar" component={VerificarScreen} />
      <Tab.Screen name="Proteção"  component={ProtecaoScreen} />
      <Tab.Screen name="Perfil"    component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Onboarding */}
        <Stack.Screen name="Splash"       component={SplashScreen} />
        <Stack.Screen name="Welcome"      component={WelcomeScreen} />
        <Stack.Screen name="CallsVP"      component={CallsVPScreen} />
        <Stack.Screen name="MessagesVP"   component={MessagesVPScreen} />
        <Stack.Screen name="Permissions"  component={PermissionsScreen} />
        <Stack.Screen name="Preferences"  component={PreferencesScreen} />

        {/* Main app */}
        <Stack.Screen name="App" component={AppTabs} />

        {/* Detail (push over tabs) */}
        <Stack.Screen name="CallDetail"    component={CallDetailScreen} />
        <Stack.Screen name="MessageDetail" component={MessageDetailScreen} />
        <Stack.Screen name="NumberDetail"  component={NumberDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
