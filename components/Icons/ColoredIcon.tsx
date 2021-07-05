import React from "react";
import { icon } from "../../helpers/styles";

import PaymentsIcon from "./ColoredIcons/PaymentsIcon";
import PaymentLinksIcon from "./ColoredIcons/PaymentLinksIcon";
import InvoicingIcon from "./ColoredIcons/InvoicingIcon";
import BillingIcon from "./ColoredIcons/BillingIcon";

export type ColoredIconType =
  | "payments"
  | "paymentLinks"
  | "invoicing"
  | "billing";

let coloredIcons: { [iconType in ColoredIconType]: React.FunctionComponent } = {
  payments: PaymentsIcon,
  paymentLinks: PaymentLinksIcon,
  invoicing: InvoicingIcon,
  billing: BillingIcon,
};

export declare interface ColoredIconProps {
  iconType: ColoredIconType;
}

export default function ColoredIcon({
  iconType,
}: ColoredIconProps): JSX.Element {
  let Icon = coloredIcons[iconType];
  return (
    <div className="root">
      <Icon />
      <style jsx>{`
        .root {
          width: ${icon.iconSize.medium}px;
          height: ${icon.iconSize.medium}px;
        }
      `}</style>
    </div>
  );
}
