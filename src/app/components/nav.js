const Nav = ({ text, textLink, textTag, withIcons = true, ...other }) => (
  <nav {...other}>
    <div className="fluid:h-48-64 flex items-center justify-between text-zircon ~px-8/12" />
  </nav>
);

export default Nav;
