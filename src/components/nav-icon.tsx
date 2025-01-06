import Svg from '@/components/svg';

type NavIconProps = {
  icon: string;
};

const NavIcon = ({ icon }: NavIconProps) => (
  <Svg
    aria-hidden
    className="pointer-events-none block h-auto ~w-18/24"
    name={icon.toLowerCase()}
  />
);

export default NavIcon;
