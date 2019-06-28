import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/EvilIcons';
import icon_close from '../../../images/icon_close.png'
import { red } from 'ansi-colors';
export default class Account extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.header}>
                    <TouchableOpacity onPress = {()=> alert('co')} >
                        <Image  onPress = {()=> alert('co')} style={{width:25,height:25, position: 'absolute', start: 15, top: 15 }} source = { icon_close }/>
                        {/* <Icons onPress = { () =>alert('co') }  style={{ position: 'absolute', start: 15, top: 15 }} name="close" size={25} color="black" /> */}
                    </TouchableOpacity>
                    <Image
                        style={{
                            alignItems: 'center', marginVertical: 10, borderRadius: 50, alignSelf: 'center', width: 80, height: 80
                        }}
                        source={require('../../../images/banner_thecoffe_accout.jpg')}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.content_group}>
                        <View style={styles.content_group_top_left}>
                            <Text  style={{ alignSelf: 'center' }}>
                                Tổng điểm
                            </Text>
                            <Text style={styles.content_group_nuber}>
                                0
                            </Text>
                        </View>
                        <View style={{ borderLeftWidth: 2, height: 50, borderColor: '#f1f1f1' }}></View>
                        <View style={styles.content_group_top_right}>
                            <Text style={{ alignSelf: 'center' }}>
                                Bạn đã uống (ly)
                            </Text>
                            <Text style={styles.content_group_nuber}>
                                0
                            </Text>
                        </View>
                    </View>
                    <View style={styles.content_group1}>
                        <View style={styles.content_group_top_left}>
                            <Text style={{ alignSelf: 'center' }}>
                                Đến cửa hàng (lần)
                            </Text>
                            <Text style={styles.content_group_nuber}>
                                0
                            </Text>
                        </View>
                        <View style={{ borderLeftWidth: 2, height: 50, borderColor: '#f1f1f1' }}></View>
                        <View style={styles.content_group_top_right}>
                            <Text style={{ alignSelf: 'center' }}>
                                Giao hàng tận nơi (lần)
                            </Text>
                            <Text style={styles.content_group_nuber}>
                                0
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer_imformation_user}>
                        <View style={styles.group_imformation_user}>
                            <Text style={{ fontSize: 12 }}>Họ</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>[Chưa cập nhật]</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                    <View style={styles.footer_imformation_user}>
                        <View style={styles.group_imformation_user}>
                            <Text style={{ fontSize: 12 }}>Tên</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>[Chưa cập nhật]</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                    <View style={styles.footer_imformation_user}>
                        <View style={styles.group_imformation_user}>
                            <Text style={{ fontSize: 12 }}>Sinh nhật</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>[Chưa cập nhật]</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                    <View style={styles.footer_imformation_user}>
                        <View style={styles.group_imformation_user}>
                            <Text style={{ fontSize: 12 }}>Số điện thoại</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>[Chưa cập nhật]</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                    <View style={styles.footer_imformation_user}>
                        <View style={styles.group_imformation_user}>
                            <Text style={{ fontSize: 12 }}>Giới tính</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>[Chưa cập nhật]</Text>
                        </View>
                        <Icon name="chevron-right" size={15} color="black" />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
    },
    header: {
        backgroundColor: '#FFF',
        height: 100,
        marginBottom: 10,
    },
    content: {
        borderRadius: 10,
        backgroundColor: '#FFF',
        height: 160,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    content_group: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: '#f1f1f1'
    },
    content_group1: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content_group_top_left: {
        width: 150,
        height: 'auto'
    },
    content_group_top_right: {
        width: 150,
        height: 'auto'
    },
    content_group_nuber: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#F9B335',
        fontWeight: '500'
    },
    footer: {
        backgroundColor: '#FFF',
        height: 'auto',
    },
    footer_imformation_user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderColor: '#f1f1f1',
        alignItems: 'center'
    },
    group_imformation_user: {
    }
})
