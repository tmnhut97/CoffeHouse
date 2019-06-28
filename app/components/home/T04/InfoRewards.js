import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/EvilIcons';
import Index from '../home/TabtopT02/index'
export default class T02 extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icons style={{ marginLeft: 20 }} name="close" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 60 }}>The Conffee House Rewards</Text>
                </View>
                <View style={styles.content}>
                    <ImageBackground
                        style={styles.content_baner}
                        source={require('../../Image/banner_thecoffe_accout.jpg')}>
                        <View style={styles.content_name_user}>
                            <Text style={styles.name_user}>Trần Đình Phú</Text>
                            <Text style={styles.name_lever}>Thanh viên mới</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.content_gruop_lever}>
                        <View style={{ marginHorizontal: 70, marginVertical: 10 }}>
                            <Image
                                style={styles.icon_header}
                                source={require('../../Image/icon_star.png')}
                            />
                            <Text style={{ marginLeft: 10 }} >
                                0
                            </Text>
                        </View>
                        <View style={{ marginHorizontal: 70, marginVertical: 10 }}>
                            <Icon style={{ marginLeft: 15 }} name="gift" size={30} color="#F9B335" />
                            <Text>
                                0 Coupon
                            </Text>
                        </View>
                    </View>
                    <View style={styles.content_groud_item}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="history" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}> Lịch sử tích sao</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                    <View style={styles.content_groud_item}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star-o" size={15} color="black" />
                            <Text style={{ marginLeft: 5 }}> Làm thế nào để tích sao</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Index />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    header: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 50,
        width: '100%'
    },
    icon_header: {
        borderRadius: 20,
        height: 30,
        width: 30,
    },
    content: {
        margin: 10,
        backgroundColor: '#f1f1f1',
        height: 'auto',
        borderRadius: 20,
    },
    content_baner: {
        borderRadius: 20,
        height: 120,
        marginBottom: 10,
    },
    content_name_user: {
        marginTop: 60,
        marginLeft: 20,
    },
    content_groud_item: {
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderColor: '#f1f1f1',
        paddingHorizontal: 20,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name_user: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '400'
    },
    name_lever: {
        color: '#FFF',
        fontSize: 13
    },
    content_gruop_lever: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        backgroundColor: '#f1f1f1',
        margin: 10,
        height: '100%',
        // borderRadius: 20,
    }
})
