import { createSwitchNavigator } from 'react-navigation'

import LoggedInNavigator from './loggedIn';
import drawerNavigator from './drawer';

export const getRootNavigator = () => createSwitchNavigator(
    {
        Drawer: {
            screen: drawerNavigator
        }
    },
    {
        initialRouteName: 'Drawer'
    }
);