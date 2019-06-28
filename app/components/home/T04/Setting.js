import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/EvilIcons';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
export default class accout extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.header}>
                    <TouchableOpacity >
                        <Icons style={{ position: 'absolute', start: 15, top: 15 }} name="close" size={25} color="black" />
                    </TouchableOpacity>
                    <Text style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15, fontSize: 15, fontWeight: 'bold' }}>
                        Cài đặt
                    </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.content_groud_item}>
                        <View style={{ flexDirection: 'row' }}>
                            <Iconss name="home-outline" size={30} color="black" />
                            <Text style={{ paddingLeft: 10, marginTop: 5 }}> Làm thế nào để tích sao</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                    <View style={styles.content_groud_item}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="briefcase" size={30} color="black" />
                            <Text style={{ paddingLeft: 10, marginTop: 5 }}> Làm thế nào để tích sao</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                </View>
                <Text style={{ padding: 10 }}> v4.2.5</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        // backgroundColor: 'red'
    },
    header: {
        backgroundColor: '#FFF',
        height: 50,
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    content: {
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    content_groud_item: {
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#ababab',
        paddingHorizontal: 20,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})
