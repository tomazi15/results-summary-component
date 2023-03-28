import React, { FC } from 'react';
import {
  skillsBackgroundColors,
  skillsFontColors,
} from '../../utils/ColorsMap';
import SvgExporter from '../../utils/SvgExporter';

export type SkillType = {
  category: string;
  score: number;
  icon: string;
};

export type UserSkillResultType = {
  scoreData: SkillType[];
};

export const UserSkillResult: FC<UserSkillResultType> = ({
  scoreData,
}: UserSkillResultType): JSX.Element => {
  return (
    <div className="">
      <h2 className="mx-6 my-6 md:my-0 font-bold text-lg">Summary</h2>
      {scoreData.map((data: SkillType, index: number): JSX.Element => {
        return (
          <div
            key={index}
            className={`flex justify-between font-bold ${skillsBackgroundColors[index]} ${skillsFontColors[index]} bg-opacity-10 h-12 mx-6 p-3 rounded-lg my-4`}
          >
            <div className={`flex items-center gap-2`}>
              <SvgExporter svgName={index} />
              <p>{data.category}</p>
            </div>

            <div className="flex">
              <p className="font-bold">
                {`${data.score}`}
                <span className="text-gray-400"> / 100</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserSkillResult;
