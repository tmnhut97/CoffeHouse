import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export class Taptop2 extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <Image style={styles.image}
                    source={require('../../../images/coffe.jpg')}
                />
                <Text style={{ textAlign: 'center' }}>
                    Chức năng đăng nhập đang cập nhật
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    frame: {
        marginHorizontal: 10
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginVertical: 20
    }
})

export default Taptop2
