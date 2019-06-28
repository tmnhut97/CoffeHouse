import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/EvilIcons';
import { red } from 'ansi-colors';
export default class history extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.header}>
                    <TouchableOpacity >
                        <Icons style={{ position: 'absolute', start: 15, top: 15 }} name="close" size={25} color="black" />
                    </TouchableOpacity>
                    <Text style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15, fontSize: 15, fontWeight: 'bold' }}>
                        Lịch sử đơn hàng
                    </Text>
                </View>
                <View style={styles.content}>
                    <View >
                        <Text>bạn chưa có đơn hàng nào</Text>
                    </View>
                    <Text style={styles.button_text}>Đặt hàng ngay</Text>
                </View>
                <View style={styles.footer}>
                </View>
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
