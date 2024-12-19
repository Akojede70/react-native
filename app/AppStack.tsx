import React from 'react';
import { Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../src/components/screens/AboutScreen';
import HomeScreen from '../src/components/screens/HomeScreen';

type RootStackParamList = {
  Home: { result?: string };
  About: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AboutStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6a51ae',
        },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerRight: () => (
          <Pressable onPress={() => alert('Menu button pressed!')}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor: '#e8e4f3',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Welcome Home',
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{ name: 'Guest' }}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

// Default export
const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
};

export default AppStack;
