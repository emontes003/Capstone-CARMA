import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp, StackActions } from "@react-navigation/native";
import {
  ArrowLeft,
  Bell,
  BellOff,
  Check,
  Info,
  Shield,
  AlertTriangle,
  Home as HomeIcon,
  User,
} from "react-native-feather";
import { RootStackParamList } from "../App"; // Adjust this path if needed
import firestore from '@react-native-firebase/firestore';


// Define the type for a notification item
interface Notification {
  id: string;
  type: string;   
  title: string;
  body: string;
  time: string;
  icon: JSX.Element;
}

const NotificationsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<'all' | 'alert'>('all');
  const [allNotifications, setAllNotifications] = useState<Notification[]>([]);
  const filteredNotifications = filter === 'all'
  ? allNotifications
  : allNotifications.filter(n => n.type === filter);

  // Firestore live listener
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('notifications')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        const fetched: Notification[] = snapshot.docs.map(doc => {
          const data = doc.data();

          return {
            id: doc.id,
            type: data.type || "alert",
            title: data.title || "No Title",
            body: data.body || "No description",
            time: data.timestamp?.toDate()?.toLocaleTimeString() || "N/A",
            icon: getIconByType(data.type),
          };
        });

        setNotifications(fetched);
        setAllNotifications(fetched);
      });
      
    return () => unsubscribe();
  }, 
  []);

  // ✅ 📍 Put the helper function here
  const getIconByType = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle width={20} height={20} color="#EF4444" />;
      case "info":
        return <Info width={20} height={20} color="#3B82F6" />;
      case "system":
        return <Shield width={20} height={20} color="#F97316" />;
      default:
        return <Bell width={20} height={20} color="#000" />;
    }
  };

  // Type the parameter for renderNotificationItem using ListRenderItemInfo
  const renderNotificationItem = ({ item }: ListRenderItemInfo<Notification>) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationIcon}>{item.icon}</View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
        <Text style={styles.notificationDescription}>{item.body}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <ArrowLeft width={24} height={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.markReadButton}>
          <Check width={20} height={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Notification filters */}
      <View style={styles.filterContainer}>
  <TouchableOpacity 
    style={filter === 'all' ? styles.filterButtonActive : styles.filterButton}
    onPress={() => setFilter('all')}
  >
    <Text style={filter === 'all' ? styles.filterButtonTextActive : styles.filterButtonText}>
      All
    </Text>
  </TouchableOpacity>

  <TouchableOpacity 
    style={filter === 'alert' ? styles.filterButtonActive : styles.filterButton}
    onPress={() => setFilter('alert')}
  >
    <Text style={filter === 'alert' ? styles.filterButtonTextActive : styles.filterButtonText}>
      Alerts
    </Text>
  </TouchableOpacity>

  {/* Optional: Keep these for now but they don't do anything yet */}
  <TouchableOpacity style={styles.filterButton}>
    <Text style={styles.filterButtonText}>System</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.filterButton}>
    <Text style={styles.filterButtonText}>Info</Text>
  </TouchableOpacity>
</View>


      {/* Notifications list */}
      {notifications.length > 0 ? (
       <FlatList
       data={filteredNotifications}
       renderItem={renderNotificationItem}
       keyExtractor={(item) => item.id}
       contentContainerStyle={styles.notificationsList}
     />
     
      ) : (
        <View style={styles.emptyState}>
          <View style={styles.emptyStateIcon}>
            <BellOff width={32} height={32} color="#ccc" />
          </View>
          <Text style={styles.emptyStateTitle}>No Notifications</Text>
          <Text style={styles.emptyStateDescription}>
            You don't have any notifications at the moment.
          </Text>
        </View>
      )}

      {/* Notification settings */}
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate("Settings")}>
          <View style={styles.settingsButtonContent}>
            <Bell width={20} height={20} color="#666" />
            <Text style={styles.settingsButtonText}>Notification Settings</Text>
          </View>
          <ArrowLeft
            width={20}
            height={20}
            color="#ccc"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </TouchableOpacity>
      </View>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Dashboard")}>
          <HomeIcon width={24} height={24} color="#000" />
          <Text style={styles.navButtonText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Notifications")}>
          <Bell width={24} height={24} color="#000" fill="#000" />
          <Text style={[styles.navButtonText, styles.navButtonTextActive]}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Profile")}>
          <User width={24} height={24} color="#000" />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  markReadButton: {
    padding: 8,
  },
  filterContainer: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  filterButtonText: {
    fontSize: 14,
    color: "#666",
  },
  filterButtonActive: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#f5f5f5",
  },
  filterButtonTextActive: {
    fontSize: 14,
    fontWeight: "500",
  },
  notificationsList: {
    paddingBottom: 16,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  notificationIcon: {
    marginTop: 4,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  notificationTime: {
    fontSize: 12,
    color: "#666",
  },
  notificationDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  emptyStateIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  emptyStateDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  settingsContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#f5f5f5",
  },
  settingsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  settingsButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingsButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingVertical: 16,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonText: {
    fontSize: 12,
    marginTop: 4,
  },
  navButtonTextActive: {
    fontWeight: "500",
  },
});

export default NotificationsScreen;
