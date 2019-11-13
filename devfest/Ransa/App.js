import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FixedLabelExample from './Screem/Login.js';
import Menu from './Screem/Menu';
import Trazabilidad from './Screem/Trazabilidad.js';


const MainNavigator = createStackNavigator({
  Login: {screen: FixedLabelExample},
  Menu: {screen: Menu},
  Trazabilidad:{screen: Trazabilidad},
});

const App = createAppContainer(MainNavigator);

export default App;

