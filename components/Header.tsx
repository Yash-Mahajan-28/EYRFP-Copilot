'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, HelpCircle, User, X } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserName(user.name || 'User');
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  const notifications = [
    { id: 1, title: 'New RFP Available', message: 'Power Cable Supply - Due in 15 days', time: '2 hours ago', unread: true },
    { id: 2, title: 'Technical Review Complete', message: 'RFP-2024-003 specs matched at 94%', time: '5 hours ago', unread: true },
    { id: 3, title: 'Pricing Updated', message: 'New bulk discount rules applied', time: '1 day ago', unread: true },
    { id: 4, title: 'RFP Deadline Approaching', message: 'Industrial Cables RFP - Due in 3 days', time: '2 days ago', unread: false },
    { id: 5, title: 'System Update', message: 'AI agents performance improved', time: '3 days ago', unread: false },
  ];

  return (
    <header className="bg-white border-b border-gray-200 h-16 fixed top-0 right-0 left-48 z-10 flex items-center justify-end px-6">
      {/* Right section only */}
      <div className="flex items-center gap-4">
        {/* Help/About Button */}
        <button 
          onClick={() => router.push('/about')}
          className="text-gray-600 hover:text-gray-800 transition-colors"
          title="About"
        >
          <HelpCircle size={20} />
        </button>

        {/* Notifications Button */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="text-gray-600 hover:text-gray-800 relative transition-colors"
            title="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${notification.unread ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-gray-200">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Menu Button */}
        <div className="relative">
          <button 
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="text-gray-600 hover:text-gray-800 transition-colors"
            title="User Menu"
          >
            <User size={20} />
          </button>

          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <p className="font-semibold text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500 mt-1">Welcome back!</p>
              </div>
              <div className="p-2">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  Account Preferences
                </button>
                <button 
                  onClick={() => {
                    localStorage.removeItem('user');
                    router.push('/login');
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
