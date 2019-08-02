import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

//import components
import HomeComponent from './../components/home';

class HomeScreen extends React.Component {
    render() {
        console.log(this.props);
        return (
            <HomeComponent />
        );
    }
}

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: "Notes",
        headerLeft: (
            <Icon
                reverse
                name='bars'
                type='font-awesome'
                color='#4b6584'
                reverseColor="#fff"
                onPress={() => navigation.toggleDrawer()} />
        )
    };
};


export default HomeScreen;