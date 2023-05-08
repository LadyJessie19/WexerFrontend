import React from "react";

type NavScreenProps = {
  link1: string;
  link2: string;
  link3: string;
};

const NavScreen: React.FC<NavScreenProps> = ({ link1, link2, link3 }) => {
  return (
    <nav>
      <ul>
        <li>{link1}</li>
        <li>{link2}</li>
        <li>{link3}</li>
      </ul>
    </nav>
  );
};

export default NavScreen;
