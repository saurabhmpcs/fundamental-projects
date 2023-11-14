import React from "react";
import MenuItems from "./MenuItems";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItems key={menuItem.id} {...menuItem}></MenuItems>;
      })}
    </div>
  );
};

export default Menu;
