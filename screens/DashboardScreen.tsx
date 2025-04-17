// DashboardScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ArrowLeft, Battery, Clock, MapPin, Play, Video as VideoIcon, Home as HomeIcon, Bell, User,} from "react-native-feather";
import { RootStackParamList } from "../App";

import Video from "react-native-video";
import { WebView } from "react-native-webview";

import storage from "@react-native-firebase/storage";
import database from "@react-native-firebase/database";

const HOST = Platform.OS === "android" ? "10.0.2.2" : "192.168.1.123";
const STREAM_URL = `http://${HOST}:5000/video`;

const DashboardScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isLive, setIsLive] = useState<boolean | null>(null);
  const [dashboardData, setDashboardData] = useState<any>(null);

  const getColorForType = (type: string) => {
    switch (type) {
      case "braking": return "#EF4444";
      case "trip": return "#3B82F6";
      case "camera": return "#22C55E";
      default: return "#999";
    }
  };

  useEffect(() => {
    const fetchStreamOrFallback = async () => {
      try {
        const liveUrl = await storage().ref("videos/live-stream.m3u8").getDownloadURL();
        setVideoUrl(liveUrl);
        setIsLive(true);
        console.log("📡 Live stream loaded");
      } catch {
        try {
          const fallbackUrl = await storage().ref("videos/sample-video.mp4").getDownloadURL();
          setVideoUrl(fallbackUrl);
          setIsLive(false);
          console.log("📼 Fallback video loaded");
        } catch (err) {
          console.error("❌ Video load failed:", err);
        }
      }
    };

    fetchStreamOrFallback();

    const dashboardRef = database().ref("/dashboard");
    const unsubscribe = dashboardRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setDashboardData(data);
      console.log("📊 Dashboard data updated:", data);
    });

    return () => dashboardRef.off("value", unsubscribe);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}> 
          <ArrowLeft width={24} height={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView>
        {/* Video Feed */}
        <View style={styles.cameraContainer}>
          {isLive ? (
            <WebView
              source={{ uri: STREAM_URL }}
              style={styles.cameraImage}
              javaScriptEnabled
              domStorageEnabled
              allowsInlineMediaPlayback
              scalesPageToFit
            />
          ) : videoUrl ? (
            <Video
              source={{ uri: videoUrl }}
              style={styles.cameraImage}
              controls
              resizeMode="cover"
              paused={false}
            />
          ) : (
            <Text style={{ textAlign: "center", marginTop: 16 }}>Loading video...</Text>
          )}

          {isLive !== null && (
            <View style={styles.liveIndicator}>
              <View style={styles.liveIndicatorDot} />
              <Text style={styles.liveIndicatorText}>{isLive ? "LIVE" : "RECORDED"}</Text>
            </View>
          )}

          <TouchableOpacity style={styles.playButton}>
            <Play width={20} height={20} color="#000" fill="#000" />
          </TouchableOpacity>
        </View>

        {/* Status Cards */}
        <View style={styles.cardsContainer}>
          {[{
            title: "Battery", icon: <Battery width={20} height={20} color="#22C55E" />, 
            value: `${dashboardData?.battery?.level ?? "—"}%`, sub: dashboardData?.battery?.remaining
          },{
            title: "Location", icon: <MapPin width={20} height={20} color="#3B82F6" />, 
            value: dashboardData?.location?.current, sub: dashboardData?.location?.label
          },{
            title: "Recording", icon: <VideoIcon width={20} height={20} color="#8B5CF6" />, 
            value: dashboardData?.recording?.mode, sub: dashboardData?.recording?.quality
          },{
            title: "Drive Time", icon: <Clock width={20} height={20} color="#F97316" />, 
            value: dashboardData?.driveTime?.duration, sub: dashboardData?.driveTime?.label
          }].map((item, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.cardHeader}>{item.icon}<Text style={styles.cardTitle}>{item.title}</Text></View>
              <Text style={styles.cardValue}>{item.value || "—"}</Text>
              <Text style={styles.cardSubtext}>{item.sub || "—"}</Text>
            </View>
          ))}
        </View>

        {/* Activity Feed */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            {dashboardData?.recentActivity?.map((item: any, index: number) => (
              <View key={index} style={styles.activityItem}>
                <View style={[styles.activityIndicator, { backgroundColor: getColorForType(item.type) }]} />
                <View>
                  <Text style={styles.activityName}>{item.text}</Text>
                  <Text style={styles.activityTime}>{item.time}{item.location ? ` • ${item.location}` : ""}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

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
    backgroundColor: "#fff" 
  },

  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingHorizontal: 16, 
    paddingVertical: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: "#e5e5e5" 
  },

  backButton: { 
    padding: 8 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: "bold" 
  },

  cameraContainer: { 
    margin: 16, 
    borderRadius: 12, 
    overflow: "hidden", 
    backgroundColor: "#000" 
  },

  cameraImage: { 
    width: "100%", 
    height: 200 
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
    alignItems: "center" 
  },

  liveIndicatorDot: { 
    width: 8, 
    height: 8, 
    backgroundColor: "#fff", 
    borderRadius: 4, 
    marginRight: 4 
  },

  liveIndicatorText: { 
    color: "#fff", 
    fontSize: 12, 
    fontWeight: "500" 
  },

  playButton: { 
    position: "absolute", 
    bottom: 12, 
    right: 12, 
    backgroundColor: "rgba(255,255,255,0.8)", 
    borderRadius: 20, 
    width: 40, 
    height: 40, 
    justifyContent: "center", 
    alignItems: "center" 
  },

  cardsContainer: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    paddingHorizontal: 16, 
    paddingBottom: 8 
  },

  card: { 
    width: "47%", 
    borderWidth: 1, 
    borderColor: "#e5e5e5", 
    borderRadius: 10, 
    padding: 16, 
    marginBottom: 16 
  },
  
  cardHeader: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 8, 
    marginBottom: 8 
  },

  cardTitle: { 
    fontSize: 16, 
    fontWeight: "500" 
  },

  cardValue: { 
    fontSize: 20, 
    fontWeight: "bold" 
  },

  cardSubtext: { 
    fontSize: 12, 
    color: "#666" 
  },

  activitySection: { 
    padding: 16 
  },

  activityTitle: { 
    fontSize: 18, 
    fontWeight: "500", 
    marginBottom: 12 
  },

  activityList: { 
    gap: 12 
  },
  
  activityItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 12, 
    padding: 12, 
    borderWidth: 1, 
    borderColor: "#e5e5e5", 
    borderRadius: 8 
  },

  activityIndicator: { 
    width: 8, 
    height: 8, 
    borderRadius: 4 
  },

  activityName: { 
    fontSize: 16, 
    fontWeight: "500" 
  },

  activityTime: { 
    fontSize: 12, 
    color: "#666" 
  },

  bottomNav: { 
    flexDirection: "row", 
    borderTopWidth: 1, 
    borderTopColor: "#e5e5e5", 
    paddingVertical: 16 
  },

  navButton: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },

  navButtonText: { 
    fontSize: 12, 
    marginTop: 4 
  },
});

export default DashboardScreen;
