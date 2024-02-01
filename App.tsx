import React, {useContext} from 'react';

import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {useState} from 'react';

import {Grade} from './components/interface/grade';

import {FirstContext} from './components/context/firstContext';

import {Interface} from './components/interface/interface';

import {OperationContext} from './components/context/operationContext';

import {SecondContext} from './components/context/secondContext';

import {ResultContext} from './components/context/resultContext';

function App(): React.JSX.Element {
  const [firstNumber, setFirstNumber] = useState('');

  const [secondNumber, setSecondNumber] = useState('');

  const [operation, setOperation] = useState('');

  const [result, setResult] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <FirstContext.Provider value={{firstNumber, setFirstNumber} as any}>
        <OperationContext.Provider value={{operation, setOperation} as any}>
          <SecondContext.Provider
            value={{secondNumber, setSecondNumber} as any}>
            <ResultContext.Provider value={{result, setResult} as any}>
              <Interface />
              <Grade />
            </ResultContext.Provider>
          </SecondContext.Provider>
        </OperationContext.Provider>
      </FirstContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
