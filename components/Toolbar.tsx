import { useState } from "react";
import { MenuType, Menu } from "./Menu";
import { CSSTransition } from "react-transition-group";
import { typography } from "../helpers/styles";

let menuTitles: { [k in MenuType]: string } = {
  products: "Products",
  developers: "Developers",
  "use-cases": "Use cases",
  company: "Company",
  pricing: "Pricing",
};

export function Toolbar() {
  let [menuType, setMenuType] = useState<MenuType>("products");
  let [isMenuShown, setIsMenuShown] = useState(false);
  function onMouseLeave() {
    setIsMenuShown(false);
  }
  return (
    <ul className="toolbar">
      {Object.entries(menuTitles).map(([type, title]) => (
        <li
          onMouseEnter={() => {
            setMenuType(type as MenuType);
            setIsMenuShown(true);
          }}
          key={type}
        >
          {title}
        </li>
      ))}
      <CSSTransition
        in={isMenuShown}
        timeout={250}
        classNames="menu"
        mountOnEnter
        unmountOnExit
      >
        <Menu type={menuType} onMouseLeave={onMouseLeave} />
      </CSSTransition>
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
          font-weight: ${typography.fontWeight.semiBold};
          font-size: ${typography.fontSize.normal};
          padding: 10px 20px;
          transition: opacity 150ms ease;
          color: white;
        }
        .toolbar > li:hover {
          opacity: 0.6;
        }
        :global(.menu-enter) {
          opacity: 0;
        }
        :global(.menu-enter-active) {
          opacity: 1;
          transition: opacity 250ms ease-out;
        }
        :global(.menu-exit) {
          opacity: 1;
        }
        :global(.menu-exit-active) {
          opacity: 0;
          transition: opacity 250ms ease-in;
        }
      `}</style>
    </ul>
  );
}
