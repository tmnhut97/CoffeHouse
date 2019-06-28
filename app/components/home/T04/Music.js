import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
var deviceWidth = Dimensions.get('window').width;
export default class history extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.header}>
                    <TouchableOpacity >
                        <Icon style={{ position: 'absolute', start: 15, top: 15 }} name="md-arrow-back" size={25} color="black" />
                    </TouchableOpacity>
                    <Text style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15, fontSize: 15, fontWeight: 'bold' }}>
                        Nhạc đang phát
                    </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.content_music_group} >
                        <Text style={styles.name_song}>
                            Tên bài hát
                        </Text>
                        <Text style={styles.name_singer}>
                            Nhạc sỹ
                        </Text>
                        <Image style={styles.Image_music}
                            source={require('../../../images/music.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{ borderBottomWidth: 1, borderColor: '#ababab', marginHorizontal: 20, paddingHorizontal: 10, paddingVertical: 10, fontWeight: 'bold' }}>
                        Tiếp theo
                    </Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, paddingHorizontal: 10, marginVertical: 10, alignItems: 'center' }}>
                        <Image style={{ width: 35, height: 35, marginRight: 10 }}
                            source={require('../../../images/music.jpg')}
                        />
                        <View style={{ flexDirection: 'column', }}>
                            <Text>
                                cái tên bài hát tiếp theo vi dụ như là gió cứ hát
                            </Text>
                            <Text>
                                cái ca sỹ mà đang cá vi dụ như là Long Pham
                            </Text>
                        </View>
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
        height: 50,
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    content: {
        backgroundColor: '#fff',
        // marginVertical: 10
    },
    content_music_group: {
        alignSelf: 'center'
    },
    name_song: {
        textAlign: 'center',
        marginTop: 15
    },
    name_singer: {
        marginVertical: 10,
        textAlign: 'center',
        color: '#F9B335'
    },
    Image_music: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 15,
    }
})
