import { useState } from "react";
import menu from "./menu.json";

import "./App.css";

const MenuItem = ({ item, index, isSub }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubMenu = () => {
    if (item.subMenu?.length > 0) {
      return item.subMenu.map((item) => (
        <MenuItem key={item.id} item={item} isSub />
      ));
    }

    return null;
  };

  return (
    <div
      style={{ left: isSub ? 0 : `${index * 200}px` }}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
      className={isSub ? "sub-menu" : "main-menu"}>
      <h3 className="menu-item-name">{item.name}</h3>
      {isMenuOpen && <div className="menu-item">{handleSubMenu()}</div>}
    </div>
  );
};

function App() {
  return (
    <div className="menu">
      {menu.map((item, index) => (
        <MenuItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

export default App;
