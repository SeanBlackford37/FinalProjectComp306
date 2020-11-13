import {StyleSheet} from 'react-native';
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a0f7a4',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
     row: {
       fontSize: 24, 
       padding: 42,
       color: '#f40b4f',
       borderWidth: 1,
       borderColor: "#DDDDDD",
      backgroundColor: 'black',
   },
   textInput: {
       color: "#f40b4f",
       flex:1,
       height: 40,
   },
   modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#672cc5",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonPress: {
    backgroundColor: "#e5ae04",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  });
  
  export default styles