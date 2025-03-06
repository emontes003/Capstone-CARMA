// DashboardScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ArrowLeft, Battery, Clock, MapPin, Play, Video, Home as HomeIcon, Bell, User } from "react-native-feather";
// Import your RootStackParamList type (adjust the path accordingly)
import { RootStackParamList } from "../App"; // or from a types file if you've separated it

const DashboardScreen = () => {
  // Type the navigation prop
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft width={24} height={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView>
        {/* Live camera view */}
        <View style={styles.cameraContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/400x200?text=Live%20Camera%20View" }}
            style={styles.cameraImage}
          />
          <View style={styles.liveIndicator}>
            <View style={styles.liveIndicatorDot} />
            <Text style={styles.liveIndicatorText}>LIVE</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Play width={20} height={20} color="#000" fill="#000" />
          </TouchableOpacity>
        </View>

        {/* Status cards */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Battery width={20} height={20} color="#22C55E" />
              <Text style={styles.cardTitle}>Battery</Text>
            </View>
            <Text style={styles.cardValue}>85%</Text>
            <Text style={styles.cardSubtext}>4.5 hours remaining</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MapPin width={20} height={20} color="#3B82F6" />
              <Text style={styles.cardTitle}>Location</Text>
            </View>
            <Text style={styles.cardValue}>Highway 101</Text>
            <Text style={styles.cardSubtext}>San Francisco, CA</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Video width={20} height={20} color="#8B5CF6" />
              <Text style={styles.cardTitle}>Recording</Text>
            </View>
            <Text style={styles.cardValue}>Continuous</Text>
            <Text style={styles.cardSubtext}>1080p @ 30fps</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Clock width={20} height={20} color="#F97316" />
              <Text style={styles.cardTitle}>Drive Time</Text>
            </View>
            <Text style={styles.cardValue}>2h 15m</Text>
            <Text style={styles.cardSubtext}>Today</Text>
          </View>
        </View>

        {/* Recent activity */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={[styles.activityIndicator, { backgroundColor: "#EF4444" }]} />
              <View>
                <Text style={styles.activityName}>Sudden Braking Detected</Text>
                <Text style={styles.activityTime}>10:23 AM • Highway 101</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={[styles.activityIndicator, { backgroundColor: "#3B82F6" }]} />
              <View>
                <Text style={styles.activityName}>Trip Started</Text>
                <Text style={styles.activityTime}>9:45 AM • Home</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={[styles.activityIndicator, { backgroundColor: "#22C55E" }]} />
              <View>
                <Text style={styles.activityName}>Camera Connected</Text>
                <Text style={styles.activityTime}>9:44 AM</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Dashboard")}>
          <HomeIcon width={24} height={24} color="#000" fill="#000" />
          <Text style={[styles.navButtonText, styles.navButtonTextActive]}>Dashboard</Text>
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
  cameraContainer: {
    position: "relative",
  },
  cameraImage: {
    width: "100%",
    height: 192,
  },
  liveIndicator: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#EF4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
  },
  liveIndicatorDot: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginRight: 4,
  },
  liveIndicatorText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  playButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 16,
  },
  card: {
    width: "47%",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardSubtext: {
    fontSize: 12,
    color: "#666",
  },
  activitySection: {
    padding: 16,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
  },
  activityIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activityName: {
    fontSize: 16,
    fontWeight: "500",
  },
  activityTime: {
    fontSize: 12,
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
  navButtonTextActive: {
    fontWeight: "500",
  },
});

export default DashboardScreen;
