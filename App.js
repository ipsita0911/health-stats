import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HS from './src/screens/HomeScreen';
import Form from './src/screens/Form';

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HS} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";

// import HomeScreen from './src/screens/HomeScreen';
// import Form from './src/screens/Form';
//Try.... yesssssss GADHEEEE INSAAAANNN kya hua tha ?Spelling galat thi :P wtfffff xD and todha 


// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }

// let AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   About: {
//     screen: Form
//   }
// });

// const AppContainer = createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//open the code jo maine bejha tha
