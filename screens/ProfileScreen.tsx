import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation, NavigationProp, StackActions } from "@react-navigation/native";
import {
  ArrowLeft,
  ChevronRight,
  LogOut,
  Settings,
  Shield,
  HelpCircle,
  Home as HomeIcon,
  Bell,
  User,
} from "react-native-feather"
import { RootStackParamList } from "../App"; // or from a types file if you've separated it

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <ArrowLeft width={24} height={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Profile info */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Image source={{ uri: "https://via.placeholder.com/64x64?text=JD" }} style={styles.avatar} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
          <TouchableOpacity>
            <Text style={styles.editProfileLink}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Vehicle info */}
      <View style={styles.vehicleSection}>
        <Text style={styles.sectionTitle}>Vehicle Information</Text>
        <View style={styles.vehicleCard}>
          <View style={styles.vehicleDetail}>
            <Text style={styles.vehicleLabel}>Vehicle</Text>
            <Text style={styles.vehicleValue}>Tesla Model 3</Text>
          </View>
          <View style={styles.vehicleDetail}>
            <Text style={styles.vehicleLabel}>License Plate</Text>
            <Text style={styles.vehicleValue}>ABC-1234</Text>
          </View>
          <View style={styles.vehicleDetail}>
            <Text style={styles.vehicleLabel}>Year</Text>
            <Text style={styles.vehicleValue}>2023</Text>
          </View>
        </View>
      </View>

      {/* Menu items */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Settings")}>
          <View style={styles.menuItemContent}>
            <Settings width={20} height={20} color="#666" />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
          <ChevronRight width={20} height={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Shield width={20} height={20} color="#666" />
            <Text style={styles.menuItemText}>Privacy & Security</Text>
          </View>
          <ChevronRight width={20} height={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <HelpCircle width={20} height={20} color="#666" />
            <Text style={styles.menuItemText}>Help & Support</Text>
          </View>
          <ChevronRight width={20} height={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Logout button */}
      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut width={20} height={20} color="#EF4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>

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
          <User width={24} height={24} color="#000" fill="#000" />
          <Text style={[styles.navButtonText, styles.navButtonTextActive]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

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
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
  },
  editProfileLink: {
    fontSize: 14,
    color: "#3B82F6",
    marginTop: 4,
  },
  vehicleSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  vehicleCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
  },
  vehicleDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  vehicleLabel: {
    fontSize: 14,
    color: "#666",
  },
  vehicleValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  menuSection: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuItemText: {
    fontSize: 16,
  },
  logoutSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#f5f5f5",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 8,
  },
  logoutText: {
    fontSize: 16,
    color: "#EF4444",
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
})

export default ProfileScreen

