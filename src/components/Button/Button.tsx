import React, { FC } from 'react';

const Button: FC = (): JSX.Element => {
  return (
    <div className="flex justify-center mx-10 rounded-full bg-darkGray">
      <button className="my-5 text-white text-xl">Continue</button>
    </div>
  );
};

export default Button;
