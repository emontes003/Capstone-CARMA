import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Battery, Clock, MapPin, Play, Video } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Link href="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Live camera view */}
      <div className="relative">
        <Image
          src="/placeholder.svg?height=200&width=400&text=Live%20Camera%20View"
          alt="Live camera view"
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          LIVE
        </div>
        <button className="absolute bottom-3 right-3 bg-white/80 p-2 rounded-full">
          <Play className="h-5 w-5 fill-black" />
        </button>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Battery className="h-5 w-5 text-green-500" />
            <h3 className="font-medium">Battery</h3>
          </div>
          <div className="text-2xl font-bold">85%</div>
          <div className="text-xs text-gray-500">4.5 hours remaining</div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium">Location</h3>
          </div>
          <div className="text-sm font-medium">Highway 101</div>
          <div className="text-xs text-gray-500">San Francisco, CA</div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Video className="h-5 w-5 text-purple-500" />
            <h3 className="font-medium">Recording</h3>
          </div>
          <div className="text-sm font-medium">Continuous</div>
          <div className="text-xs text-gray-500">1080p @ 30fps</div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-orange-500" />
            <h3 className="font-medium">Drive Time</h3>
          </div>
          <div className="text-sm font-medium">2h 15m</div>
          <div className="text-xs text-gray-500">Today</div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="p-4">
        <h2 className="font-medium mb-3">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div>
              <div className="font-medium">Sudden Braking Detected</div>
              <div className="text-xs text-gray-500">10:23 AM • Highway 101</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <div className="font-medium">Trip Started</div>
              <div className="text-xs text-gray-500">9:45 AM • Home</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <div className="font-medium">Camera Connected</div>
              <div className="text-xs text-gray-500">9:44 AM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="mt-auto flex justify-around items-center py-4 border-t border-gray-200">
        <Link href="/dashboard" className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
          <span className="text-xs font-medium">Dashboard</span>
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

