import React from 'react';
import { Dimensions, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    MaterialTopTabBar
} from 'react-navigation';
 
import PD01 from './PD01';
import PD02 from './PD02';
import PD03 from './PD03';
import ic_find from '../../../images/ic_find.png'

var deviceWidth = Dimensions.get("window").width;
const TabScreen = createMaterialTopTabNavigator(
    {
        PD01: { 
            screen: PD01,
            navigationOptions:{  
                tabBarLabel:'Món nỗi bật',
            }
        },
        PD02: { 
            screen: PD02,
            navigationOptions:{  
                tabBarLabel:"Thức uống",
            }
        },
        PD03: { 
            screen: PD03,
            navigationOptions:{  
                tabBarLabel:"Đồ ăn",
            }
        },
        
    },
    {
        initialRouteName:'PD01',
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarComponent: props => 
        <View style ={{ flexDirection:'row', height:56, alignItems:'center', justifyContent:'space-between'}}>
        <MaterialTopTabBar {...props} />
        <View style ={{ width:50, height:56, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity>
                <Image style = {{ width: 20, height: 20}} source = { ic_find }/>
            </TouchableOpacity>
        </View>
        </View>,
        tabBarOptions: {
            activeTintColor: '#000000',
            inactiveTintColor: '#666666',
            style: {
                width: deviceWidth - 50,
                height:50,
                backgroundColor: '#fff',
                elevation: 0,
                alignSelf:'center'
            },
            tabStyle :{
                width: (deviceWidth - 50)/3,
                justifyContent: 'center',
                alignItems: 'center',
            },
            labelStyle: {
                textAlign: 'center',
                fontSize:12
            },
            indicatorStyle: {
                position:'absolute',
                right:50,
                paddingRight:100,
                alignSelf:'flex-start'
            },
        },
    }
);
 

const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            header: null
        },
    },
});
export default createAppContainer(App);