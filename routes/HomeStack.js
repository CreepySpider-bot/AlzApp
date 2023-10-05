/* eslint-disable prettier/prettier */
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation"
import Home from "../Pages/Home/Home.js"
import ChatScreen from "../ChatScreen";
import Details1 from "../Pages/Details1/Details1.js"
import Details2 from "../Pages/Details2/Details2.js"
import Details3 from "../Pages/Details3/Details3.js"
import Welcome from "../Pages/Welcome/Welcome.js"
const screens = {
    ChatScreen: {
        screen: ChatScreen,
    },
    Home: {
        screen: Home,
    },
    Details1: {
        screen: Details1,
    },
    Details2: {
        screen: Details2,
    }
    ,
    Details3: {
        screen: Details3,
    },
    Welcome: {
        screen: Welcome,
    },
    
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);