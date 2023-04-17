import { slide as Menu } from 'react-burger-menu';

const HamburgerMenu = () => {
  const showSettings = (event:any) => {
    event.preventDefault();
  };

  return (
    <Menu>
      <a className="menu-item" href="/">Home</a>
      <a className="menu-item" href="/about">About</a>
      <a className="menu-item" href="/contact">Contact</a>
      <a className="menu-item" href="/settings" onClick={showSettings}>Settings</a>
    </Menu>
  );
};

export default HamburgerMenu;