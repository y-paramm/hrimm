import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/hrimmfavicon.ico" alt="Hrimm favicon" className="w-8 h-8" />
            <span className="text-xl font-bold text-indigo-600">hrimm</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => setActiveTab("home")} className={activeTab === "home" ? "text-indigo-600" : "text-gray-600"}>Home</button>
            <button onClick={() => setActiveTab("admin")} className={activeTab === "admin" ? "text-indigo-600" : "text-gray-600"}>Admin</button>
          </nav>
        </div>
      </header>

      <main>
        {/* Home Page */}
        {activeTab === "home" && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <img src="/hrimmlogo.svg" alt="hrimm Logo" className="mx-auto w-24 h-24 mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to hrimm</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connecting healthcare professionals and AI innovators through dynamic events and networking.
              </p>
              <div className="mt-8 space-x-4">
                <button onClick={() => setActiveTab("admin")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition">
                  Go to Admin Panel
                </button>
                <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md transition">
                  Browse Events
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Admin Panel */}
        {activeTab === "admin" && <AdminPanel />}
      </main>

      <footer className="bg-white border-t mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; 2024 hrimm.com — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function AdminPanel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage users, events, booths, and jobs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p>Users list would be shown here from API.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Event Creation</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Event Title" className="w-full border p-2 rounded" />
              <textarea placeholder="Description" className="w-full border p-2 rounded"></textarea>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Create Event</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
