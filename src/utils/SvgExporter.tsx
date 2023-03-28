import { SVGProps, FC } from 'react';
import { ReactComponent as MemorySvg } from '../images/icon-memory.svg';
import { ReactComponent as ReactionSvg } from '../images/icon-reaction.svg';
import { ReactComponent as VerbalSvg } from '../images/icon-verbal.svg';
import { ReactComponent as VisualSvg } from '../images/icon-visual.svg';

type SvgMapType = { [key: number]: FC<SVGProps<SVGElement>> };
type SvgExporterPropsType = { svgName: number };

const svgMap: SvgMapType = [ReactionSvg, MemorySvg, VerbalSvg, VisualSvg];

const SvgExporter: FC<SvgExporterPropsType> = ({
  svgName,
}: SvgExporterPropsType): JSX.Element => {
  let Logo = svgMap[svgName];

  return <Logo arial-role="result icon" />;
};

export default SvgExporter;
