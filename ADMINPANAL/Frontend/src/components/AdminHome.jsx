import React, { useEffect, useState, useContext } from "react";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import axios from "axios";
import { AppContext } from "../AppContext";

const AdminHome = () => {
  const [response, setResponse] = useState([]);
  const { window, setWindow } = useContext(AppContext);

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/admin/stats");
      setResponse(res.data);
      console.log("Response data:", res.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };
  console.log("Response state:", response.length);

  // Sample stats data
  // Replace these with actual data from your API
  const stats = [
    { title: "Total Users", value: "1,245", icon: Users },
    {
      title: "Messages",
      value: response?.length || 0,
      icon: MessageSquare,
    },
    {
      title: "Revenue",
      value: response?.Revenue?.amount || 0,
      icon: LayoutDashboard,
    },
    {
      title: "Active Sessions",
      value: response?.ActiveSessions?.count || 0,
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Admin Panel
          </h2>
          <nav className="space-y-2">
            <a
              href="#dashboard"
              onClick={() => setWindow("Dashboard")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors 
      ${
        window === "Dashboard"
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600"
      }`}
            >
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </a>

            <a
              href="#users"
              onClick={() => setWindow("Users")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors 
      ${
        window === "Users"
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600"
      }`}
            >
              <Users className="w-5 h-5" /> Users
            </a>

            <a
              href="#messages"
              onClick={() => setWindow("Messages")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors 
      ${
        window === "Messages"
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600"
      }`}
            >
              <MessageSquare className="w-5 h-5" /> Messages
            </a>

            <a
              href="#settings"
              onClick={() => setWindow("Settings")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors 
      ${
        window === "Settings"
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600"
      }`}
            >
              <Settings className="w-5 h-5" /> Settings
            </a>
          </nav>
        </div>

        <button className="flex items-center gap-3 text-red-500 hover:text-red-700">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome, Admin 👋
          </h1>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow hover:scale-105 transition">
            Add New User
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <table className="w-full text-left text-gray-700 dark:text-gray-300">
            <thead>
              <tr>
                <th className="pb-3">User</th>
                <th className="pb-3">Subject</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {response.map((activity) => (
                <tr
                  className="border-t border-gray-200 dark:border-gray-700"
                  key={activity.id}
                >
                  <td className="py-3">{activity.name}</td>
                  <td>{activity.subject}</td>
                  <td>{activity.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
