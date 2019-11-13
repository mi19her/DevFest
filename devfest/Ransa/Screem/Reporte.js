
import React, { Component } from "react";
import { Container, Footer, Content, Header} from 'native-base';
import { View, Text} from "react-native";
import AutocompleteInput from '../Components/Autocomplete-input';
import Calendar from '../Components/Calendar'

export default class Reporte extends Component {
    static navigationOptions = {
        title: 'Tracking',
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor:'#009B3A',         
        },
      };
    
  render() {
    return (
       <Container>
          <Header style={{ backgroundColor: "#009B3A" }}>
          <Calendar/>
          </Header>
         <Content>
        <AutocompleteInput/>
        <View>
          <Text>TOTAL DE ORDENES</Text>
           <Text>numero</Text>
         </View>
        <Footer/> 
        </Content>
      </Container>
    );
  }
}
