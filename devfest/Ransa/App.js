import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FixedLabelExample from './Screem/Login.js';
import Menu from './Screem/Menu';
import Reporte from './Screem/Reporte';
import Trazabilidad from './Screem/Trazabilidad';
import Filter from './Screem/Filter';


const MainNavigator = createStackNavigator({
  Login: {screen: FixedLabelExample},
  Menu: {screen: Menu},
  Reporte: {screen: Reporte},
  Trazabilidad: {screen: Trazabilidad},
  Filter: {screen: Filter},
});

const App = createAppContainer(MainNavigator);

export default App;

