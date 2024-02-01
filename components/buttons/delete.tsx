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

type propsDelete = {
  number: string;
  onPres: () => void;
};

function Delete(props: propsDelete): React.JSX.Element {
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
    width: '44%',
    height: '70%',
    borderRadius: 10,
  },
  operation: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export {Delete};
