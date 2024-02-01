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

      <Text style={InterfaceStyles.result}>resultado: {result}</Text>
    </SafeAreaView>
  );
}

const InterfaceStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '100%',
    height: '30%',
    paddingLeft: 30,
  },
  number: {
    fontSize: 40,
    color: 'white',
  },
  result: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
});

export {Interface};
