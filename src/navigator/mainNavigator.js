import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213118Navigator from '../features/BlankScreen213118/navigator';
import BlankScreen113117Navigator from '../features/BlankScreen113117/navigator';
import BlankScreen013081Navigator from '../features/BlankScreen013081/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213118: { screen: BlankScreen213118Navigator },
BlankScreen113117: { screen: BlankScreen113117Navigator },
BlankScreen013081: { screen: BlankScreen013081Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
