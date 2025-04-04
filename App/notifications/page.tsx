import Link from "next/link"
import { ArrowLeft, Bell, BellOff, Check, Info, Shield, AlertTriangle } from "lucide-react"

export default function NotificationsPage() {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Sudden Braking Detected",
      description: "A sudden braking event was detected on Highway 101.",
      time: "10:23 AM",
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
    },
    {
      id: 2,
      type: "info",
      title: "Recording Started",
      description: "Your dashcam has started recording.",
      time: "9:45 AM",
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 3,
      type: "system",
      title: "Storage Almost Full",
      description: "Your storage is 90% full. Consider clearing some space.",
      time: "Yesterday",
      icon: <Shield className="h-5 w-5 text-orange-500" />,
    },
    {
      id: 4,
      type: "alert",
      title: "Possible Collision Detected",
      description: "A possible collision was detected. Footage has been saved.",
      time: "Yesterday",
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
    },
    {
      id: 5,
      type: "system",
      title: "App Updated",
      description: "CARMA has been updated to version 2.5.1",
      time: "Mar 3",
      icon: <Info className="h-5 w-5 text-green-500" />,
    },
  ]

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Link href="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Notifications</h1>
        <button className="p-2">
          <Check className="h-5 w-5" />
        </button>
      </div>

      {/* Notification filters */}
      <div className="p-4 flex gap-2">
        <button className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium">All</button>
        <button className="px-3 py-1.5 rounded-full text-sm text-gray-500">Alerts</button>
        <button className="px-3 py-1.5 rounded-full text-sm text-gray-500">System</button>
        <button className="px-3 py-1.5 rounded-full text-sm text-gray-500">Info</button>
      </div>

      {/* Notifications list */}
      <div className="flex-1 overflow-auto">
        {notifications.length > 0 ? (
          <div className="divide-y">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-4 flex gap-3">
                <div className="mt-1">{notification.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <BellOff className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="font-medium text-lg mb-2">No Notifications</h3>
            <p className="text-gray-500 text-sm">You don't have any notifications at the moment.</p>
          </div>
        )}
      </div>

      {/* Notification settings */}
      <div className="p-4 border-t">
        <Link href="/settings" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Notification Settings</span>
          </div>
          <ArrowLeft className="h-5 w-5 text-gray-400 rotate-180" />
        </Link>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-around items-center py-4 border-t border-gray-200">
        <Link href="/dashboard" className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H3L12 3L21 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link href="/notifications" className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs font-medium">Notifications</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  )
}

