import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

SettingsScreen.navigationOptions = {
    headerTitle: "Settings"
};

export default SettingsScreen;