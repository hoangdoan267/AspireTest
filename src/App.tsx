import * as React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {DebitCardScreen, SpendingLimitScreen} from './screens';
import {PRIMARY_COLOR} from './helper/Constants';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Debit Card"
      tabBarOptions={{
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: 'grey',
        // safeAreaInsets: {bottom: 0, top: 0},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Debit Card" component={DebitCardScreen} />
      <Tab.Screen name="Payment" component={HomeScreen} />
      <Tab.Screen name="Credit" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="SpendingLimit"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="SpendingLimit" component={SpendingLimitScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
