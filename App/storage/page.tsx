import Link from "next/link"
import { ArrowLeft, HardDrive, Trash2 } from "lucide-react"

export default function StoragePage() {
  // Sample storage data
  const totalStorage = 64 // GB
  const usedStorage = 42.5 // GB
  const freeStorage = totalStorage - usedStorage
  const usedPercentage = (usedStorage / totalStorage) * 100

  const storageCategories = [
    { name: "Recordings", size: 35.2, color: "bg-blue-500" },
    { name: "Incidents", size: 5.8, color: "bg-red-500" },
    { name: "System", size: 1.5, color: "bg-gray-500" },
  ]

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Link href="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Storage</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Storage overview */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-medium">Storage Overview</h2>
          <div className="flex items-center gap-1 text-gray-500">
            <HardDrive className="h-4 w-4" />
            <span className="text-sm">{totalStorage} GB</span>
          </div>
        </div>

        {/* Storage meter */}
        <div className="mb-6">
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${usedPercentage}%` }}></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-600">Used: {usedStorage.toFixed(1)} GB</span>
            <span className="text-gray-600">Free: {freeStorage.toFixed(1)} GB</span>
          </div>
        </div>

        {/* Storage breakdown */}
        <h3 className="font-medium mb-3">Storage Breakdown</h3>
        <div className="space-y-4">
          {storageCategories.map((category, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm">{category.name}</span>
                <span className="text-sm text-gray-600">{category.size} GB</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${category.color} rounded-full`}
                  style={{ width: `${(category.size / usedStorage) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Storage management */}
      <div className="p-6 border-t">
        <h3 className="font-medium mb-4">Storage Management</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Trash2 className="h-5 w-5 text-gray-500" />
              <span>Clear All Recordings</span>
            </div>
            <span className="text-sm text-gray-500">35.2 GB</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Trash2 className="h-5 w-5 text-gray-500" />
              <span>Clear Cached Data</span>
            </div>
            <span className="text-sm text-gray-500">1.2 GB</span>
          </button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="mt-auto flex justify-around items-center py-4 border-t border-gray-200">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span className="text-xs">Notifications</span>
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

