import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  ListRenderItemInfo,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp, StackActions } from "@react-navigation/native";
import { ArrowLeft, Calendar, Search, Home as HomeIcon, Bell, User } from "react-native-feather";
import { RootStackParamList } from "../App"; // Adjust the path if needed

// Define the interface for a history item
interface HistoryItem {
  id: string;
  date: string;
  time: string;
  duration: string;
  type: string;
  location: string;
}

const HistoryScreen = () => {
  // Type the navigation prop
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Sample history data typed as HistoryItem[]
  const historyItems: HistoryItem[] = [
    { id: "1", date: "March 5, 2025", time: "9:30 AM", duration: "15:20", type: "Incident", location: "Highway 101" },
    { id: "2", date: "March 4, 2025", time: "2:45 PM", duration: "3:10", type: "Manual", location: "Downtown" },
    { id: "3", date: "March 3, 2025", time: "11:15 AM", duration: "8:45", type: "Incident", location: "Parking Lot" },
    { id: "4", date: "March 2, 2025", time: "5:20 PM", duration: "1:30", type: "Manual", location: "Gas Station" },
    { id: "5", date: "March 1, 2025", time: "8:00 AM", duration: "22:15", type: "Trip", location: "Interstate 5" },
  ];

  // Type the parameter for renderHistoryItem using ListRenderItemInfo
  const renderHistoryItem = ({ item }: ListRenderItemInfo<HistoryItem>) => {
    let badgeColor: string;
    let textColor: string;

    switch (item.type) {
      case "Incident":
        badgeColor = "#FECACA";
        textColor = "#B91C1C";
        break;
      case "Manual":
        badgeColor = "#BFDBFE";
        textColor = "#1E40AF";
        break;
      default:
        badgeColor = "#D1FAE5";
        textColor = "#047857";
    }

    return (
      <View style={styles.historyItem}>
        <View style={styles.historyItemHeader}>
          <View>
            <Text style={styles.historyItemTitle}>{item.date}</Text>
            <Text style={styles.historyItemSubtitle}>
              {item.time} • {item.duration}
            </Text>
          </View>
          <View style={[styles.badge, { backgroundColor: badgeColor }]}>
            <Text style={[styles.badgeText, { color: textColor }]}>{item.type}</Text>
          </View>
        </View>
        <Text style={styles.historyItemLocation}>{item.location}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <ArrowLeft width={24} height={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Search and filter */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search width={16} height={16} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search recordings" placeholderTextColor="#999" />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Calendar width={20} height={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* History list */}
      <FlatList
        data={historyItems}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.historyList}
      />

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Dashboard")}>
          <HomeIcon width={24} height={24} color="#000" />
          <Text style={styles.navButtonText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Notifications")}>
          <Bell width={24} height={24} color="#000" />
          <Text style={styles.navButtonText}>Notifications</Text>
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
  searchContainer: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  historyList: {
    paddingHorizontal: 16,
  },
  historyItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  historyItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  historyItemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  historyItemSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  historyItemLocation: {
    fontSize: 14,
    color: "#666",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  badgeText: {
    fontSize: 12,
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
});

export default HistoryScreen;
