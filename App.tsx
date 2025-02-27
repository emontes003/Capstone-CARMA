// App.tsx
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Dashboard Screen
function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text>This is the Dashboard screen.</Text>
    </View>
  );
}

// Notifications Screen
function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text>This is the Notifications screen.</Text>
    </View>
  );
}

// Profile Screen
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>This is the Profile screen.</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if(route.name === 'Notifications'){
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          else if(route.name === 'Profile'){
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return the Ionicons component
          return<Ionicons name = {iconName} size = {size} color = {color}/>;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 12,
  },
});
 