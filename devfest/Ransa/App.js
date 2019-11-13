
import React, { Component } from "react";
import { Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import FixedLabelExample from './Screem/Login.js';
import MainReporter from './Screem/Reporte';

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
        <MainReporter/>
      </Root>
    );
  }
}

export default App;