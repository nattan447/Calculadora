import React, {useEffect} from 'react';

import {useContext} from 'react';

import {Delete} from '../buttons/delete';

import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Numbers} from '../buttons/numbers';

import {FirstContext} from '../context/firstContext';

import {OperationContext} from '../context/operationContext';

import {SecondContext} from '../context/secondContext';

import {ResultContext} from '../context/resultContext';

function Grade(): React.JSX.Element {
  const {firstNumber, setFirstNumber}: any = useContext(FirstContext);

  const {secondNumber, setSecondNumber}: any = useContext(SecondContext);

  const {operation, setOperation}: any = useContext(OperationContext);

  const {result, setResult}: any = useContext(ResultContext);

  function deleteNumber() {
    if (!operation) {
      console.log('não tem operation');
      const arrayUpdated = firstNumber
        .split('')
        .filter(
          (number: string, index: number, array: []) =>
            index != array.length - 1,
        );
      setFirstNumber(arrayUpdated.join(''));
    } else {
      const arrayUpdated = secondNumber
        .split('')
        .filter(
          (number: string, index: number, array: []) =>
            index != array.length - 1,
        );
      setSecondNumber(arrayUpdated.join(''));
    }
  }

  return (
    <SafeAreaView style={GradeStyles.container}>
      <View style={GradeStyles.sections}>
        <Numbers
          number={'AC'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '4')
              : setSecondNumber(secondNumber + ' 4');
          }}
        />
        <Numbers
          number={'/'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '5')
              : setSecondNumber(secondNumber + '5');
          }}
        />
        <Numbers
          number={'%'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '6')
              : setSecondNumber(secondNumber + '6');
          }}
        />
        <Numbers number={'÷'} onPres={() => setOperation('÷')} />
      </View>
      <View style={GradeStyles.sections}>
        <Numbers
          number={'7'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '7')
              : setSecondNumber(secondNumber + '7');
          }}
        />
        <Numbers
          number={'8'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '8')
              : setSecondNumber(secondNumber + '8');
          }}
        />
        <Numbers
          number={'9'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '9')
              : setSecondNumber(secondNumber + '9');
          }}
        />
        <Numbers number={'X'} onPres={() => setOperation('x')} />
      </View>
      <View style={GradeStyles.sections}>
        <Numbers
          number={'4'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '4')
              : setSecondNumber(secondNumber + ' 4');
          }}
        />
        <Numbers
          number={'5'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '5')
              : setSecondNumber(secondNumber + '5');
          }}
        />
        <Numbers
          number={'6'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '6')
              : setSecondNumber(secondNumber + '6');
          }}
        />
        <Numbers number={'-'} onPres={() => setOperation('-')} />
      </View>

      <View style={GradeStyles.sections}>
        <Numbers
          number={'1'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '1')
              : setSecondNumber(secondNumber + '1');
          }}
        />
        <Numbers
          number={'2'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '2')
              : setSecondNumber(secondNumber + '2');
          }}
        />
        <Numbers
          number={'3'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '3')
              : setSecondNumber(secondNumber + '3');
          }}
        />
        <Numbers number={'+'} onPres={() => setOperation('+')} />
      </View>

      <View style={GradeStyles.sections}>
        <Numbers
          number={'0'}
          onPres={() => {
            !operation
              ? setFirstNumber(firstNumber + '0')
              : setSecondNumber(secondNumber + '0');
          }}
        />

        <Delete number={'DELETE'} onPres={deleteNumber}></Delete>
        <Numbers
          number={'='}
          onPres={() => {
            switch (operation) {
              case '+':
                setResult(parseInt(firstNumber) + parseInt(secondNumber));
                break;
              case 'x':
                setResult(parseInt(firstNumber) * parseInt(secondNumber));
                break;
              case '-':
                setResult(parseInt(firstNumber) - parseInt(secondNumber));

                break;
              case '÷':
                setResult(parseInt(firstNumber) / parseInt(secondNumber));
                break;
              default:
                console.log('erro ao fazer a conta');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const GradeStyles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '60%',
    flex: 1,
  },
  sections: {
    width: '100%',
    height: '18%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

export {Grade};
