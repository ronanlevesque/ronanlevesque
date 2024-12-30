import dynamic from 'next/dynamic';

interface SvgProps extends React.HTMLAttributes<SVGElement> {
  className?: string;
  name: string;
}

const Svg = ({ name, ...other }: SvgProps) => {
  const ImportedSvg = dynamic(() => import(`./svg/${name}`));
  return <ImportedSvg {...other} />;
};

export default Svg;
