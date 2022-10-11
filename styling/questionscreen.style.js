import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    paddingLeft: 20,
    justifyContent: 'space-evenly',
    margin: 6,
  },
  textStyle: {
    fontSize: 20,
    backgroundColor: '#42f590'
  },
  bottom: {
    color: '#fff',
    borderWidth: 5,
    borderColor: 'grey',
    padding: 2,
    backgroundColor: '#CF9FFF'
  }
});