import { typography } from "../helpers/styles";
import { InlineSpacer } from "./Spacer";
import ColoredIcon, { ColoredIconType } from "./Icons/ColoredIcon";

export declare interface SiteNavigationProps {
  href: string;
  label: string;
  body: string;
  iconType: ColoredIconType;
}

export function SiteNavigation({
  href,
  label,
  body,
  iconType,
}: SiteNavigationProps) {
  return (
    <a href={href} className="site-navigation-container">
      <span className="site-navigation-icon-container">
        <ColoredIcon iconType={iconType} />
      </span>
      <InlineSpacer size={14} axis="horizontal" />
      <span className="menuitem-container">
        <span className="menuitem-label">{label}</span>
        <svg width="10" height="10" aria-hidden="true" viewBox="0 0 10 10">
          <g fillRule="evenodd">
            <path d="M0 5h6.5" className="line-path"></path>
            <path d="M1 1.5L4.25 5 1 8.5" className="tip-path"></path>
          </g>
        </svg>
        <p className="menuitem-body">{body}</p>
      </span>
      <style jsx>{`
        .site-navigation-container {
          display: inline-flex;
          height: 40px;
          align-items: center;
        }
        .site-navigation-icon-container {
          width: 32px;
          height: 32px;
        }
        .menuitem-label {
          font-size: 14px;
          font-weight: ${typography.fontWeight.semiBold};
        }
        .menuitem-body {
          margin: 0;
          font-size: 13px;
          opacity: 0.6;
          transition: opacity 150ms ease;
        }
        svg {
          stroke-width: 1.5px;
          fill: none;
          stroke: currentColor;
          margin-left: 8px;
        }
        .line-path {
          opacity: 0;
          transition: opacity 150ms ease;
        }
        .tip-path {
          opacity: 0;
          transition: opacity 150ms ease;
          transition: transform 150ms ease;
        }
        .site-navigation-container:hover .line-path {
          opacity: 1;
        }
        .site-navigation-container:hover .tip-path {
          opacity: 1;
          transform: translateX(3px);
        }
        .site-navigation-container:hover .menuitem-body {
          opacity: 1;
        }
      `}</style>
    </a>
  );
}
