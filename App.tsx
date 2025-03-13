import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// Import your screen components
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import RecordingsScreen from "./screens/RecordingsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StorageScreen from "./screens/StorageScreen";
import DashboardScreen from "./screens/DashboardScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Define a type for your navigator's routes
export type RootStackParamList = {
  Home: undefined;
  History: undefined;
  Recordings: undefined;
  Settings: undefined;
  Storage: undefined;
  Dashboard: undefined;
  Notifications: undefined;
  Profile: undefined;
};

// Create a native stack navigator with the defined type
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ animation: "slide_from_left" }}  // Example animation option
          />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Recordings" component={RecordingsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Storage" component={StorageScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
