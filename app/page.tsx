"use client";

import React, { useState } from 'react';
import Header from '../component/Header';
import SuccessModal from '../component/SuccessModal';

const App: React.FC = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const handlePurchaseClick = () => {
    setShowPurchaseModal(true);
  };

  const handleCloseModal = () => {
    setShowPurchaseModal(false);
  };

  return (
    <div>
      <title>Cywirght shop</title>
      {showPurchaseModal && (
        <SuccessModal
          title="購入成功"
          message="購入しました。"
          onClose={handleCloseModal}
        />
      )}
      <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Cywirght shop!</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-center">
                <img src="/apple.png" alt="apple" className="w-full w-64 h-64 object-cover mx-auto" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">apple</h2>
                <p className="text-gray-700">美味しいりんご</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">300円</span>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={handlePurchaseClick}>購入</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-center">
                <img src="/apple.png" alt="apple" className="w-full w-64 h-64 object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">apple</h2>
                <p className="text-gray-700">美味しいりんご</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">300円</span>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={handlePurchaseClick}>購入</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-center">
                <img src="/apple.png" alt="apple" className="w-full w-64 h-64 object-cover" />
              </div>
              <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">apple</h2>
                <p className="text-gray-700">美味しいりんご</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">300円</span>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={handlePurchaseClick}>購入</button>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-center">
                <img src="/apple.png" alt="apple" className="w-full w-64 h-64 object-cover" />
              </div>
              <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">apple</h2>
                <p className="text-gray-700">美味しいりんご</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">300円</span>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={handlePurchaseClick}>購入</button>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-center">
                <img src="/apple.png" alt="apple" className="w-full w-64 h-64 object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">apple</h2>
                <p className="text-gray-700">美味しいりんご</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">300円</span>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={handlePurchaseClick}>購入</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-center">
                <img src="/apple.png" alt="apple" className="w-full w-64 h-64 object-cover" />
              </div>
              <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">apple</h2>
                <p className="text-gray-700">美味しいりんご</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">300円</span>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={handlePurchaseClick}>購入</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;
