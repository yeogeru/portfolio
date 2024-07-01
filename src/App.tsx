import React from 'react';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const toggleDarkMode = useDarkMode();
  return (
    <div className="min-h-[100vh] bg-white dark:bg-zinc-900">
      <div className="w-full h-16 fixed bg-slate-500">
        <div className="w-full max-w-[120rem] h-full flex items-center bg-slate-600 mx-auto px-4">
          {/* 
              
          */}
          <p>이곳은 바로가기가 들어갈 자리입니다.</p>
          <p className="flex-1"></p>
          <p className="">그외</p>
        </div>
      </div>
      <div className="w-full max-w-[120rem] h-full bg-gray-400 pt-16 mx-auto">
        <div className="w-full h-[100vh] bg-gray-200 dark:bg-zinc-800 dark:text-white">
          <p className="p-4 text-6xl">안녕하세요.</p>
        </div>
      </div>
      <div
        className="bottom-0 right-0 fixed w-8 h-8 bg-black text-white flex justify-center items-center p-4 text-nowrap"
        onClick={toggleDarkMode}
      >
        <p>변경</p>
      </div>
    </div>
  );
};

export default App;
