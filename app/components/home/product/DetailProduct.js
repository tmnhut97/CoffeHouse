                    
import React, { Component } from 'react'
import Modal from 'react-native-modalbox'
import { Text, View, TouchableOpacity, Image, StyleSheet , Dimensions } from 'react-native'

import ic_x from '../../../images/ic_x.png'
import ic_minus from '../../../images/ic_minus.png'
import ic_augment from '../../../images/ic_augment.png'
import ic_love from '../../../images/ic_love.png'
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state ={
            size:1,
            showAllContent:false,
            like :false,
            topping :false,
            tintColorMinus: '#a9a9a9',
            quantiy:1,
            product:
            {
                id:null,
                uri:null,
                name:null,
                type:null,
                price:null
            },
        }
    }
    
    _size(size){
        switch(size){
            case 1:
                this.setState({size: size})
                break
            case 2:
                this.setState({size: size})
                break
            case 3:
                this.setState({size: size})
                break
            default:
                this.setState({size: 1})
                break
        }
    }
    _detail(item){
        this.setState({
            product: {
                id: item.id,
                uri: item.uri,
                name: item.name,
                type: item.type,
                price: item.price,
            }
        })
        this.refs.modalDetail.open()
    }
    _minus(){
        if (this.state.quantiy > 1 ){
            if(this.state.quantiy == 2){
                this.setState({
                    quantiy: this.state.quantiy - 1,
                    tintColorMinus: '#a9a9a9'
                })
            }else this.setState({quantiy: (this.state.quantiy - 1)}) 
        }
    }
    _add(){
        (this.state.quantiy <= 1) ? this.setState({
            quantiy: this.state.quantiy + 1,
            tintColorMinus: '#F9B335'
        }) : this.setState({ quantiy: this.state.quantiy + 1 })
    }
    _topping(){
        this.setState({ topping: !this.state.topping}) 
    }
    render() {
        const {
            // modal
            md_img_x,
            md_wp_top,
                md_img_product,
                md_name,
                md_content,
                md_choose,
                md_wp_choose_size,
                    md_title_size,
                    md_type_size,
                md_wp_choose_topping,
                    md_choose_topping,
                md_footer,
                    md_footer_wp,
                    md_footer_pay,
                    md_footer_right,
                        md_footer_img_reduction,
                        md_footer_quantily,
                        md_footer_img_augment,
                    md_footer_wp_bt,
                        md_footer_wp_bt_left,
                            md_footer_img_like,
                            md_footer_bt_like,
                        md_footer_bt_add_cart,
            
        } =styles;
        return (
            <Modal
                coverScreen ={true}
                ref = {'modalDetail'}
                position = 'center'
                backdrop = {true}
                style = {{
                    justifyContent:'center',
                    borderRadius: 10,
                    width: deviceWidth - 60,
                    height: 'auto',
                }}
            >
                
                <View>
                    <TouchableOpacity
                        onPress = {() => this.refs.modalDetail.close()}
                    >
                        <Image 
                            style = {md_img_x} source = { ic_x }
                        />
                    </TouchableOpacity>
                    <View style = {md_wp_top}>
                        <Image style = {md_img_product} source={{uri: this.state.product.uri}}/>
                        <View>
                            <Text 
                                numberOfLines={1}
                                ellipsizeMode="tail"   
                                style ={md_name}>
                                {this.state.product.name}
                            </Text>
                            <Text 
                                numberOfLines= {this.state.showAllContent ? 0 : 4}
                                ellipsizeMode="tail"
                                style ={md_content}>
                                Theo chân những người gốc Hoa đến định cư tại Sài Gòn, Bạc sỉu là cách gọi tắt của "Bạc tẩy sỉu phé" trong tiếng Quảng Đông, chính là: Ly sữa trắng kèm một chút cà phê.
                            </Text>
                            <TouchableOpacity onPress={ ()=> this.setState({ showAllContent: !this.state.showAllContent}) }>
                                <Text style= {{marginLeft:15, color:'#F9B335'}}>
                                    {this.state.showAllContent ? 'Thu gọn' : 'Xem thêm'} 
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {md_choose}>
                        <View style = {md_wp_choose_size}>
                            <Text style = {md_title_size}>Size</Text>
                            <TouchableOpacity>
                                <Text onPress={()=>this._size(1)} style = {[md_type_size, this.state.size == 1 && {color:'#fff', backgroundColor:'#000'}]}>Nhỏ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text onPress={()=>this._size(2)} style = {[md_type_size, this.state.size == 2 && {color:'#fff', backgroundColor:'#000'}]}>Vừa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text onPress={()=>this._size(3)} style = {[md_type_size, this.state.size == 3 && {color:'#fff', backgroundColor:'#000'}]}>Lớn</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {md_wp_choose_topping}>
                            <Text style = {md_title_size}>Topping</Text>
                            <TouchableOpacity 
                                // onPress = { () => alert('a') }
                                onPress = { () => this.setState({ topping: !this.state.topping}) } 
                            >
                                <Text style={[md_choose_topping, this.state.topping && styles.md_choose_topping_true]}>
                                Trân châu trắng { this.state.topping}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = { md_footer}>
                        <Text style = {{marginTop:10, marginLeft:15}}>Tạm tính</Text>
                        <View style = { md_footer_wp}>
                            <Text style={md_footer_pay}>+ { this.state.product.price}</Text>
                            <View style = {md_footer_right}>
                                <TouchableOpacity onPress = {() => this._minus()}>
                                    <Image tintColor={this.state.tintColorMinus} style = {md_footer_img_reduction}  source = { ic_minus }/>
                                </TouchableOpacity>
                                <Text style = {md_footer_quantily}>{this.state.quantiy}</Text>
                                <TouchableOpacity onPress = {() => this._add()}>
                                    <Image tintColor='#F9B335' style = {md_footer_img_augment}  source = { ic_augment }/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {md_footer_wp_bt}>
                            <TouchableOpacity onPress = { () => this.setState({ like: !this.state.like}) }>
                                <View style = {[md_footer_wp_bt_left, this.state.like && { backgroundColor:'#000'} ]} >
                                    <Image tintColor= {this.state.like?'#fff':'#000' }  style = {md_footer_img_like} source={ ic_love }/>
                                    <Text style = {[ md_footer_bt_like, this.state.like && { color:'#fff'}]}>THÍCH MÓN</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style = { md_footer_bt_add_cart}>THÊM VÀO GIỎ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    
    md_img_x:{ width: 20, height:20, position:'absolute', top:10, end:10},
    md_wp_top:{ flexDirection:'row', marginTop:20},
    md_img_product:{marginLeft: 15, width:100,  height:100 },
    md_name:{ width: deviceWidth - 200, paddingHorizontal:15, fontSize:18, fontWeight:'500'},
    md_content:{ width: deviceWidth -180, paddingHorizontal: 15},
    md_choose:{ marginVertical:15, borderTopWidth:1, borderColor:'gray'},
    md_wp_choose_size:{flexDirection:'row', justifyContent:'flex-start'},
        md_title_size:{ paddingHorizontal:15, marginVertical:10, textAlignVertical:'center'},
        md_type_size:{textAlign:'center', width:60, paddingHorizontal:10, marginHorizontal:10, marginVertical:10, borderRadius: 15, borderWidth:1, padding:5},
    md_wp_choose_topping:{
        flexDirection :'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
        md_choose_topping:{
            borderColor:'#000',
            borderRadius:15, 
            borderWidth:1,
            backgroundColor:'#fff',
            paddingHorizontal:15,
            padding:5
        },
        md_choose_topping_true:{
            backgroundColor:'#000',
            color:'#fff'
        },

    md_footer:{
        borderTopWidth:1,
        borderColor:'gray',
    },
    md_footer_wp:{
        flexDirection:'row',
        justifyContent:'space-between', 
        padding:15
    },
    md_footer_pay:{
        fontSize:16,
        fontWeight:'700'
    },
    md_footer_right:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
        md_footer_img_reduction:{
            resizeMode: 'contain',
            width:30,
            height:30    
        },
        md_footer_quantily:{
            marginHorizontal: 10, fontWeight:'bold', fontSize:14
        },
        md_footer_img_augment:{
            resizeMode: 'contain',
            width:30,
            height:30
        },

    md_footer_wp_bt:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom: 15,
        marginHorizontal:15
    },
    md_footer_wp_bt_left:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        height:45,
        width: (deviceWidth - 110)/2
    },
        md_footer_img_like:{
            width:25,
            height:25,
            marginRight :10
        },
        md_footer_bt_like:{
            color:'black'
        },
        md_footer_bt_add_cart:{
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
            padding:10,
            color:'white',
            backgroundColor:'#F9B335',
            textAlignVertical:'center',
            textAlign:'center',
            height:45,
            width: (deviceWidth - 110)/2
        },
    
})

export default DetailProduct
