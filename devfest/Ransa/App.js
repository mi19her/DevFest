import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FixedLabelExample from './Screem/Login.js';
import Menu from './Screem/Menu';
import Reporte from './Screem/Reporte';
import Trazabilidad from './Screem/Trazabilidad';


const MainNavigator = createStackNavigator({
  Login: {screen: FixedLabelExample},
  Menu: {screen: Menu},
  Reporte: {screen: Reporte},
  Trazabilidad: {screen: Trazabilidad},
});

const App = createAppContainer(MainNavigator);

export default App;

