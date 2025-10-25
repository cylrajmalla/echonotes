import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mic, List, Plus } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navItems = [
    { name: "Notes", icon: List, path: createPageUrl("Notes") },
    { name: "Record", icon: Plus, path: createPageUrl("Record") },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pb-20">
      <style>{`
        :root {
          --primary: #6366f1;
          --primary-dark: #4f46e5;
          --secondary: #ec4899;
          --accent: #8b5cf6;
        }
      `}</style>
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-indigo-100 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Voice Notes
              </h1>
              <p className="text-xs text-gray-500">Record & Remember</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-4">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-indigo-100 z-50">
        <div className="flex justify-around items-center px-6 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-6 py-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                <item.icon className={`w-6 h-6 ${isActive ? "animate-pulse" : ""}`} />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
