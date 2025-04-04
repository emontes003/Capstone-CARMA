import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  ListRenderItemInfo,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp, StackActions } from "@react-navigation/native";
import {
  ArrowLeft,
  Search,
  Download,
  Trash2,
  Home as HomeIcon,
  Bell,
  User,
} from "react-native-feather";
import { RootStackParamList } from "../App"; // or from a separate types file if you've separated it

// Define the type for a recording item
interface Recording {
  id: string;
  thumbnail: string;
  title: string;
  date: string;
  size: string;
}

// Annotate recordings array as Recording[]
const recordings: Recording[] = [
  {
    id: "1",
    thumbnail: "https://via.placeholder.com/180x100?text=Recording%201",
    title: "Morning Commute",
    date: "Mar 5, 2025",
    size: "1.2 GB",
  },
  {
    id: "2",
    thumbnail: "https://via.placeholder.com/180x100?text=Recording%202",
    title: "Road Trip",
    date: "Mar 4, 2025",
    size: "3.5 GB",
  },
  {
    id: "3",
    thumbnail: "https://via.placeholder.com/180x100?text=Recording%203",
    title: "City Drive",
    date: "Mar 3, 2025",
    size: "850 MB",
  },
  {
    id: "4",
    thumbnail: "https://via.placeholder.com/180x100?text=Recording%204",
    title: "Highway Incident",
    date: "Mar 2, 2025",
    size: "420 MB",
  },
  {
    id: "5",
    thumbnail: "https://via.placeholder.com/180x100?text=Recording%205",
    title: "Parking Lot",
    date: "Mar 1, 2025",
    size: "1.8 GB",
  },
];

const RecordingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Update renderRecordingItem to type its parameter correctly
  const renderRecordingItem = ({ item }: ListRenderItemInfo<Recording>) => {
    return (
      <View style={styles.recordingItem}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <View style={styles.recordingInfo}>
          <Text style={styles.recordingTitle}>{item.title}</Text>
          <Text style={styles.recordingDate}>{item.date}</Text>
          <Text style={styles.recordingSize}>{item.size}</Text>
        </View>
        <View style={styles.recordingActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Download width={20} height={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Trash2 width={20} height={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <ArrowLeft width={24} height={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recordings</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search
            width={16}
            height={16}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recordings"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* Recordings list */}
      <FlatList
        data={recordings}
        renderItem={renderRecordingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.recordingsList}
      />

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <HomeIcon width={24} height={24} color="#000" />
          <Text style={styles.navButtonText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Bell width={24} height={24} color="#000" />
          <Text style={styles.navButtonText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Profile")}
        >
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
    padding: 16,
  },
  searchInputContainer: {
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
  recordingsList: {
    paddingHorizontal: 16,
  },
  recordingItem: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  thumbnail: {
    width: 96,
    height: 64,
    borderRadius: 6,
  },
  recordingInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  recordingTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  recordingDate: {
    fontSize: 14,
    color: "#666",
  },
  recordingSize: {
    fontSize: 12,
    color: "#999",
  },
  recordingActions: {
    justifyContent: "space-around",
  },
  actionButton: {
    padding: 6,
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

export default RecordingsScreen;
