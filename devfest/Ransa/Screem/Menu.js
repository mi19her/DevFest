import React, { Component } from "react";

// import { Image } from "react-native";
import { Container, Content, Footer, Text } from 'native-base';

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}
