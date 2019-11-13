import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {Icon, Item} from 'native-base';

export default class AutoCompleteBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textInputFocus: false,
      arrayList: ['Miraflores', 'Pedido 6°', 'Barranco', 'LDK-23','Pedido 2°', 'Chorrillos', ' Pedido 5°', 'LDK-224']
    };
  }

  componentDidMount() {
    this.updateDataWithKey();
  }

  updateDataWithKey() {
    const { arrayList } = this.state;
    const dataWithKey = arrayList.map(data => {
      return {'key': data}
    });
    this.setState({dataWithKey, filterData: dataWithKey});
  }

  changeText(text) {
    this.setState({text});
    const { dataWithKey } = this.state;
    if (text !== '') {
      let filterData = dataWithKey.filter(obj => {
        return obj.key.toLowerCase().indexOf(text.trim().toLowerCase()) > -1;
      });
      if (filterData.length === 0) {
        filterData = [{key: 'No Filter Data'}];
      }
      this.setState({filterData});
    } else {
      this.setState({filterData: dataWithKey});
    }
  }

  onListItemClicked(text) {
    this.setState({
      text,
      textInputFocus: false,
      filterData: [{key: text}]
    });
  }

  renderRow(item) {
    return (
      <TouchableOpacity
        onPress={() => this.onListItemClicked(item.key)}
        style={styles.listItem}
      >
        <Text style={styles.item}>{item.key}</Text>
      </TouchableOpacity>
    );
  }

  handleInputFocus() {
    this.setState({textInputFocus: true});
  }

  handleInputBlur() {
    this.setState({textInputFocus: false});
  }

  render() {
    const { filterData, textInputFocus } = this.state;
    return (
      <View style={styles.container}>
        <Item style={styles.ItemContainer}>
        <Icon name='ios-search' style={styles.icon}/>
        <TextInput
          style={styles.textInput}
          onFocus={() => this.handleInputFocus()}
          onBlur={() => this.handleInputBlur()}
          placeholder= '    Buscador'
          onChangeText={(text) => this.changeText(text)}
          value={this.state.text}
        />
          </Item>
        {textInputFocus &&
          <FlatList
            data={filterData}
            renderItem={({item}) => this.renderRow(item)}
          />
        } 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 0,
    backgroundColor:'#FFFFFF',
  },
  textInput: {
    height: 30,
    marginLeft: 5,
  },
  item: {
    padding: 10,
    fontSize:15,
    height: 44,
  },
  ItemContainer:{
    padding:10,
    margin:10,
  
  },
  icon:{
    color:'#DADADA',
    paddingLeft:10,
  }
})