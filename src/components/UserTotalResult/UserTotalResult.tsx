import React, { FC } from 'react';

const UserTotalResult: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col text-center items-center bg-gradient-to-b from-slateBlue to-royalBlue rounded-b-3xl  md:rounded-3xl pt-3 pb-8  md:p-8 md:h-full">
      <div>
        <h2 className="text-lightLavender text-[26px] font-medium">
          Your Result
        </h2>
      </div>
      <div className="flex flex-col justify-center bg-gradient-to-b from-persianBlue to-royalBlue rounded-full h-56 w-56 my-8">
        <h1 className="text-white font-semibold text-7xl">76</h1>
        <p className="text-xl font-semibold text-lightLavender pt-2">of 100</p>
      </div>
      <div className="mx-10 md:mx-2">
        <h1 className="text-white text-[36px] pb-2">Great</h1>
        <p className="text-lightLavender font-light text-2xl text-center">
          Your Scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default UserTotalResult;

// md:justify-evenly
