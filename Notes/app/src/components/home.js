import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    columns: {
        width: "50%",
        flexDirection: "column"
    },
    noteItem: {
        backgroundColor: '#a5b1c2',
        margin: 4,
        padding: 10,
        minHeight: 120,
        borderRadius: 10
    }
})

const Home = () => {
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.columns} >
                        <View style={styles.noteItem} >
                            <Text > Hello</Text>
                        </View>
                        <View style={styles.noteItem} >
                            <Text style={{ color: '#fff' }}> Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                        </View>
                        <View style={styles.noteItem} >
                            <Text > Hello</Text>
                        </View>
                    </View>
                    <View style={styles.columns} >
                        <View style={styles.noteItem} >
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                        </View>
                        <View style={styles.noteItem} >
                            <Text > Hello</Text>
                        </View>
                        <View style={styles.noteItem} >
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                        </View>
                        <View style={styles.noteItem} >
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                            <Text > Hello</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ActionButton buttonColor="#4b6584">
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
                    <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
                    <Icon name="md-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}



export default Home;