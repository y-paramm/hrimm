import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-indigo-600">hrimm</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => setActiveTab("home")} className={activeTab === "home" ? "text-indigo-600" : "text-gray-600"}>Home</button>
            <button onClick={() => setActiveTab("admin")} className={activeTab === "admin" ? "text-indigo-600" : "text-gray-600"}>Admin</button>
          </nav>
        </div>
      </header>

      <main>
        {/* Admin Panel */}
        {activeTab === "admin" && <AdminPanel />}
      </main>
    </div>
  );
}

function AdminPanel() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage users, events, booths, and jobs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p>Users list would be shown here from API.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
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
