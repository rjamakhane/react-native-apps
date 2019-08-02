import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { createDrawerNavigator, createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

//screens
import HomeScreen from './home';
import SettingsScreen from './settings';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#4b6584'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
    },
};

const homeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: defaultNavigationOptions
    }
);

const AppDrawerNavigator = createDrawerNavigator({
    "Home": homeStack,
    "Settings": SettingsScreen
});

export default createAppContainer(AppDrawerNavigator);