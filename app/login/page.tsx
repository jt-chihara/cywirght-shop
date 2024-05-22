"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../component/Header';
import SuccessModal from '../../component/SuccessModal';

interface IFormInputs {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required('ユーザー名は必須です'),
  password: yup.string().required('パスワードは必須です'),
});

const LoginPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    setShowModal(true);
  };

  return (
    <div>
        <Header/>
        <title>Cywirght shop</title>
        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <SuccessModal
          title="ログイン成功"
          message="ログインに成功しました。"
          onClose={handleCloseModal} />
        </div>
      )}
        <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">ログイン</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                ユーザー名
                </label>
                <input
                type="text"
                id="username"
                {...register('username')}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
                placeholder="ユーザー名を入力"
                />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
            </div>
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                パスワード
                </label>
                <input
                type="password"
                id="password"
                {...register('password')}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                placeholder="パスワードを入力"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
            <div className="flex items-center justify-center">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                ログイン
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  );
};

export default LoginPage;
