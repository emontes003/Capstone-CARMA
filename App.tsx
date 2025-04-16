import React, { useEffect } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Alert } from 'react-native';

// Import your screen components
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import RecordingsScreen from "./screens/RecordingsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StorageScreen from "./screens/StorageScreen";
import DashboardScreen from "./screens/DashboardScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Import the upload function
import { uploadTestVideo } from "./firebase/uploadTestVideo";

//Importing messaging from firebase + use effect to fetch FCM Token
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';


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
  useEffect(() => {
    // Upload only if not already uploaded
    console.log('🔥 useEffect called in App');
    uploadTestVideo();
  }, []);

  //use effect for fetching fcm token
  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('🔥 FCM Token:', token);
      })
      .catch(err => {
        console.log('❌ Error fetching FCM token:', err);
      });
  }, []);

  //use effect for FCM Foreground notification listener
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('📬 Push received in foreground:', remoteMessage);
      Alert.alert(
        remoteMessage.notification?.title || 'Notification',
        remoteMessage.notification?.body || 'You have a new message.'
      );
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const updateToken = async () => {
      try {
        const token = await messaging().getToken();
        console.log('🔥 FCM Token:', token);
  
        // Save/update the token in Firestore
        await firestore()
          .collection('devices')
          .doc('my-device') // <-- Customize this name
          .set({ token, updatedAt: firestore.FieldValue.serverTimestamp() });
  
      } catch (err) {
        console.log('❌ Error fetching or storing FCM token:', err);
      }
    };
  
    updateToken();
  }, []);
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
            options={{ animation: "slide_from_left" }}
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
