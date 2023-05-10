import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const About = ({ navigation }) => {
  const [shoppingList, setShoppingList] = useState([

    { key: 1, Name: "HTML,CSS" },
    { key: 2, Name: "JawaScript" },
    { key: 3, Name: "React Native" },
    { key: 4, Name: "Block Chain ,NFT" },

  ]);

  return (

    <View>
      <Button title="Go to About Page" onPress={() => { navigation.navigate("Home") }} />
      <View>
        <FlatList
          data={shoppingList}
          renderItem={({ item }) => <Text style={initialStyle.flatList}>{item.Name}</Text>}
        />
        {/* <View>
          <View >
            <Text style={initialStyle.box}>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            </View>
          </View> */}


        </View>
      </View>


      )
}

      export default About

      const initialStyle = StyleSheet.create({

        flatList: {
        color: "blue",
      textAlign: "center",
      marginTop: 20,
      backgroundColor: "green",
      flex: 3



  },

      box: {
        flex: 1,
      textAlign: "center",
      fontSize:20,
  },
})