import React, { Component } from "react";
import { Container, Footer, Content, Header} from 'native-base';
import {StyleSheet, View, Text} from "react-native";
import Slider from '../Components/Slider';
import ProgressCircle from 'react-native-progress-circle'
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
      <Content>
      <Header style={{ backgroundColor: "#009B3A" }}>
          <Calendar/>
          </Header>
     <View>
       <View style={styles.viewGeneral}>
       <ProgressCircle
         percent={30}
         radius={50}
         borderWidth={8}
         color="#3399FF"
         shadowColor="#999"
         bgColor="#fff"
       >
         <Text style={{ fontSize: 18 }}>{'30%'}</Text>
       </ProgressCircle>
       <View style={styles.viewState}>
         <View>
         <Text>5</Text>
         <Text>PENDIENTE</Text>
         </View>
         <View>
         <Text>5</Text>
         <Text>PENDIENTE</Text>
         </View>
         <View>
         <Text>5</Text>
         <Text>PENDIENTE</Text>
         </View>
         <View>
         <Text>5</Text>
         <Text>PENDIENTE</Text>
         </View>
         <View>
         <Text>5</Text>
         <Text>PENDIENTE</Text>
         </View>
         <View>
         <Text>5</Text>
         <Text>PENDIENTE</Text>
         </View>
       </View>
       </View>
       <Slider/>
       </View>
   
     <Footer/> 
     </Content>
   </Container>
    );
  }
}

const styles =StyleSheet.create ( {
  viewGeneral :{
    backgroundColor:'#009B3A',
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    padding:10
  },
  viewState:{
    backgroundColor:'white',
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    margin:3, 
    borderColor:"black",
    borderWidth: 0.5,
  }
  
})