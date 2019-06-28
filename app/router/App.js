import React, {Component} from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Router from './Router';
// import { Provider } from 'react-redux';
// import store from '../redux/store';

export default class ListData extends Component {
  render() {
    return (
      // <Provider store={store}>
        <SafeAreaView forceInset={{ bottom: 'never' }} style={{ backgroundColor: 'green', flex: 1}}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Router/>
            </ScrollView>
        </SafeAreaView>
      // </Provider>
    );
  }
}
