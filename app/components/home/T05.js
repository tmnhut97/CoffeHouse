import React, { Component } from 'react'
import { Text, View,StyleSheet, Platform, image } from 'react-native'
import MapView from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';

import ic from '../../images/coffe_house.png'
export class T05 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLocaltion: false,
            currentLongitude: null, 
            currentLatitude: null,
            initialRegion: {
                latitude: 10.024765, 
                longitude: 105.774622,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            },
            markers:[
                {
                    latlng:{
                        latitude: 10.024765, 
                        longitude: 105.774622,
                    },
                    title: "Coffe House",
                    description: "Quan CaFe"
                },
                {
                    latlng:{
                        latitude: 16.054407, 
                        longitude: 108.202164,
                    },
                    title: "Coffe House",
                    description: "Quan CaFe"
                },
                {
                    latlng:{
                        latitude: 10.776530, 
                        longitude: 106.700980,
                    },
                    title: "Coffe House",
                    description: "Quan CaFe Haha"
                }
            ]
        }
    }

    _callLocation(){
        navigator.geolocation.getCurrentPosition(
            //Will give you the current location
            position => {
                console.log(position)
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);
                this.setState({ currentLongitude: currentLongitude });
                this.setState({ currentLatitude: currentLatitude });
                this.setState({ showLocaltion: true});
                //Setting state Latitude to re re-render the Longitude Text
                //add mar
            },
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.watchID = navigator.geolocation.watchPosition(position => {
            //Will give you the location on location change
            console.log(position);
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
            this.setState({ currentLongitude: currentLongitude });
            //Setting state Longitude to re re-render the Longitude Text
            this.setState({ currentLatitude: currentLatitude });
            //Setting state Latitude to re re-render the Longitude Text
        });
    }
    componentDidMount = () => {
        if(Platform.OS === 'ios'){
            this._callLocation();
            }else{
                async function requestLocationPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'AAA',
                            message: 'Cho phép truy cập vị tri của bạn ',
                            // buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Không',
                            buttonPositive: 'Cho phép',
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        this._callLocation();
                    } else {
                        alert("Bạn chưa cho phép truy cập vị trí của bạn!");
                    }
                } catch (err) {
                }
            }
            requestLocationPermission();
        }    
    };
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    };
    render() {
        return (
            <View style={styles.container}>
                <MapView
                showsUserLocation = {true}
                userLocationAnnotationTitle="Vị trí hiện tại"
                style={styles.map}
                initialRegion={{
                    latitude: 14.058324, 
                    longitude: 108.277199,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.currentLatitude,
                            longitude: this.state.currentLongitude,

                        }}
                        title="Vị trí của tôi"
                        image={ic}
                    />
                    {
                        this.state.markers.map(marker => (
                        <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        image={ic}
                        />
                        ))
                    }
                </MapView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        backgroundColor:'red',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
    },
});
export default T05
