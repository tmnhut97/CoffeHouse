import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var deviceWidth = Dimensions.get('window').width;

import TT01 from '../home/T03/Tabtop1'
import TT02 from '../home/T03/Taptop2'
const TabScreen = createMaterialTopTabNavigator(
    {
        TT01: {
            screen: TT01,
            navigationOptions: {
                tabBarLabel: 'Nhiệm vụ',
                tabBarIcon: ({ tintColor }) => <Icon icon='ios-home' style={{ color: tintColor }} />
            }
        },
        TT02: {
            screen: TT02,
            navigationOptions: {
                tabBarLabel: 'Thành tích',
                tabBarIcon: ({ tintColor }) => <Icon icon='ios-home' style={{ color: tintColor }} />
            }
        },
    },
    {
        initialRouteName: 'TT01',
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#000000',
            inactiveTintColor: '#666666',
            style: {
                width: deviceWidth,
                height: 56,
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 10,
                alignSelf: 'center'
            },
            tabStyle: {},
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                width: deviceWidth / 2,
                start: 20,
                // marginLeft: 20,
                backgroundColor: '#F9B335'
            },
        },
    }
);
const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            header: null,
        },
    },
});
export default createAppContainer(App);