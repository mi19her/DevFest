import React from "react";
import { Text} from "native-base";
import { Image, View, DatePickerAndroid, TouchableOpacity } from "react-native";

export default class Calendar extends React.Component {
  static defaultProps = {
    disabled: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      defaultDate: props.defaultDate ? props.defaultDate : new Date(),
      chosenDate: props.defaultDate ? props.defaultDate : undefined,
    };
  }

  setDate(date) {
    this.setState({ chosenDate: new Date(date) });
    if (this.props.onDateChange) {
      this.props.onDateChange(date);
    }
  }

  showDatePicker = () => {
    this.openAndroidDatePicker();
    this.setState({ modalVisible: true });
  };

  async openAndroidDatePicker() {
    try {
      const newDate = await DatePickerAndroid.open({
        date: this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate,
        minDate: this.props.minimumDate,
        maxDate: this.props.maximumDate,
        mode: this.props.androidMode,
      });
      const { action, year, month, day } = newDate;
      if (action === "dateSetAction") {
        const selectedDate = new Date(year, month, day);
        this.setState({ chosenDate: selectedDate });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date);
    }
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("/");
  }

  render() {

    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => this.showDatePicker()}
            style={[
                this.state.chosenDate, 
            ]}
          >
            { this.state.chosenDate
              ?  <Text>{this.formatChosenDate(this.state.chosenDate)}</Text> 
              : <Image source={require('../img/Calendar.png')} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: false })}
          />
        </View>
      </View>
    );
  }
}
