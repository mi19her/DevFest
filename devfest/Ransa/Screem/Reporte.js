import React, { Component } from "react";
import {Footer, Text, Container} from 'native-base';
import Calendar from '../Components/Calendar'

export default class Reporte extends Component {
    static navigationOptions = {
        title: 'Welcome to Report',
      };
    
  render() {
    return (
      <Container>
            <Text> estas en Reporte </Text>
            <Calendar/>
        <Footer />
      </Container>
    );
  }
}