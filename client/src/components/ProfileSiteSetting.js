import React from "react";

const ProfileSiteSetting = function ({ user }) {
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <label htmlFor="notifications" className="font-semibold text-gray-900 text-lg">
                    Notifications:
                </label>
                <input
                    type="checkbox"
                    id="notifications"
                    checked={user.notifications}
                    // onChange={(e) => updateUserInfo('notifications', e.target.checked)}
                    className="rounded focus:ring-blue-500 focus:outline-none transition-colors duration-200"
                />
            </div>
            <div>
                <label htmlFor="siteTheme" className="block font-semibold text-gray-900 text-lg mb-1">
                    Site Theme:
                </label>
                <select
                    id="siteTheme"
                    value={user.siteTheme}
                    // onChange={(e) => updateUserInfo('siteTheme', e.target.value)}
                    className="p-2 text-gray-800 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors duration-200 w-full md:w-auto"
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </div>
    )
}

export default ProfileSiteSetting;