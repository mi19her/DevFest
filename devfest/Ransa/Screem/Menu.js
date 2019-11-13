import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Button, Text, View, Icon,Left,Right,Body,Header,Title} from 'native-base';
export default class SegmentOutsideHeaderExample extends Component {

  static navigationOptions ={
    header: null
  }
   constructor(props) {
     super(props);
     this.state = { loading: true };
   };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={{alignContent:'stretch',backgroundColor:'#E5E5E5'}}>
        <Header style={{backgroundColor:'#009B3A', marginTop:25, padding:35}}>
        <Left>
          <Image source={require("../img/logsam.png")} style={{borderRadius:40, marginTop:35}}/>
          </Left>
        <Body>
            <Title style={{marginTop:35}}>Hola Tomas</Title>
          </Body>
          <Right>
          <Icon name='md-log-out' style={{color:'#fff', fontSize:50,marginTop:35}} onPress={() => navigate('Login')}/>
          </Right>
         
          
        </Header>
       
        
          <Text style={{color:'#009B3A',fontWeight:'bold', textAlign:'center', margin:30, fontSize:20}}>¿Qué necesitas saber hoy?</Text>
       
        
         <View style={styles.view}>
         <Button style={styles.buttons}  onPress={() => navigate('Reporte')}>
           <Image style={styles.img3} source={require('../img/Tracking.png')}/>
            <Text style={styles.text}>Tracking</Text>
          </Button>
          <Button style={styles.buttons}  onPress={() => navigate('Trazabilidad')}>
           <Image style={styles.img} source={require('../img/Seguimiento.png')}/>
            <Text style={styles.text}>Seguimiento en Línea</Text>
          </Button>
         </View>
         <View style={styles.view}>
         <Button  style={styles.buttons}>
         <Image style={styles.img3} source={require('../img/Pedidos.png')}/>
            <Text style={styles.text}>Pedidos</Text>
          </Button>
          <Button style={styles.buttons}>
          <Image style={styles.img3} source={require('../img/Inventarios.png')}/>
            <Text style={styles.text}>Inventarios</Text>
          </Button>
         </View>
         <View style={styles.view}>
         <Button style={styles.buttons} >
          
           <Image style={styles.img} source={require('../img/Liquidacion.png')}/>
         
           
            <Text style={styles.text}>Liquidación</Text>
          </Button>
          <Button style={styles.buttons}>
          <Image style={styles.img2} source={require('../img/Facturacion.png')}/>
            <Text style={styles.text}>Facturación</Text>
          </Button>
         </View>
         <View style={styles.view}>
         <Button  style={styles.buttons}>
         <Image style={styles.img2} source={require('../img/indicadores.png')}/>
            <Text style={styles.text}>Indicadores de Gestión</Text>
          </Button>
          <Button style={styles.buttons}>
          <Image style={styles.img2} source={require('../img/Noticias.png')}/>
            <Text style={styles.text}>Noticias</Text>
          </Button>
         </View>
        
       
      </Container>
    );
  }
}

const styles = StyleSheet.create({
 
  buttons:{
    alignSelf:'center',
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    height:'90%',
    margin:5,
    backgroundColor:'#fff',
    borderRadius:5
  },
  text:{
    color:'#000',
    textAlign:'center'
  },
  view:{
    flexDirection:'row',
    justifyContent:'center', 
    flex:1, 
    alignItems:"center"
 
  },
  img: {
    alignItems:"center",
    justifyContent:"center",
   left:'40%',
    flexDirection:'column'
  },
  img2: {
    alignItems:"center",
    justifyContent:"center",
   left:'30%',
    flexDirection:'column'
  },
  img3: {
    alignItems:"center",
    justifyContent:"center",
   left:'35%',
    flexDirection:'column'
  }
  
})