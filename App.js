/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const CleverTap = require('clevertap-react-native');

export default class App extends Component<Props> {
    componentDidMount() {
        //CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (event) => { this._handleCleverTapDisplayUnitsLoaded(CleverTap.CleverTapDisplayUnitsLoaded,event); });
        CleverTap.setDebugLevel(3);
        CleverTap.setUIEditorConnectionEnabled(true); 

        //CleverTap.registerStringVariable('ct-1589458251');
        CleverTap.registerMapOfStringVariable('test_variable');
    }

    _getDisplayUnitForId(event){
        CleverTap.profileGetCleverTapID((err, res) => {
          console.log('CleverTapID', res, err);
        });

        //CleverTap.profileSet({'Name': 'JPA Test 3', 'Identity': 'JPA3', 'Email': 'jpa3@test.com', 'Internal User': 'JPA A/B Test'});
        
        /*CleverTap.getStringVariable('ct-1589458251', 'wew', (error, value) => {
          alert('ct-1589458251 value is ' + value)
        });*/

        CleverTap.getMapOfStringVariable("test_variab;e","defaultMapString", (err, res) => {
            console.log('Map of String in res: ', res, err);
        });
   }
  
  render() {
    return (
      <View style={styles.container}>
            <TouchableHighlight style={styles.button}
              onPress={this._getDisplayUnitForId}>
              <Text>Get Display Unit For Id</Text>
            </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
        marginBottom: 20
  }
});
