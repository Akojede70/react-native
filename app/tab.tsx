

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "@/src/components/screens/SettingsScreen";
import CourseListScreen from "@/src/components/screens/CourseList";
import ProfileScreen from "@/src/components/screens/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import  AboutStack  from "./AppStack";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen name="Course List" component={CourseListScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false, // Disable header for AboutStack
          }}
        />
      </Tab.Navigator>
    //  </NavigationContainer>
  );
}
