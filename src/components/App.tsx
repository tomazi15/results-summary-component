import React, { FC } from 'react';
import UserSkillResult from './UserSkillResult/UserSkillResult';
import UserTotalResult from './UserTotalResult/UserTotalResult';
import scoreData from '../data/data.json';
import Button from './Button/Button';

const App: FC = (): JSX.Element => {
  return (
    <div className="md:flex md:items-center md:justify-center h-full md:w-full md:absolute">
      <div className="md:w-[430px] md:h-[565px] md:z-10">
        <UserTotalResult />
      </div>

      <div className="md:flex md:flex-col md:justify-evenly md:w-[440px] md:h-[565px] rounded-r-3xl md:shadow-2xl md:relative md:right-6 md:pl-6 md:py-4">
        <UserSkillResult scoreData={scoreData} />
        <Button />
      </div>
    </div>
  );
};

export default App;
