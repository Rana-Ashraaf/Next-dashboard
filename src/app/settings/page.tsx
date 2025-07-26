'use client';

import DashboardLayout from '@/components/DashboardLayout';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">
            Configure your application settings
          </p>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                Settings page is currently empty
              </div>
              <p className="mt-2 text-sm text-gray-400">
                This page will be populated with configuration options in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
