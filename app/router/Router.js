import {createStackNavigator, createAppContainer} from 'react-navigation';
import {
	StatusBar
} from 'react-native';
// StatusBar.setHidden(true);
import RouterTab from "./RouterTab"

import Product from "../components/home/product/Product"
import Account from "../components/home/T04/Account"
import Music from "../components/home/T04/Music"
// import History from "../components/home/T04/History"
// import Help from "../components/home/T04/Help"
// import Setting from "../components/home/T04/Setting"

const MainNavigator = createStackNavigator({

	RouterTab: {
		screen: RouterTab ,
		navigationOptions: {
			header: null ,
		}
	},
	Account: {
		screen: Account ,
		navigationOptions: {
			header: null ,
		}
	},
	Music: {
		screen: Music ,
		navigationOptions: {
			header: null ,
		}
	},
	// History: {
	// 	screen: History ,
	// 	navigationOptions: {
	// 		header: null ,
	// 	}
	// },
	// Help: {
	// 	screen: Help ,
	// 	navigationOptions: {
	// 		header: null ,
	// 	}
	// },
	// Setting: {
	// 	screen: Setting ,
	// 	navigationOptions: {
	// 		header: null ,
	// 	}
	// },
	
	Product: {
		screen: Product ,
		navigationOptions: {
			header: null ,
		}
	},
},
	{
	  initialRouteName: "RouterTab"
	});

const App = createAppContainer(MainNavigator);

export default App;