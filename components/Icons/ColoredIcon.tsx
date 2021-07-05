import React from "react";
import { icon } from "../../helpers/styles";

import PaymentsIcon from "./ColoredIcons/PaymentsIcon";
import PaymentLinksIcon from "./ColoredIcons/PaymentLinksIcon";
import InvoicingIcon from "./ColoredIcons/InvoicingIcon";
import BillingIcon from "./ColoredIcons/BillingIcon";

/* export type ColoredIconType =
  | "payments"
  | "paymentLinks"
  | "invoicing"
  | "billing"
  | "connect"
  | "terminal"; */

let coloredIcons: { [iconType: string]: React.FC } = {
  payments: PaymentsIcon,
  paymentLinks: PaymentLinksIcon,
  invoicing: InvoicingIcon,
  billing: BillingIcon,
};

export declare interface ColoredIconProps {
  iconType: string;
}

export default function ColoredIcon({
  iconType,
}: ColoredIconProps): JSX.Element {
  if (coloredIcons[iconType]) {
    return (
      <>
        <div>{React.createElement(coloredIcons[iconType])}</div>
        <style jsx>{`
          div {
            width: ${icon.iconSize.medium}px;
            height: ${icon.iconSize.medium}px;
          }
        `}</style>
      </>
    );
  }
  return <></>;
}
