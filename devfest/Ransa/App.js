import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FixedLabelExample from './components/Login';
// import ProfileScreen from './components/Profile';

const MainNavigator = createStackNavigator({
  Login: {screen: FixedLabelExample},
});

const App = createAppContainer(MainNavigator);

export default App;


