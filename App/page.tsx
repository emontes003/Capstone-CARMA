"use client"

import Image from "next/image"
import { ChevronDown, Home, Bell, User } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CarmaDashcam() {
  const [selectedCamera, setSelectedCamera] = useState("Front View")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const cameraOptions = ["Front View", "Back Right", "Back Left"]

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const selectCamera = (camera: string) => {
    setSelectedCamera(camera)
    setDropdownOpen(false)
  }

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold">CARMA</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 flex flex-col gap-3">
        {/* Menu options */}
        <Link href="/history" className="w-full py-4 px-4 border border-gray-200 rounded-xl text-center">
          History
        </Link>
        <Link href="/recordings" className="w-full py-4 px-4 border border-gray-200 rounded-xl text-center">
          Recordings
        </Link>
        <Link href="/settings" className="w-full py-4 px-4 border border-gray-200 rounded-xl text-center">
          Settings
        </Link>
        <Link href="/storage" className="w-full py-4 px-4 border border-gray-200 rounded-xl text-center">
          Storage
        </Link>

        {/* Cameras section */}
        <div className="mt-2">
          <p className="text-gray-700 mb-2">Cameras</p>
          <div className="relative">
            <button
              className="w-full py-4 px-4 border border-gray-200 rounded-xl flex justify-between items-center"
              onClick={toggleDropdown}
            >
              <span className="text-gray-500">{selectedCamera}</span>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                {cameraOptions.map((camera) => (
                  <button
                    key={camera}
                    className="w-full py-3 px-4 text-left hover:bg-gray-50 text-gray-700"
                    onClick={() => selectCamera(camera)}
                  >
                    {camera}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Camera view */}
        <div className="mt-2 flex-1 relative rounded-lg overflow-hidden">
          <Image
            src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(selectedCamera)}`}
            alt={`${selectedCamera} dashcam view`}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-around items-center py-4 border-t border-gray-200">
        <Link href="/dashboard" className="flex flex-col items-center gap-1">
          <Home className="h-6 w-6" />
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link href="/notifications" className="flex flex-col items-center gap-1">
          <Bell className="h-6 w-6" />
          <span className="text-xs">Notifications</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1">
          <User className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  )
}

