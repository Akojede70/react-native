import { View, Text, FlatList, Pressable,Platform, StyleSheet, SafeAreaView, ScrollView, SectionList, StatusBar, TextInput, Switch} from 'react-native'
import React from 'react'
import PokemonCard from '@/src/components/pokemon-card'
import pokemonList from "../data.json"
import groupedPokmonList from "../grouped-data.json"
import { useState } from 'react';
import LoginForm from '@/src/components/RNList/login-form';
import { NavigationContainer } from '@react-navigation/native';
import Networking from '@/src/components/RNList/networking'
import AboutStack from './AppStack'
import Tabs from './tab'

export default function index() {
  
  const [name, setName] = useState("")
   const [isDarkMode, setIsDarkMode] = useState(false)
  const charmanderData = {
    name: "charnderData",
    image: require("../assets/images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("../assets/images/squirtle.png"), 
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../assets/images/bulbasaur.png"), 
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("../assets/images/pikachu.png"), 
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
     <ScrollView>
    <SafeAreaView style={styles.container}>
      <View>
        <Tabs />
      {/* <Networking/>  */}
      {/* <AboutStack /> */}
      {/* <PokemonCard {...charmanderData}/>
      <PokemonCard {...squirtleData}/>
      <PokemonCard {...bulbasaurData}/>
      <PokemonCard {...pikachuData}/>  */}
       {/* <LoginForm/>  */}
        {/* <FlatList
      data={pokemonList} 
      renderItem={({ item}) => {
        console.log(item.id)
        return (
          <View>
            <Text>{item.type}</Text>
            <Text>{item.name}</Text>
          </View>
        )
      }}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 16}} />}
      ListEmptyComponent={<Text> No items found</Text>}
      ListHeaderComponent={<Text >Pokemon List</Text>}
      ListFooterComponent={<Text> End of list</Text>}
      // horizontal
      />   */}
       {/* <SectionList 
        sections={groupedPokmonList}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          )
        }}
        renderSectionHeader={({ section}) => (
          <Text>{section.type}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16}} />}
        SectionSeparatorComponent={() => <View style={{ height: 16}} /> }
      />  */}
       {/* <TextInput 
      style={styles.input}
      value={name}
      onChangeText={setName} 
      autoCorrect={false}
      autoCapitalize='none'
      // secureTextEntry  // for harshing password
      // keyboardType='numeric'
      />  */}
       {/* <TextInput style={[styles.input, styles.multilineText]}  placeholder='message' multiline/> 
      <Text style={styles.text}> My name is {name}</Text> 
       <View style={styles.switchContainer}>
             <Text style={styles.text}> Dark Mode</Text>
             <Switch 
             value={isDarkMode}
             onValueChange={() => setIsDarkMode((previousState) => !previousState)}
             trackColor={{ false: "#767577", true: "lightblue"}}
             thumbColor={"#f4f3f4"}
             />
      </View>  */}
       </View>
    </SafeAreaView>
    </ScrollView> 
   

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
    padding: 10,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10, 
  }
})


// 2nd

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import { Text, View, Alert, Platform, ActivityIndicator, Button, Modal, StyleSheet } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import Greet from "@/src/components/greet";
// export default function Index() {
//   const [ isModalVisible, setIsModalVisible] = useState(false);
//   return (
  
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60}}>
//       <StatusBar backgroundColor="lightgreen" hidden/>
//     <Button 
//     title="Presssss" 
//     onPress={() => setIsModalVisible(true)}
//     color="midnightblue"
//     />
//     <Modal visible={isModalVisible}
//     onRequestClose={() => setIsModalVisible(false)}
//     animationType="slide"
//     presentationStyle="pageSheet"
//     >
//       <View style={styles.container}>
//         <Text> Modal content</Text>
//         <Button
//         title="close"
//         color="midnightblue"
//         onPress={() => setIsModalVisible(false)}
//         />
//       </View>
//     </Modal>
//     {/* loading */}
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60}}>
//       <ActivityIndicator />
//       <ActivityIndicator size="large" />
//       <ActivityIndicator size="large" color="midnightblue" />
//       <ActivityIndicator size="large" color="midnightblue" animating={false} />
//     </View>

//     {/* Alert */}
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60}}>
//       <Button title="Alert" onPress={() => Alert.alert("Invalid data!")}/>
//       <Button title="Alert 2" onPress={() => Alert.alert("Invalid data!", "DOB incorrect")} />
//         <Button title="Alert 3" onPress={() => Alert.alert("Invalid data!", "DOB incorrect", [
//           {
//             text: "cancel",
//             onPress: () => console.log("cancel pressed"),
//           },
//           {
//             text: "OK",
//             onPress: () => console.log("Ok pressed"),
//           }
//         ]) } />
//         <Greet name="Bruce wayne"/>
//         <Greet name="Peter Bass"/>
//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "lightblue", padding: 60},
//   text: {
//     ...Platform.select({
//      ios: {
//       color: "purple",
//       fontSize: 24,
//       fontStyle: "italic",
//      },
//      android: {
//       color: "blue",
//       fontSize: 30,
//      },
//     })
//   }
// })


// 3rd

// import React from "react";
// import { Text, Pressable } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AboutScreen from "../src/components/screens/AboutScreen";
// import HomeScreen from "../src/components/screens/HomeScreen";

// type RootStackParamList = {
//   Home: { result?: string };
//   About: { name: string };
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// // Define the AboutStack component
// function AboutStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="About"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#6a51ae",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: { fontWeight: "bold" },
//         headerRight: () => (
//           <Pressable onPress={() => alert("Menu button pressed!")}>
//             <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
//           </Pressable>
//         ),
//         contentStyle: {
//           backgroundColor: "#e8e4f3",
//         },
//       }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: "Welcome Home",
//         }}
//       />
//       <Stack.Screen
//         name="About"
//         component={AboutScreen}
//         initialParams={{ name: "Guest" }}
//         options={({ route }) => ({
//           title: route.params.name,
//         })}
//       />
//     </Stack.Navigator>
//   );
// }

// // Export AboutStack as the default export
// export default AboutStack;
