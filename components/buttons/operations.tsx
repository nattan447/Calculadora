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
  operacao: string;
  onPres: () => void;
};

function Operation(props: propsNumbers): React.JSX.Element {
  return (
    <TouchableOpacity style={NumberStyles.container} onPress={props.onPres}>
      <Text style={NumberStyles.operation}>{props.operacao}</Text>
    </TouchableOpacity>
  );
}

const NumberStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C77B43',
    width: '20%',
    height: '80%',
    borderRadius: 50,
  },
  operation: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export {Operation};
