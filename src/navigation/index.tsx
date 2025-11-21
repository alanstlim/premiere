import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';

import HomeScreen from '../views/Home';
import DetailScreen from '../views/Detail';
import WatchlistScreen from '../views/Watchlist';
import { RootStackParamList, TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const Icon = (name: string, color: string) => {
  return <IconButton icon={name} iconColor={color} />;
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#121212', borderTopWidth: 0 },
        tabBarActiveTintColor: '#00A8E8',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => Icon('home', color),
        }}
      />

      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({ color }) => Icon('bookmark', color),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
