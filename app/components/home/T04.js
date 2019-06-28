import React, { Component } from 'react'
import { Text, StyleSheet, Alert, View, Image, TouchableOpacity } from 'react-native'

export default class T01 extends Component {
    abc() {
        Alert.alert(
            'Xác nhận',
            'Bạn có muốn đăng xuất hay không?',
            [
                // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    }
    render() {
        return (
            <View style={styles.frame}>
                <TouchableOpacity onPress = { () => this.props.navigation.navigate('Account')} >
                    <View style={styles.header}>
                        <View style={styles.frame_avata_name_user}>
                            <Image
                                style={styles.avata_user}
                                source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                            />
                            <View style={styles.frame_name_user} >
                                <Text style={styles.name_user}>
                                    Trần Đình Phú
                                </Text>
                                <Text>
                                    Thành viên mới
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingRight: 10, fontSize: 30 }}>
                                0
                            </Text>
                            <Image
                                style={styles.icon_header}
                                source={require('../../images/icon_star.png')}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.content} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home_thecoffe')}
                        style={styles.content_name_menu}>
                        <View
                            style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.icon_content}
                                source={require('../../images/icon_star_content.png')}
                            />
                            <Text>
                                The Coffee House Rrewards
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { () => this.props.navigation.navigate('Music')} style={styles.content_name_menu}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.icon_content}
                                source={require('../../images/icon_music.png')}
                            />
                            <Text>
                                Nhạc đang phát
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_name_menu}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.icon_content}
                                source={require('../../images/icon_history.png')}
                            />
                            <Text>
                                Lịch sử
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_name_menu}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.icon_content}
                                source={require('../../images/icon_pay.png')}
                            />
                            <Text style={{ marginTop: 5 }}>
                                Thanh toán
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_name_menu}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.icon_content}
                                source={require('../../images/icon_help.png')}
                            />
                            <Text>
                                Giúp đở
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_name_menu}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.icon_content}
                                source={require('../../images/icon_setting.png')}
                            />
                            <Text>
                                Cài đặt
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.abc()}>
                        <Text style={{ margin: 10, fontSize: 14 }}>
                            Đăng xuất
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        backgroundColor: '#F1F1F1F1',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 80,
        marginBottom: 10
    },
    frame_avata_name_user: {
        flexDirection: 'row',
    },
    avata_user: {
        borderRadius: 25,
        height: 50,
        width: 50,
    },
    name_avatar: {
        flexDirection: 'column',
    },
    frame_name_user: {
        marginLeft: 10,
    },
    name_user: {
        fontSize: 20,
    },
    icon_header: {
        marginTop: 10,
        borderRadius: 10,
        height: 20,
        width: 20,
    },
    content: {
        backgroundColor: '#FFF',
        height: 350,
    },
    content_name_menu: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#FFF'
    },
    icon_content: {
        marginRight: 15,
        borderRadius: 15,
        height: 20,
        width: 20,
    },
    footer: {
        backgroundColor: '#f1f1f1',
        height: 100,
    },
})
