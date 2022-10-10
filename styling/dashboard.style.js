import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff',
    borderColor: 'lightgreen',
    borderWidth: 13,
    borderRightColor: 'pink',
    borderLeftColor: 'skyblue',
    borderBottomColor: 'lavender',
    borderBottomStartRadius: 45,
    borderBottomEndRadius: 45,

  },
  textStyle: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#42f590',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius:5,
    paddingBottom: 50
    
  },
  bottom: {
    borderWidth: 5,
    borderColor: 'grey',
    padding: 2,
    backgroundColor: '#CF9FFF'
  }
});