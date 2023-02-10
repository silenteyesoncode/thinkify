import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';


const DialCall = props => {
 

  const HandleBT = () => {

    let phoneNumber = '';
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${+918502035213}';
      }
      else {
        phoneNumber = 'telprompt:${+917042317750}';
      }
    Linking.openURL(number);
}


    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={HandleBT} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.TextStyle}>OPEN PHONE{"\n"} NUMBER IN DIAL SCREEN</Text>
        </TouchableOpacity>
      </View>

    );
};


const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {

    width: '80%',
    padding: 6,
    backgroundColor: '#4130E6',
    borderRadius: 7,
  },

  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }

});

export default DialCall;
