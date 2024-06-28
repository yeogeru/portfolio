import React from 'react';

const App = () => {
  return (
    <div className="min-h-[100vh] bg-white dark:bg-zinc-900">
      <div className="w-full h-16 fixed bg-slate-500">
        <div className='w-full max-w-[120rem] h-full flex items-center bg-slate-600 mx-auto px-4'>
          {/* 
              뭘 넣는게 좋을까?
              언어설정, 다크모드, pdf저장?
          */}
          <p>이곳은 바로가기가 들어갈 자리입니다.</p>
          <p className='flex-1'></p>
          <p className=''>그외</p>
        </div>
      </div>
      <div className="w-full max-w-[120rem] h-full bg-gray-400 pt-16 mx-auto">
        <div className="w-full h-96 bg-gray-200 dark:bg-zinc-800 dark:text-white">
          <p>이곳은 소개 글이 들어갈 자리입니다.</p>
          {/* 
              아니 뭐넣냐고

          */}
        </div>
      </div>
    </div>
  );
};

export default App;
