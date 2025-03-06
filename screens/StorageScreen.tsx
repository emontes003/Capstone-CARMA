import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ArrowLeft, HardDrive, Trash2, Home as HomeIcon, Bell, User } from "react-native-feather"
import { RootStackParamList } from "../App"; // or from a types file if you've separated it

const StorageScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  // Sample storage data
  const totalStorage = 64 // GB
  const usedStorage = 42.5 // GB
  const freeStorage = totalStorage - usedStorage
  const usedPercentage = (usedStorage / totalStorage) * 100

  const storageCategories = [
    { name: "Recordings", size: 35.2, color: "#3B82F6" },
    { name: "Incidents", size: 5.8, color: "#EF4444" },
    { name: "System", size: 1.5, color: "#6B7280" },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft width={24} height={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Storage</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Storage overview */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Storage Overview</Text>
          <View style={styles.storageInfo}>
            <HardDrive width={16} height={16} color="#666" />
            <Text style={styles.storageInfoText}>{totalStorage} GB</Text>
          </View>
        </View>

        {/* Storage meter */}
        <View style={styles.storageMeter}>
          <View style={styles.storageBar}>
            <View style={[styles.storageBarFill, { width: `${usedPercentage}%` }]} />
          </View>
          <View style={styles.storageStats}>
            <Text style={styles.storageStatText}>Used: {usedStorage.toFixed(1)} GB</Text>
            <Text style={styles.storageStatText}>Free: {freeStorage.toFixed(1)} GB</Text>
          </View>
        </View>

        {/* Storage breakdown */}
        <Text style={styles.breakdownTitle}>Storage Breakdown</Text>
        <View style={styles.breakdownList}>
          {storageCategories.map((category, index) => (
            <View key={index} style={styles.breakdownItem}>
              <View style={styles.breakdownHeader}>
                <Text style={styles.breakdownName}>{category.name}</Text>
                <Text style={styles.breakdownSize}>{category.size} GB</Text>
              </View>
              <View style={styles.breakdownBar}>
                <View
                  style={[
                    styles.breakdownBarFill,
                    {
                      width: `${(category.size / usedStorage) * 100}%`,
                      backgroundColor: category.color,
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Storage management */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage Management</Text>
        <View style={styles.managementButtons}>
          <TouchableOpacity style={styles.managementButton}>
            <View style={styles.managementButtonContent}>
              <Trash2 width={20} height={20} color="#666" />
              <Text style={styles.managementButtonText}>Clear All Recordings</Text>
            </View>
            <Text style={styles.managementButtonSize}>35.2 GB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.managementButton}>
            <View style={styles.managementButtonContent}>
              <Trash2 width={20} height={20} color="#666" />
              <Text style={styles.managementButtonText}>Clear Cached Data</Text>
            </View>
            <Text style={styles.managementButtonSize}>1.2 GB</Text>
          </TouchableOpacity>
        </View>
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
          <User width={24} height={24} color="#000" />
          <Text style={styles.navButtonText}>Profile</Text>
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
  section: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  storageInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  storageInfoText: {
    fontSize: 14,
    color: "#666",
  },
  storageMeter: {
    marginBottom: 24,
  },
  storageBar: {
    height: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 8,
  },
  storageBarFill: {
    height: "100%",
    backgroundColor: "#3B82F6",
    borderRadius: 999,
  },
  storageStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  storageStatText: {
    fontSize: 14,
    color: "#666",
  },
  breakdownTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  breakdownList: {
    gap: 16,
  },
  breakdownItem: {
    gap: 4,
  },
  breakdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  breakdownName: {
    fontSize: 14,
  },
  breakdownSize: {
    fontSize: 14,
    color: "#666",
  },
  breakdownBar: {
    height: 8,
    backgroundColor: "#f5f5f5",
    borderRadius: 999,
    overflow: "hidden",
  },
  breakdownBarFill: {
    height: "100%",
    borderRadius: 999,
  },
  managementButtons: {
    marginTop: 16,
    gap: 12,
  },
  managementButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
  },
  managementButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  managementButtonText: {
    fontSize: 16,
  },
  managementButtonSize: {
    fontSize: 14,
    color: "#666",
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
})

export default StorageScreen

