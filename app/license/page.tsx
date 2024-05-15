import React from 'react';
import Header from '../../component/Header';

const LicensePage: React.FC = () => {
  return (
    <div>
      <title>Cywirght shop</title>
      <Header />
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">利用規約</h2>
          <p className="text-white">
            このサイトはテスト自動化の学習用の練習サイトです。
            playwrightなどのブラウザテスト自動化を学習したい方が、実際にテストスクリプトを実行するためのサンプルサイトです。
            書籍やブログなどでのサンプルやデモにもお使いいただけます。ライセンスはMIT Licenseです。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-4 text-white">サイトの構成</h3>
          <p className="text-white">ショッピングサイトを模した作りになっています。ログイン・サインアップ・商品の購入のそれぞれのページを用意しています。</p>
          <h3 className="text-xl font-bold mt-8 mb-4 text-white">ご利用上の注意</h3>
          <p className="text-white">
            <strong>入力データについて</strong><br />
            データはブラウザのCookieおよびSession Storage、Local Storageに保存されます。
            DBなどサーバ側での保存はありません。
          </p>
          <p className="text-white">
            負荷テストには利用しないでください。<br />
            このサイトを利用することによって生じた損害などにつきまして<strong>当方は一切の責任を負いません。</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicensePage;
