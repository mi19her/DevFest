import * as Font from "expo-font";
import * as React from 'react';
import { Text,TextInput,View,ImageBackground, StyleSheet,Image  } from 'react-native';
import { Button, Icon} from "native-base";



export default class LoginScreen extends React.Component {
  state = {
    password: ""
  };
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
   
    const {navigate} = this.props.navigation;
    return (      
      <ImageBackground source={require("../img/imagenlogin.png")} style={{width: '100%', height: '100%', backgroundColor:'black'}}>
          <View style={styles.container}>
          <Image source={require("../img/logo-1.png")} style={{ width: 280, marginBottom:100,alignSelf:'center' }} />

          <View style={styles.containerletters}> 
              <Text style={{color:'white', marginTop:15, fontSize:15}}>Usuario
              </Text>
            </View>      
            <View style={styles.containerUserName}>
              <TextInput 
              style={styles.textInput} value='Tomasmoro@ransa.net' /> 
            </View>
            <View style={styles.containerletters}> 
            <Text style={{color:'white', marginTop:15, fontSize:15, marginRight:30}}>Contraseña
              </Text>
            </View>
           
            <View style={styles.containerUserName}>
            <TextInput value='ransa360' textContentType={'password'} multiline={false} secureTextEntry={true} onChangeText={(text) => {  this.setState({ password: text }); }} style={styles.input} placeholder='contraseña' />
            </View>

            <View style={styles.containerSignIn}>
            <Button success block onPress={() => navigate('Menu')} style={{height:60, color:'#fff'}}>
           <Text style={{color:'white'}}> INGRESA </Text>
           </Button>
            </View>
          </View>  
            </ImageBackground>

       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    height: "auto"
  },
  containerSignIn: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    paddingTop: "2%"
  },
  containerUserName: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginLeft: "6%",
    marginBottom: "2%",
    marginRight: "6%",
    borderRadius: 10
  },
  containerPassword: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginLeft: "6%",
    marginBottom: "15%",
    marginRight: "6%"
  },

  containerletters: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    justifyContent: "flex-start"
  },
  icon: {
    flex: 1
  },
  textInput:{
    backgroundColor:'transparent',
    flex:5,
    color:'black',
    alignSelf:"center",
    paddingLeft:'25%'
  }
});
