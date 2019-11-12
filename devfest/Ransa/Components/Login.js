import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from "native-base";

export default class FixedLabelExample extends Component {
  render() {
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
          <Button success>
            <Text> Success </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
