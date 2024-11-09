"use client";

import { useAuthStore } from "@/store/authStore";
import { signOut } from "next-auth/react";

export default function HomePage() {
  const session = useAuthStore((state) => state.session);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Dashboard</h1>
          <button
            onClick={() => signOut()}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample Card 1 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Statistics</h2>
            <p className="text-gray-600">Some sample statistics content here</p>
          </div>

          {/* Sample Card 2 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
            <p className="text-gray-600">Your recent activities will appear here</p>
          </div>

          {/* Sample Card 3 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Profile</h2>
            <p className="text-gray-600">
              {session?.user?.email || "No user logged in"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
