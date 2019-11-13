import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import Calendar from '../Components/Calendar'


const styles =  StyleSheet.create[{
    header: {
        title: 'Reporte',
        headerTintColor:'#fff',
        backgroundColor:'#009B3A',         
      },
}] 

export default class Header extends Component {
        
  render() {
    return (
      <View>
         <Calendar/>
      </View>
    );
  }
}
