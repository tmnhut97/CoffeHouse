import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer} from 'react-navigation';
import IconEntypo from 'react-native-vector-icons/Entypo'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Feather from 'react-native-vector-icons/Feather'; 

import T01 from '../components/home/T01'
import T02 from '../components/home/T02'
import T03 from '../components/home/T03'
import T04 from '../components/home/T04'
import T05 from '../components/home/T05'

const TabNavigator = createMaterialBottomTabNavigator({
    T01: { 
        screen: T01 ,
        navigationOptions:{  
            tabBarLabel:'Tin tức',  
            tabBarIcon: ({ tintColor }) => (  
                <IconEntypo style={[{color: tintColor}]} size={25} name={'news'}/>  
            ),
        }  
    },
    T02: { 
        screen: T02 ,
        navigationOptions:{  
            tabBarLabel:'Tin tức',  
            tabBarIcon: ({ tintColor }) => (  
                <MaterialIcons style={[{color: tintColor}]} size={25} name={'person-pin-circle'}/>  
            ),
        }  
    },
    T03: { 
        screen: T03 ,
        navigationOptions:{  
            tabBarLabel:'Nhiệu vụ',  
            tabBarIcon: ({ tintColor }) => (  
                <MaterialIcons style={[{color: tintColor}]} size={25} name={'menu'}/>  
            ),
        }  
    },
    T04: { 
        screen: T04 ,
        navigationOptions:{  
            tabBarLabel:'Tài khoản',  
            tabBarIcon: ({ tintColor }) => (  
                <MaterialIcons style={[{color: tintColor}]} size={25} name={'store'}/>  
            ),
        }  
    },
    T05: { 
        screen: T05 ,
        navigationOptions:{  
            tabBarLabel:'Tài khoản',  
            tabBarIcon: ({ tintColor }) => (  
                <Feather style={[{color: tintColor}]} size={25} name={'user'}/>  
            ),
        }  
    },

  }, {
    initialRouteName: 'T05',
    activeColor: '#F9B335', 
    inactiveColor: '#aaa',
    barStyle: { backgroundColor: '#fff' },
});

export default createAppContainer(TabNavigator);  