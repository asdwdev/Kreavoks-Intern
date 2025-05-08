import React, { useState } from 'react';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('id');

  // const handleLanguageChange = (lang) => {
  //   setLanguage(lang);
  //   // Tambahkan logika untuk mengubah bahasa aplikasi Anda di sini
  // };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span className="text-xl mr-2">
            {language === 'id' ? '🇮🇩' : '🇬🇧'}
          </span>
          {language.toUpperCase()}
        </button>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <button
            // onClick={() => handleLanguageChange('id')}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            role="menuitem"
          >
            <span className="text-xl mr-2">🇮🇩</span>
            Indonesia
          </button>
          <button
            // onClick={() => handleLanguageChange('gb')}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            role="menuitem"
          >
            <span className="text-xl mr-2">🇬🇧</span>
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
