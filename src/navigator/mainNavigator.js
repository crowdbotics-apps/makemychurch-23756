import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList25195192Navigator from '../features/ArticleList25195192/navigator';
import Dashboard120191547Navigator from '../features/Dashboard120191547/navigator';
import Dashboard121191546Navigator from '../features/Dashboard121191546/navigator';
import ArticleList191511Navigator from '../features/ArticleList191511/navigator';
import ArticleList191510Navigator from '../features/ArticleList191510/navigator';
import ArticleList191509Navigator from '../features/ArticleList191509/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList25195192: { screen: ArticleList25195192Navigator },
Dashboard120191547: { screen: Dashboard120191547Navigator },
Dashboard121191546: { screen: Dashboard121191546Navigator },
ArticleList191511: { screen: ArticleList191511Navigator },
ArticleList191510: { screen: ArticleList191510Navigator },
ArticleList191509: { screen: ArticleList191509Navigator },

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
