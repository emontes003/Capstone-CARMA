import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronRight, LogOut, Settings, Shield, HelpCircle } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Link href="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Profile</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Profile info */}
      <div className="flex items-center gap-4 p-6 border-b">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
          <Image
            src="/placeholder.svg?height=64&width=64&text=JD"
            alt="Profile picture"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500">john.doe@example.com</p>
          <Link href="#" className="text-sm text-blue-500 mt-1 inline-block">
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Vehicle info */}
      <div className="p-4 border-b">
        <h3 className="font-medium mb-3">Vehicle Information</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Vehicle</span>
            <span className="font-medium">Tesla Model 3</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">License Plate</span>
            <span className="font-medium">ABC-1234</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Year</span>
            <span className="font-medium">2023</span>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="flex-1 p-4">
        <div className="space-y-1">
          <Link href="/settings" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-gray-500" />
              <span>Settings</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
          <Link href="#" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-gray-500" />
              <span>Privacy & Security</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
          <Link href="#" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-gray-500" />
              <span>Help & Support</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        </div>
      </div>

      {/* Logout button */}
      <div className="p-4 border-t">
        <button className="w-full flex items-center justify-center gap-2 p-3 text-red-500 hover:bg-red-50 rounded-lg">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
          <span className="text-xs font-medium">Profile</span>
        </Link>
      </div>
    </div>
  )
}

