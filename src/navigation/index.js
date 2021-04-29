import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Users from '../screens/Users';
import { Login } from '../screens/Login';
import Gallery from '../screens/Gallery';
import { TapBar } from '../components/TapBar';

const RootStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabScreens = () => (
    <Tabs.Navigator
        headerMode="none"
        initialRouteName="Users"
        tabBar={({ navigation, state, descriptors }) => <TapBar {...{ navigation, state, descriptors }} />}
    >
        <RootStack.Screen name="Users" component={Users} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Gallery" component={Gallery} />
    </Tabs.Navigator>
);

const Navigation = () => (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName="TabScreens" headerMode="none">
            <RootStack.Screen name="TabScreens" component={TabScreens} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default Navigation;
