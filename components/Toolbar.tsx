import { useState } from "react";
import { MenuType, Menu } from "./Menu";

let menuTitles: { [k in MenuType]: string } = {
  products: "Products",
  developers: "Developers",
  "use-cases": "Use cases",
  company: "Company",
  pricing: "Pricing",
};

export function Toolbar() {
  let [menuType, setMenuType] = useState<MenuType | null>(null);
  function onMouseLeave() {
    setMenuType(null);
  }
  return (
    <ul className="toolbar">
      {Object.entries(menuTitles).map(([type, title]) => (
        <li
          onMouseEnter={() => setMenuType(type as MenuType)}
          onMouseLeave={onMouseLeave}
          key={type}
        >
          {title}
        </li>
      ))}
      {menuType && <Menu type={menuType} />}
      <style jsx>{`
        .toolbar {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .toolbar > li {
          font-weight: 500;
          padding: 10px 20px;
          transition: opacity 150ms ease;
        }
        .toolbar > li:hover {
          opacity: 0.6;
        }
      `}</style>
    </ul>
  );
}
