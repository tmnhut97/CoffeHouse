import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'

import DetailProduct from './DetailProduct'
import ic_add from '../../../images/ic_add.png'


export class PD01 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data_fp:[
                {
                    id:1,
                    uri:'https://product.hstatic.net/1000075078/product/tra_dao_cam_sa_on_bg_master.jpg',
                    name:'Trà sơ ri thanh long',
                    type:'Nhỏ',
                    price:'35.000 đ'
                },
                {
                    id:2,
                    uri:'https://product.hstatic.net/1000075078/product/tra_dao_cam_sa_on_bg_master.jpg',
                    name:'Trà hoa đậu biết MACCHIATO',
                    type:'Nhỏ',
                    price:'35.000 đ'
                },
                {
                    id:3,
                    uri:'https://product.hstatic.net/1000075078/product/tra_dao_cam_sa_on_bg_master.jpg',
                    name:'Trà hoa đậu biết MACCHIATO',
                    type:'Nhỏ',
                    price:'35.000 đ'
                },
                {
                    id:4,
                    uri:'https://stc.shopiness.vn/deal/2018/03/28/5/3/5/d/1522213599086_540.png',
                    name:'Trà hoa đậu biết MACCHIATO',
                    type:'Nhỏ',
                    price:'35.000 đ'
                },
                {
                    id:5,
                    uri:'https://stc.shopiness.vn/deal/2018/03/28/5/3/5/d/1522213599086_540.png',
                    name:'Trà hoa đậu biết MACCHIATO',
                    type:'Nhỏ',
                    price:'35.000 đ'
                },
                {
                    id:6,
                    uri:'https://stc.shopiness.vn/deal/2018/03/28/5/3/5/d/1522213599086_540.png',
                    name:'Trà hoa đậu biết MACCHIATO',
                    type:'Nhỏ',
                    price:'35.000 đ'
                },
                {
                    id:7,
                    uri:'https://stc.shopiness.vn/deal/2018/03/28/5/3/5/d/1522213599086_540.png',
                    name:'Trà hoa đậu biết MACCHIATO',
                    type:'Nhỏ',
                    price:'35.000 đ'
                }
            ]
        }
    }
    
    render() {
        const {
            fp,
            fp_item,
                fp_img,
                fp_name,
                fp_type,
                fp_wp_footer,
                fp_price,
                fp_ic_add,
        } = styles
        return (
            <View style ={{backgroundColor:'#fafafa'}}>
                <FlatList
                    style = {fp}
                    showsVerticalScrollIndicator={false}
                    keyExtractor= {(item) => item.id}
                    horizontal={false}
                    numColumns={2}
                    data={this.state.data_fp}
                    renderItem={({item}) => 
                        <View 
                            style = {fp_item}
                        >
                            <TouchableOpacity 
                                onPress = {() => this.refs.refDetail._detail(item)}
                            >
                                <Image style = {fp_img} source={{uri: item.uri}} />
                                <Text 
                                    numberOfLines={2}
                                    ellipsizeMode="tail" 
                                    style = {fp_name}
                                    >
                                    {item.name}
                                </Text>
                                <Text 
                                    numberOfLines={1}
                                    ellipsizeMode="tail" 
                                    style = {fp_type}
                                    >
                                    {item.type}
                                </Text>
                                <View style = {fp_wp_footer}>
                                    <Text style = {fp_price}>
                                        {item.price}
                                    </Text>
                                    <TouchableOpacity>
                                        <Image style = {fp_ic_add} tintColor='yellow' source = { ic_add } />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
                <DetailProduct 
                    ref = {'refDetail'}
                />
            </View>
        )
    }
}

var deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({

    fp:{
        marginVertical:10,
        marginHorizontal: 5,
    },
    fp_item:{
        marginHorizontal: 5,
        marginVertical:10,
        backgroundColor:'#fff',
        borderRadius:10
    },
        fp_img:{
            width: (deviceWidth - 30)/2,
            height:200,
            borderTopLeftRadius: 10,
            borderTopRightRadius :10
        },
        fp_name:{
            height:35,
            width: (deviceWidth - 30)/2,
            paddingHorizontal:10,
            fontWeight:'bold',
            fontSize: 14
        },
        fp_type:{
            marginVertical:5,
            paddingHorizontal:10,

        },
        fp_wp_footer:{
            height:40,
            borderTopWidth:0.5,
            borderColor:'gray',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:"center",
            marginHorizontal:10,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10
        },
            fp_price:{
                fontWeight:'bold',
            },
            fp_ic_add:{
                width:20,
                height:20
            },
})

export default PD01
