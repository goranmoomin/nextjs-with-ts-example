export type MenuType =
  | "products"
  | "use-cases"
  | "developers"
  | "company"
  | "pricing";

export declare interface MenuProps {
  type: MenuType;
}

export function Menu({ type }: MenuProps) {
  return (
    <>
      <div className="menu-container">
        <div className="menu">{type}</div>
      </div>
      <style jsx>{`
        .menu-container {
          position: absolute;
          top: calc(62px + 14px);
          left: 0;
          right: 0;
          bottom: 0;
        }
        .menu {
          position: absolute;
          top: 0;
          left: 50%;
          width: 180px;
          height: 60px;
          background-color: white;
          transform: translateX(-50%);
          display: grid;
        }
      `}</style>
    </>
  );
}
