import React, { Component } from "react";
import { Container, Footer, Content, StyleProvider } from 'native-base';
import {StyleSheet, View, Text} from "react-native";
import Slider from '../Components/Slider';
import ProgressCircle from 'react-native-progress-circle'
import Calendar from '../Components/Calendar'
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default class Reporte extends Component {
    static navigationOptions = {
        title: 'Tracking',
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor:'#009B3A',         
        },
        headerRight: () => (
          <Calendar />
        ),
      };
    
  render() {

    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
      <Content>
     <View>
       <View style={styles.viewGeneral}>
       <ProgressCircle
         percent={30}
         radius={55}
         borderWidth={8}
         color="#E69526"
         shadowColor="#FFFFFF"
         bgColor="#009B3A"
       >
         <Text style={{ fontSize: 24, color: "#ffffff", textAlign: 'center',fontWeight:'bold'}}>{'5/11'}</Text>
         <Text style={{ fontSize: 13, color: "#ffffff", textAlign: 'center' }}>{'PEDIDOS'}</Text>
       </ProgressCircle>
       <View style={styles.viewState}>
         <View style={{ backgroundColor: "#009B3A", padding:5 }}>
         <Text style={{ fontSize: 19, color: "#ffffff", textAlign: 'center',fontWeight:'bold'}} >6</Text>
         <Text style={{ fontSize: 10, color: "#ffffff", textAlign: 'center' }}>PENDIENTE</Text>
         </View>
         <View style={{ backgroundColor: "#009B3A", padding:5 }}>
         <Text style={{ fontSize: 19, color: "#ffffff", textAlign: 'center',fontWeight:'bold'}} >5</Text>
         <Text style={{ fontSize: 10, color: "#ffffff", textAlign: 'center' }}>ENTREGADO</Text>
         </View>
         <View style={{ backgroundColor: "#009B3A", padding:5  }}>
         <Text style={{ fontSize: 19, color: "#ffffff", textAlign: 'center',fontWeight:'bold'}} >0</Text>
         <Text style={{ fontSize: 10, color: "#ffffff", textAlign: 'center' }}>PARCIAL</Text>
         </View>
         <View style={{ backgroundColor: "#009B3A", padding:5 }} >
         <Text style={{ fontSize: 19, color: "#ffffff", textAlign: 'center',fontWeight:'bold'}}>0</Text>
         <Text style={{ fontSize: 10, color: "#ffffff", textAlign: 'center' }}>REPROGRAMA</Text>
         </View>
         <View style={{ backgroundColor: "#009B3A", padding:5  }}>
         <Text style={{ fontSize: 19, color: "#ffffff", textAlign: 'center',fontWeight:'bold'}}>0</Text>
         <Text style={{ fontSize: 10, color: "#ffffff", textAlign: 'center' }}>RECHAZADO</Text>
         </View>
         <View style={{ backgroundColor: "#009B3A", padding:5 }}>
         <Text style={{ fontSize: 19, color: "#ffffff", textAlign: 'center',fontWeight:'bold'}}>0</Text>
         <Text style={{ fontSize: 10, color: "#ffffff", textAlign: 'center' }}>CANCELADO</Text>
         </View>
       </View>
       </View>
       <Slider/>
       </View> 
     <Footer/> 
     </Content>
   </Container>
   </StyleProvider>
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
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    padding: 15,
    textAlign: "center",
    width: 250,
    justifyContent: 'space-between',
  }
})