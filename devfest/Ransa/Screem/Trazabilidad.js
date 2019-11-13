import React, { Component } from "react";
import { Container, Content, Footer, Text } from 'native-base';

export default class Reporte extends Component {
    static navigationOptions = {
        title: 'Welcome to Trazabilidad',
      };
  render() {
    return (
      <Container>
        <Content padder>
            <Text> Estas en trazabilidad </Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}