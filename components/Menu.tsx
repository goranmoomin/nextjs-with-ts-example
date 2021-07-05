import { ReactEventHandler } from "react";
import { SiteNavigation } from "./SiteNavigation";
import { spacing, typography } from "../helpers/styles";

export type MenuType =
  | "products"
  | "use-cases"
  | "developers"
  | "company"
  | "pricing";

export declare interface MenuProps {
  type: MenuType;
  onMouseLeave: ReactEventHandler;
}

export function ProductsMenu() {
  let menuSpacing = spacing(4);
  return (
    <div className="root">
      <section>
        <h1>Payments</h1>
        <ul>
          <li>
            <SiteNavigation
              href="#"
              label="Payments"
              body="Online payments"
              iconType="payments"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Payment Links"
              body="No-code payments"
              iconType="paymentLinks"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Invoicing"
              body="Online invoices"
              iconType="invoicing"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Billing"
              body="Subscription management"
              iconType="billing"
            />
          </li>
        </ul>
      </section>
      <section>
        <h1>Financial Services</h1>
        <ul>
          <li>
            <SiteNavigation
              href="#"
              label="Payments"
              body="Online payments"
              iconType="payments"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Payment Links"
              body="No-code payments"
              iconType="paymentLinks"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Invoicing"
              body="Online invoices"
              iconType="invoicing"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Billing"
              body="Subscription management"
              iconType="billing"
            />
          </li>
        </ul>
      </section>
      <section>
        <h1>Header</h1>
        <ul>
          <li>
            <SiteNavigation
              href="#"
              label="Payments"
              body="Online payments"
              iconType="payments"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Payment Links"
              body="No-code payments"
              iconType="paymentLinks"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Invoicing"
              body="Online invoices"
              iconType="invoicing"
            />
          </li>
          <li>
            <SiteNavigation
              href="#"
              label="Billing"
              body="Subscription management"
              iconType="billing"
            />
          </li>
        </ul>
      </section>
      <style jsx>{`
        .root {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: ${menuSpacing}px;
          padding: ${menuSpacing}px;
          padding-bottom: 0;
        }
        section {
          display: flex;
          flex-direction: column;
        }
        ul {
          list-style: none;
          padding-left: 0;
          min-width: 254px;
        }
        li {
          padding: 0;
          padding-bottom: ${menuSpacing}px;
        }
        h1 {
          margin: 0;
          padding-bottom: ${spacing(2)}px;
          color: #8898aa;
          font-size: 13px;
          line-height: calc(20 / 13);
          font-weight: ${typography.fontWeight.bold};
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

export function Menu({ type, onMouseLeave }: MenuProps) {
  let MenuComponent: React.FunctionComponent;
  let menuWidth: number;
  let menuHeight: number;
  switch (type) {
    case "products":
      MenuComponent = ProductsMenu;
      menuWidth = 858;
      menuHeight = 377;
      break;
    default:
      MenuComponent = function MenuComponent({}) {
        return <>{type}</>;
      };
      menuWidth = 400;
      menuHeight = 200;
      break;
  }

  return (
    <>
      <div className="menu-container">
        <div className="menu" onMouseLeave={onMouseLeave}>
          <div>
            <MenuComponent />
          </div>
        </div>
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
          background-color: white;
          transform: translateX(-50%);
          border-radius: 8px;
          box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
            0 30px 60px -30px rgba(0, 0, 0, 0.3);
          transition: 250ms;
          transition-property: width height;
        }
      `}</style>
      <style jsx>{`
        .menu {
          width: ${menuWidth}px;
          height: ${menuHeight}px;
        }
      `}</style>
    </>
  );
}
