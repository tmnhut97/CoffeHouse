import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export class Tabtop1 extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <Image style={{ width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginVertical: 20 }}
                    source={require('../../../images/coffe.jpg')}
                />
                <Text style={{ textAlign: 'center' }}> Tham gia nhiệm vụ đẻ tích điểm nhanh hơn và rất nhiều phần quà bất ngờ</Text>
                <View style={styles.btn_sigin} >
                    <TouchableOpacity>
                        <Text style={styles.txt_sigin}>
                            Đăng nhập để tiếp tục
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        marginHorizontal: 10
    },
    btn_sigin: {
        backgroundColor: '#F9B335',
        height: 35,
        borderRadius: 8,
        marginTop: 30
    },
    txt_sigin: {
        textAlign: 'center',
        paddingTop: 8,
        color: '#FFF'
    }
})

export default Tabtop1
