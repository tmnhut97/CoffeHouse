import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Dimensions,
    TouchableOpacity,   
    Image,  
    StyleSheet,
    FlatList,
} from 'react-native'
import ic_notification from '../../images/ic_notification.png'
import ic_gift from '../../images/ic_gift.png'
import ic_user from '../../images/user.png'
import ic_order from '../../images/ic_order.png'
import ic_qr_code from '../../images/ic_qr_code.png'
import { ScrollView } from 'react-native-gesture-handler';
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export class T01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_fh: [
                {
                    id:1,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:2,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:3,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:4,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:5,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:6,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                }
            ],
            data_fv: [
                {
                    id:1,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    title:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:2,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    title:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:3,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    title:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:4,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    title:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:5,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    title:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                },
                {
                    id:6,
                    uri: 'http://theme.hstatic.net/1000075078/1000406606/14/share_fb_home.png?v=5326',
                    title:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến',
                    content:'Chào ngày mới bằng việc pha chế “những tách mộng mơ” đã trở thành một thói quen bình thường với những Barista tại Nhà Signature.Thường thì các bạn sẽ tiến'
                }
            ],
        }
    }
    render() {
        
        const {
            header,
                h_left,
                h_img_user,
                h_txt_login,
                h_img_user_notify,
            body_top,
                bt_wp,
                wp_img,
                    bt_img,
                bt_txt,
            txt_title_fh,
            fh,
                fh_item,
                    fh_wp_img,
                    fh_img,
                    fh_content,
            txt_title_fv,
            fv,
                fv_item,
                    fv_img,
                    fv_title,
                    fv_content,
        } = styles
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style = { header }>
                        <View style={ h_left} >
                            <TouchableOpacity >
                                <Image  style={ h_img_user } source={ ic_user }/>
                            </TouchableOpacity>
                            <Text style={ h_txt_login}>Đăng nhập</Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={ h_img_user_notify} source={ ic_notification }/>
                        </TouchableOpacity>
                    </View>
                    <View style = {body_top}>
                        <View style = { bt_wp}>
                            <TouchableOpacity >
                                <View style = {wp_img}>
                                    <Image tintColor='white' style={ bt_img } source={ ic_qr_code }/>
                                </View>
                                <Text style={ bt_txt }>Tích điểm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = { bt_wp}>
                            <TouchableOpacity >
                                <View style = {wp_img}>
                                    <Image tintColor='white' style={ bt_img } source={ ic_order }/>
                                </View>
                                <Text style={ bt_txt }>Đặt hàng</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = { bt_wp}>
                            <TouchableOpacity >
                                <View style = {wp_img}>
                                    <Image tintColor='white' style={ bt_img } source={ ic_gift }/>
                                </View>
                                <Text style={ bt_txt }>Reward</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style = {txt_title_fh}>Dành cho bạn</Text>
                    <FlatList
                        style = {fh}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor= {(item) => item.id}
                        horizontal={true}
                        data={this.state.data_fh}
                        renderItem={({item}) => 
                            <TouchableOpacity>
                                <View style = {fh_item}>
                                    <View style = {fh_wp_img} >
                                        <Image style = {fh_img} source={{uri: item.uri}} />
                                    </View>
                                    <Text 
                                        numberOfLines={2}
                                        ellipsizeMode="tail" 
                                        style = {fh_content}
                                        >
                                        {item.content}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                    <Text style = {txt_title_fv}>Tin tức</Text>
                    <FlatList
                        style = {fv}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor= {(item) => item.id}
                        horizontal={false}
                        data={this.state.data_fv}
                        renderItem={({item}) => 
                            <TouchableOpacity>
                                <View style = {fv_item}>
                                    <Image style = {fv_img} source={{uri: item.uri}} />
                                    <Text 
                                        numberOfLines={2}
                                        ellipsizeMode="tail" 
                                        style = {fv_title}
                                        >
                                        {item.title}
                                    </Text>
                                    <Text 
                                        numberOfLines={2}
                                        ellipsizeMode="tail" 
                                        style = {fv_content}
                                        >
                                        {item.content}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
    header:{
        width: deviceWidth,
        height:56,
        backgroundColor:"#fff",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
        h_left:{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            margin:10,
        },
            h_img_user:{
            width:30,
            height:30 
            },
            h_txt_login:{
                height: 35,
                borderColor:"#F9B335",
                borderWidth:1, 
                borderRadius:15,
                textAlignVertical:'center',
                marginLeft:10,
                paddingHorizontal: 15,
                fontSize:20,
                fontWeight:"400",
                color:'#F9B335'
            },
        h_img_user_notify:{
            width:30,
            height:30,
            marginRight: 10
        },
        
    body_top:{
        height:120,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15
    },
        bt_wp:{
            height:120,
            backgroundColor:'#fff',
            borderRadius:10,
            width: (deviceWidth - 40)/3,
            alignItems:'center',
            padding:15,
        },
        wp_img:{
            height:60,
            width:60,
            backgroundColor:'#F9B335' ,
            borderRadius:30,
            justifyContent:'center', 
            alignItems:'center',
        },
            bt_img:{
                width:27,
                height:27,
            },
        bt_txt:{
            fontWeight:'500',
            marginTop:10,
            textAlign:'center'
        },

    txt_title_fh:{
        marginBottom:10, marginLeft:15,
        fontWeight:'bold',
        fontSize:16
    },
    fh:{
        marginHorizontal:15,
    },
        fh_item:{
            marginRight:10
        },
            fh_wp_img:{
            },
            fh_img:{
                width:240,
                height:120,
                borderTopLeftRadius: 10,
                borderTopRightRadius:10
            },
            fh_content:{
                height:60,
                width:240,
                padding:10,
                alignSelf:'flex-start',
                backgroundColor:'white',
                borderBottomLeftRadius:10,
                borderBottomRightRadius:10,
                fontSize:14,
                fontWeight:'600'
            },
    txt_title_fv:{
        marginVertical: 10, 
        marginBottom:10, 
        marginHorizontal:15,
        fontWeight:'bold',
        fontSize:16
    },
    fv:{
        marginHorizontal:15,
    },
    fv_item:{
        backgroundColor:'white',
        marginBottom:10,
        borderRadius:10,
    },
        fv_img:{
            width:deviceWidth-20,
            height:210,
            alignSelf:'center',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
        },
        fv_title:{
            marginVertical:10,
            marginHorizontal:15,
            fontWeight:'bold',
            fontSize:16

        },
        fv_content:{
            marginBottom:10, 
            marginHorizontal:15,
            fontWeight:'300',
            fontSize:16
        },

})


export default T01
