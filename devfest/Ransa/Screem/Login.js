import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { Component } from "react";
import { Image } from "react-native";
import {
  Root,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from "native-base";

export default class FixedLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("D:/devfest/Ransa/node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("D:/devfest/Ransa/node_modules/native-base/Fonts/Roboto_medium.ttf"),
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
      <Container>
        <Header />
        <Content>
          <Image source={require("../img/logo-1.png")} style={{ width: 160, height: 30 }} />
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button success onPress={() => navigate("Menu")}>
            <Text> Success </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
