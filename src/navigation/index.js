import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Users from '../screens/Users';
import Login from '../screens/Login';
import Gallery from '../screens/Gallery';

import { TapBar } from '../components/TapBar';

const RootStack = createStackNavigator();
const SecureStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const SecureScreens = () => (
    <SecureStack.Navigator initialRouteName="Login" headerMode="none">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Gallery" component={Gallery} />
    </SecureStack.Navigator>
);

const TabScreens = () => (
    <Tabs.Navigator
        headerMode="none"
        initialRouteName="Users"
        tabBar={({ navigation, state, descriptors }) => <TapBar {...{ navigation, state, descriptors }} />}
    >
        <Tabs.Screen name="Users" component={Users} />
        <Tabs.Screen name="Login" component={SecureScreens} />
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
