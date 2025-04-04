import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp, StackActions } from "@react-navigation/native";
import {
  ArrowLeft,
  ChevronRight,
  Camera,
  Bell,
  HardDrive,
  Shield,
  HelpCircle,
  Info,
  Home as HomeIcon,
  User,
} from "react-native-feather";
import { RootStackParamList } from "../App"; // Adjust the path if you defined this type elsewhere

// Define the types for your settings sections
interface SettingItem {
  name: string;
  value: string;
}

interface SettingSection {
  title: string;
  icon: JSX.Element;
  data: SettingItem[];
}

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const settingsSections: SettingSection[] = [
    {
      title: "Camera Settings",
      icon: <Camera width={20} height={20} color="#666" />,
      data: [
        { name: "Video Quality", value: "1080p" },
        { name: "Recording Mode", value: "Continuous" },
        { name: "Audio Recording", value: "On" },
      ],
    },
    {
      title: "Notifications",
      icon: <Bell width={20} height={20} color="#666" />,
      data: [
        { name: "Incident Alerts", value: "On" },
        { name: "Storage Warnings", value: "On" },
        { name: "App Updates", value: "Off" },
      ],
    },
    {
      title: "Storage",
      icon: <HardDrive width={20} height={20} color="#666" />,
      data: [
        { name: "Auto Delete", value: "After 30 days" },
        { name: "Cloud Backup", value: "Off" },
      ],
    },
    {
      title: "Privacy & Security",
      icon: <Shield width={20} height={20} color="#666" />,
      data: [
        { name: "Location Tracking", value: "On" },
        { name: "Data Encryption", value: "On" },
      ],
    },
    {
      title: "Help & Support",
      icon: <HelpCircle width={20} height={20} color="#666" />,
      data: [
        { name: "FAQ", value: "" },
        { name: "Contact Support", value: "" },
      ],
    },
    {
      title: "About",
      icon: <Info width={20} height={20} color="#666" />,
      data: [
        { name: "App Version", value: "2.5.1" },
        { name: "Terms of Service", value: "" },
        { name: "Privacy Policy", value: "" },
      ],
    },
  ];

  // Explicitly type the parameter as having a section of type SettingSection
  const renderSectionHeader = ({ section }: { section: SettingSection }) => (
    <View style={styles.sectionHeader}>
      {section.icon}
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  // Type the item as SettingItem
  const renderItem = ({ item }: { item: SettingItem }) => (
    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingName}>{item.name}</Text>
      <View style={styles.settingValueContainer}>
        {item.value ? <Text style={styles.settingValue}>{item.value}</Text> : null}
        <ChevronRight width={16} height={16} color="#ccc" />
      </View>
    </TouchableOpacity>
  );

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
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Settings list */}
      <SectionList
        sections={settingsSections}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        contentContainerStyle={styles.settingsList}
        stickySectionHeadersEnabled={false}
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
  settingsList: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
    color: "#333",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  settingName: {
    fontSize: 16,
    color: "#333",
  },
  settingValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValue: {
    fontSize: 14,
    color: "#666",
    marginRight: 8,
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

export default SettingsScreen;
