import Link from "next/link"
import { ArrowLeft, Calendar, Search } from "lucide-react"

export default function HistoryPage() {
  // Sample history data
  const historyItems = [
    { id: 1, date: "March 5, 2025", time: "9:30 AM", duration: "15:20", type: "Incident", location: "Highway 101" },
    { id: 2, date: "March 4, 2025", time: "2:45 PM", duration: "3:10", type: "Manual", location: "Downtown" },
    { id: 3, date: "March 3, 2025", time: "11:15 AM", duration: "8:45", type: "Incident", location: "Parking Lot" },
    { id: 4, date: "March 2, 2025", time: "5:20 PM", duration: "1:30", type: "Manual", location: "Gas Station" },
    { id: 5, date: "March 1, 2025", time: "8:00 AM", duration: "22:15", type: "Trip", location: "Interstate 5" },
  ]

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Link href="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">History</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Search and filter */}
      <div className="p-4 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search recordings"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
          />
        </div>
        <button className="p-2 border border-gray-200 rounded-lg">
          <Calendar className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* History list */}
      <div className="flex-1 overflow-auto px-4">
        {historyItems.map((item) => (
          <div key={item.id} className="border-b border-gray-100 py-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{item.date}</h3>
                <p className="text-sm text-gray-500">
                  {item.time} • {item.duration}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  item.type === "Incident"
                    ? "bg-red-100 text-red-800"
                    : item.type === "Manual"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                }`}
              >
                {item.type}
              </span>
            </div>
            <p className="text-sm text-gray-600">{item.location}</p>
          </div>
        ))}
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

