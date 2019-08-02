import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class Editor extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Editor</Text>
            </View>
        );
    }
}

Editor.navigationOptions = {
    headerTitle: "Settings"
};

export default Editor;