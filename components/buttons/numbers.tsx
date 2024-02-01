import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

type propsNumbers = {
  number: string;
  onPres: () => void;
};

function Numbers(props: propsNumbers): React.JSX.Element {
  return (
    <TouchableOpacity style={NumberStyles.container} onPress={props.onPres}>
      <Text style={NumberStyles.operation}>{props.number}</Text>
    </TouchableOpacity>
  );
}

const NumberStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '20%',
    height: '80%',
    borderRadius: 50,
  },
  operation: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export {Numbers};
