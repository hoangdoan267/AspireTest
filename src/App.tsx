/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {DebitCardScreen, SpendingLimitScreen} from './screens';
import {PRIMARY_COLOR, COLOR_BLUE} from './helper/Constants';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {TabBar} from './component';

const BlankScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('./assets/images/logo.png')}
        style={{height: 64, width: 64}}
      />
    </View>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Debit Card"
      tabBar={(props) => <TabBar {...props} />}
      tabBarOptions={{
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen name="Home" component={BlankScreen} />
      <Tab.Screen name="Debit Card" component={DebitCardScreen} />
      <Tab.Screen name="Payment" component={BlankScreen} />
      <Tab.Screen name="Credit" component={BlankScreen} />
      <Tab.Screen name="Profile" component={BlankScreen} />
    </Tab.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor={COLOR_BLUE} />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen
              name="SpendingLimit"
              component={SpendingLimitScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
