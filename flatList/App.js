import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/componet/screens/Home';
import About from './assets/componet/screens/about';
// import { FlatList } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() { 
  const [name, setName] = useState("Hallo");
 

  const handleChange= (updatedname)=>{
    setName(updatedname);
  }

  return(

<NavigationContainer>
   <Stack.Navigator>

   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="About" component={About} />

 </Stack.Navigator> 
 
</NavigationContainer>

// {shoppingList.map((list)=>{
//   return<View>{list.Name}</View>
// })}

// <FlatList data={shoppingList}renderItem={({})=>(<View style={initialStyle.btn}>{}list.Name</View>)}></FlatList>
  );
}




