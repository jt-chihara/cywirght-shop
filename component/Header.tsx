"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/signup');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleLicenseClick = () => {
    router.push('/license');
  };

  const handleTitleClick = () => {
    router.push('/');
  };

  return (
    <header className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={handleTitleClick}>
          Cywirght shop
        </h1>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded mr-2"
            onClick={handleLicenseClick}
            style={{ marginRight: "8px" }}
          >
            利用規約
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded mr-2"
            onClick={handleSignupClick}
            style={{ marginRight: "8px" }}
          >
            新規登録
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
            onClick={handleLoginClick}
          >
            ログイン
          </button>
        </div>
        </div>
    </header>
  );
};

export default Header;
