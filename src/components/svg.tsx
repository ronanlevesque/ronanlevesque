interface SvgProps extends React.HTMLAttributes<SVGElement> {
  className?: string;
  name: string;
}

const Svg = ({ name, ...other }: SvgProps) => {
  const ImportedSvg = require(`./svg/${name}`).default;
  return <ImportedSvg {...other} />;
};

export default Svg;
