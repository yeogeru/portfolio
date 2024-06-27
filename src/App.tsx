import React from 'react';

const App = () => {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="w-full h-14 fixed bg-slate-500">
        <div className="bg-slate-600 w-3/4 max-sm:w-full h-full mx-auto">
          <p>이곳은 바로가기가 들어갈 자리입니다.</p>
        </div>
      </div>
      <div className="bg-gray-400 w-3/4 max-sm:w-full h-full pt-14 mx-auto">
        <div className="w-full h-96 bg-gray-200 dark:bg-zinc-800 dark:text-white">
          <p>이곳은 소개 글이 들어갈 자리입니다.</p>
        </div>
        <div className='w-full h-96 bg-gray-400'>
          <p>이곳은 다른 컨텐츠가 들어갈 자리입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
