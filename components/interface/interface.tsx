import React from 'react';

import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useContext} from 'react';

import {FirstContext} from '../context/firstContext';

import {SecondContext} from '../context/secondContext';

import {OperationContext} from '../context/operationContext';

import {ResultContext} from '../context/resultContext';

function Interface(): React.JSX.Element {
  const {firstNumber, setFirstNumber}: any = useContext(FirstContext);

  const {secondNumber, setSecondNumber}: any = useContext(SecondContext);

  const {operation, setOperation}: any = useContext(OperationContext);

  const {result, setResult}: any = useContext(ResultContext);

  return (
    <SafeAreaView style={InterfaceStyles.container}>
      <Text style={InterfaceStyles.number}>
        {firstNumber} {operation} {secondNumber}
      </Text>

      <Text>resultado: {result}</Text>
    </SafeAreaView>
  );
}

const InterfaceStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#C77B43',
    width: '100%',
    height: '30%',
    paddingLeft: 30,
  },
  number: {
    fontSize: 40,
  },
});

export {Interface};
