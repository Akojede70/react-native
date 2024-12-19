import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

// Define the DrawerParamList type
type DrawerParamList = {
  Dashboard: undefined;
  Settings: undefined;
};

// Type the props
type Props = DrawerScreenProps<DrawerParamList, "Dashboard">;

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo("Settings")} />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
