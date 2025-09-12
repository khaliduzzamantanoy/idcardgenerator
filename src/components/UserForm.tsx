"use client";

import { useState, useRef } from "react";
import { Upload, User } from "lucide-react";
import { UserData } from "@/types";

interface UserFormProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export default function UserForm({ userData, setUserData }: UserFormProps) {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUserData({ ...userData, photo: file });

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, name: event.target.value });
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserData({ ...userData, staffType: event.target.value });
  };

  return (
    <div className="space-y-6">
      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="name"
            value={userData.name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            autoComplete="off"
            spellCheck={false}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Role Dropdown */}
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Role Selection
        </label>
        <select
          id="role"
          value={userData.staffType || "PCA"}
          onChange={handleRoleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
        >
          <option value="PCA">PCA</option>
          <option value="HHA">HHA</option>
          <option value="RN">RN</option>
        </select>
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Photo
        </label>
        <div className="space-y-4">
          {/* Upload Button */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
          >
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
          </div>

          {/* Photo Preview */}
          {photoPreview && (
            <div className="relative">
              <img
                src={photoPreview}
                alt="Profile preview"
                className="w-24 h-24 object-cover rounded-lg mx-auto border-2 border-gray-200"
              />
              <button
                onClick={() => {
                  setUserData({ ...userData, photo: null });
                  setPhotoPreview(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}
