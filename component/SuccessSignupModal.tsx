import React from 'react';

const SuccessSignupModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-gray-200 p-8 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4 text-black">サインアップ成功</h2>
        <p className="text-black">サインアップが成功しました。</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded" onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default SuccessSignupModal;