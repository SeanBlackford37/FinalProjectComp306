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
	profilePicture: {
	position: 'absolute',
	left: 30,
	top: 30,
	borderRadius: 200,
	borderWidth: 2,
	height: 200,
	width: 200
},
	profileInfoHeader: {
	position: 'absolute',
	top: 40,
	left: 300,
	fontWeight: "bold",
    fontSize: 30,
    color: 'white'
	
},
	profileText: {
	position: 'absolute',
	left: 250,
	top: 80,
	borderWidth: 2,
	color: 'white',
	padding: 10
},
	editProfile: {
	position: 'absolute',
	left: 90,
	top: 200,
    	backgroundColor: "white",
    	padding: 10,
	borderRadius: 10
},
item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "lightgreen",
    fontSize: 24
     },
     inputs: {
         borderColor: 'gray',
         borderWidth: 1,
         backgroundColor: 'white',
         height: 40,
         width: 120,
     },
     smallInputs: {
         borderColor: 'gray',
         borderWidth: 1,
         backgroundColor: 'white',
         height: 40,
         width: 40,
     },
     largeInputs: {
         borderColor: 'gray',
         borderWidth: 1,
         backgroundColor: 'white',
         height: 100,
         width: 150,
         textAlign: 'left',
     },
     labels: {
         fontSize: 24,
         color: 'white',
         fontWeight: 'bold',
     },
});
  
  export default styles