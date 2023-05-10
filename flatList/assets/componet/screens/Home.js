import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Text, Name } from 'react-native';
import { useState } from 'react';

// import { Image } from 'react-native';

const Home = ({ navigation }) => {
  const [Name, setName] = useState();




  const onChange = ({ a }) => {
    setName(a);
  }



  return (

    <View style={initialStyle.main}>
     
      {/* <Image source={require('./new.jpg')} /> */}
      <Button title="Go to About Page" onPress={() => { navigation.navigate("About") }} />
      <View>

        <Text style={initialStyle.textBlue}>Admision Form</Text>

    

        <TextInput onChangeText={onChange}
          placeholder='Enter Your Name'
          value={Name}
          style={initialStyle.input}
          secureTextEntry={true}

        > Name</TextInput>
      
        



<TextInput onChangeText={onChange}
          placeholder='Enter Your Email'
          value={Name}
          style={initialStyle.input}
          secureTextEntry={true}

        > Email</TextInput>

      </View>
      <Button title='submint' 
      style={initialStyle.btn}/>
    </View>
  );
 
}

export default Home;

const initialStyle = StyleSheet.create({
  textBlue: {
    color: "black",
    fontSize: 20,
    textAlign: 'center',
    fontSize:38
  },
  main: {
    backgroundColor:"green",
    flex:2
  },
  input:{
    borderColor:"black",
    borderWidth:2,
    borderRadius:35,
    padding:10,
    marginTop:20
  },
  btn: {
    marginTop:20,
    borderRadius:34
    
  }
})

