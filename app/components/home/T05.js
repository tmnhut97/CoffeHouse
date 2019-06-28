import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

export class T05 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRegion: {
                latitude: 10.024765, 
                longitude: 105.774622,
                latitudeDelta: 0.9,
                longitudeDelta: 0.9,
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

    render() {
        return (
            <View style={styles.container}>
                <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                    {
                        this.state.markers.map(marker => (
                        <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
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
