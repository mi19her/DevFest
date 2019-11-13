// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import FixedLabelExample from './Screem/Login.js';
// // import Menu from './Screem/Profile';

// const MainNavigator = createStackNavigator({
//   Login: {screen: FixedLabelExample},
//   // Menu: {screen:}
// });

// const App = createAppContainer(MainNavigator);

// export default App;

import React, { Component } from "react";
import { Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import FixedLabelExample from './Screem/Login.js';
import Trazabilidad from './Screem/Trazabilidad.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <FixedLabelExample />
        <Trazabilidad />
      </Root>
    );
  }
}

export default App;