import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet ,Dimensions, SectionList } from 'react-native'

import Product from './product/Product'
import ic_orderbike from '../../images/ic_orderbike.png'
import ic_menu from '../../images/ic_menu.png'
import ic_x_small from '../../images/ic_x_small.png'
import { FlatList } from 'react-native-gesture-handler';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
export class T02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectItem : "PD03",
            showPopupMenu:false,
            categories: [
                { id:1, name: 'Món nỗi bật' },
                { id:2, name: 'Yêu thích' },
                { id:3, name: 'Món gần đây' },
                { id:4, name: 'Thức uống trái cây' },
                { id:5, name: 'Machiato' },
                { id:6, name: 'Khác' },
                { id:7, name: 'Bánh ngọt'},
                { id:8, name: 'Bánh mặn' },
            ]
        }
    }
    _selectMenuPopup(item){
        switch (item.id){
            case 1:
                this.props.navigation.navigate('Music')
                break
            case 4:
                break
            default:break
        }
    }
    render() {
        const {
            header,
            h_left,
                h_img,
                hl_wp_txt,
                h_l_txtTop,
                h_l_txtBottom,
            h_right_txt,
            md_menu,
                md_title,
                md_item,
                md_item_name,
        } = styles;
        return (
            <View style = {{flex:1}}>
                <TouchableOpacity>
                    <View style = { header }>
                        <View style = { h_left}>
                            <Image tintColor='##F9B335' style = {h_img} source = { ic_orderbike }/>
                            <View style = { hl_wp_txt}>
                                <Text style = {h_l_txtTop} >Giao hàng đến</Text>
                                <Text style = {h_l_txtBottom} >Nhập địa chỉ nhận hàng</Text>
                            </View>
                        </View>
                        <Text style = {h_right_txt}>
                            THAY ĐỔI
                        </Text>
                    </View>
                </TouchableOpacity>
                <Product />

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress = { () => this.setState({ showPopupMenu: !this.state.showPopupMenu})}
                    style={styles.TouchableOpacityStyle}
                    >
                    <Image
                        tintColor="#fff"
                        source= { this.state.showPopupMenu ? ic_x_small : ic_menu }
                        style={styles.FloatingButtonStyle}
                    />
                </TouchableOpacity>
                
                {this.state.showPopupMenu &&
                <View style ={ md_menu}>
                    <Text style = { md_title}>Danh mục món</Text> 
                    <FlatList
                        height = {240}
                        keyExtractor = { item => item.id}
                        data={this.state.categories}
                        renderItem={({item}) => 
                        <TouchableOpacity
                            onPress = {() => this._selectMenuPopup(item)}
                        >
                            <View style = { md_item }>
                                <Text style= {md_item_name}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                        }
                    />
                </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    md_menu:{
        width:230,
        height:'auto',
        position:'absolute',
        start:30,
        bottom:90,
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: '#000',
        // shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        backgroundColor:'#fafafa',
        elevation: 5,
        
    },
    md_title:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:60,
        paddingLeft:15,
        backgroundColor:'#fff',
        textAlignVertical:'center',
        fontWeight:'bold',
        fontSize:16
    },
    md_item:{
        height:50,
        borderBottomWidth:0.2,
        justifyContent:'center',
        borderBottomColor:'#ababab',
    },
    md_item_name:{
        marginHorizontal:15, 
        fontSize:12,
        textAlignVertical:'center'
    },

    TouchableOpacityStyle: {
        backgroundColor:"#F9B335",
        position:'absolute',
        width: 45,
        height: 45,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        start: 30,
        bottom: 30,
    },
    
    FloatingButtonStyle: {
        resizeMode:'contain',
        width: 25,
        height: 25,
    },
    header:{
        height: 56,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#fafafa'
    },
    h_left:{
        flexDirection:'row',
    },
        h_img:{
            margin:10,
            width:30,
            height:30
        },
        hl_wp_txt:{
            justifyContent: 'center'
        },
            h_l_txtTop:{
                fontSize:14,
                fontWeight:'bold'
            },
            h_l_txtBottom:{
                fontSize:14,
            },
    h_right_txt:{
        alignSelf:'flex-end',
        fontSize:18,
        fontWeight:'300',
        color: "#F9B335",
        margin:5
    },
    
})

export default T02
