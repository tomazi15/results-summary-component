import React, { FC } from 'react';

const Button: FC = (): JSX.Element => {
  return (
    <div className="flex justify-center mx-6 rounded-full bg-darkGray">
      <button className="my-4 text-white">Continue</button>
    </div>
  );
};

export default Button;
