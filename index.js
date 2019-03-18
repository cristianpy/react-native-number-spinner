import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

var styles = require('./style');


class Spinner extends Component {

  state = {
    min: 0,
    max: 99,
    default: 0,
    num: 0,
    color: '#33c9d6',
    numColor: '#333',
    numBgColor: 'white',
    showBorder: true,
    fontSize: 14,
    btnFontSize: 14,
    buttonTextColor: 'white',
    disabled: false,
    width: 90,
    height: 30
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) {
      this.setState({
        disabled: nextProps.disabled
      });
    }
    if (nextProps.min) {
      this.setState({
        min: nextProps.min
      });
    }
    if (nextProps.max) {
      this.setState({
        max: nextProps.max
      });
    }
    if (nextProps.value !== false) {
      this.setState({
        num: nextProps.value
      });
    }
    if (nextProps.width !== false) {
      this.setState({
        width: nextProps.width
      });
    }
    if (nextProps.height !== false) {
      this.setState({
        height: nextProps.height
      });
    }
    if (nextProps.color !== false) {
      this.setState({
        color: nextProps.color
      });
    }
  }

  _onNumChange(num) {
    if (this.props.onNumChange) this.props.onNumChange(num);
  };

  _increase() {
    if (this.state.disabled) return;

    if (this.state.max > this.state.num) {
      var num = this.state.num + 1;
      if (typeof this.state.value === 'undefined') {
        this.setState({
          num: num
        });
      };

      this._onNumChange(num);
    }
  };

  _decrease() {
    if (this.state.disabled) return;

    if (this.state.min < this.state.num) {
      var num = this.state.num - 1;
      if (typeof this.state.value === 'undefined') {
        this.setState({
          num: num
        });
      };

      this._onNumChange(num);
    }
  };

  render() {
    return (
      <View style={[styles.container,
      { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
      { width: this.state.width }]}>
        <TouchableOpacity
          style={[styles.btn,
          { backgroundColor: this.state.color },
          { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
          { height: this.state.height }]}
          onPress={() => this._decrease()}>
          <Text style={[styles.btnText,
          { color: this.state.buttonTextColor, fontSize: this.state.btnFontSize }]}>-</Text>
        </TouchableOpacity>
        <View style={[styles.num,
        {
          borderColor: this.state.showBorder ? this.state.color : 'transparent', backgroundColor: this.state.numBgColor, height: this.state.height
        }]}>
          <Text style={[styles.numText, { color: this.state.numColor, fontSize: this.state.fontSize }]}>{this.state.num}</Text>
        </View>
        <TouchableOpacity
          style={[styles.btn,
          { backgroundColor: this.state.color },
          { borderColor: this.state.showBorder ? this.state.color : 'transparent' },
          { height: this.state.height }]}
          onPress={() => this._increase()}>
          <Text style={[styles.btnText,
          {
            color: this.state.buttonTextColor, fontSize: this.state.btnFontSize
          }]}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Spinner;
