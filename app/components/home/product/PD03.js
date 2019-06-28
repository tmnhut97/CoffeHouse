import React, { Component } from 'react'
import { Text, View,StyleSheet, Image, ScrollView, FlatList ,Dimensions, TouchableOpacity} from 'react-native'
import DetailProduct from './DetailProduct'
import ic_add from '../../../images/ic_add.png'

export class PD03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {
                    id:1,
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Q8gfVtfOK6a8SV7nyT1vEyps-lj8Y7165wAReS5dYLfVv8Xe',
                    name: "Da Cá Sấy Giòn Vị Trứng Muối Da Cá Sấy Giòn Vị Trứng Muối",
                    type:'Nhỏ',
                    price:'35.000 đ'
                }
            ]
        }
    }
    
    render() {
        const{
            txt_title,
            f_item,
                f_img_product,
                f_wp_content,
                    f_name,
                    f_price,
                f_ic_augment,

        }= styles;
        return (
            <View style = {{flex:1}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Text style = { txt_title}> Bánh mặn </Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor= {(item) => item.id}
                        data={this.state.data}
                    renderItem={({item}) => 
                            <TouchableOpacity
                                onPress = {() => this.refs.refDetail._detail(item)}
                            >
                                <View style = {f_item}>
                                    <Image style = {f_img_product} source = {{ uri: item.uri}}/>
                                    <View style = {f_wp_content}>
                                        <Text 
                                            numberOfLines={3}
                                            ellipsizeMode="tail" 
                                            style = { f_name}>
                                            {item.name}
                                        </Text>
                                        <Text style = { f_price}>
                                            {item.price}
                                        </Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image style = { f_ic_augment } tintColor = '#F9B335' source = {ic_add} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </ScrollView>
                <DetailProduct 
                    ref = {'refDetail'}
                />
            </View>
        )
    }
}

var screen = Dimensions.get('window');
const styles = StyleSheet.create({
    txt_title:{
        height:40,
        paddingLeft:10,
        fontWeight:'bold',
        backgroundColor:'#fafafa',
        textAlignVertical:'center'
    },
    f_item:{
        height:100,
        padding:10,
        borderBottomWidth:0.2,
        borderBottomColor: '#ababab',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
        f_img_product:{
            width:80,
            height:80
        },
        f_wp_content:{
            flexDirection:'column',
            height:80,
            width: screen.width - 160,
            justifyContent:'space-between',
            paddingRight:30,
            
        },
            f_name:{
                fontSize: 14,
                fontWeight:'700'
            },
            f_price:{
                fontSize: 14,
                fontWeight:'700'
            },
        f_ic_augment:{
            width:30,
            height:30,
            marginRight:10
        },
})

export default PD03
