import clsx from "clsx";

export declare interface LinkButtonProps {
  variant?: "button" | "link";
  href: string;
  children: React.ReactNode;
  color: string;
  hoverColor?: string | number;
}

export function LinkButton({
  variant = "link",
  href,
  children,
  color,
  hoverColor = 0.6,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "root",
        variant == "button" ? "root-button" : "root-link"
      )}
    >
      {children}
      <svg width="10" height="10" aria-hidden="true" viewBox="0 0 10 10">
        <g fillRule="evenodd">
          <path d="M0 5h7" className="line-path"></path>
          <path d="M1 1l4 4-4 4" className="tip-path"></path>
        </g>
      </svg>
      <style jsx>{`
        .root {
          font-size: 15px;
          padding: 3px 0 6px;
          display: inline-block;
          line-height: 1.6;
        }
        .root:hover {
          opacity: ${typeof hoverColor == "number" ? hoverColor : "1"};
        }
        .root-link {
          font-weight: 500;
          color: ${color};
        }
        .root-link:hover {
          color: ${typeof hoverColor == "string" ? hoverColor : color};
        }
        .root-button {
          padding-left: 16px;
          padding-right: 12px;
          border-radius: 999px;
          background-color: ${color};
          color: white;
        }
        .root-button:hover {
          background-color: ${typeof hoverColor == "string"
            ? hoverColor
            : color};
        }
        svg {
          stroke-width: 2px;
          fill: none;
          stroke: currentColor;
          margin-left: 5px;
        }
        .line-path {
          opacity: 0;
          transition: opacity 150ms ease;
        }
        .tip-path {
          transition: transform 150ms ease;
        }
        .root:hover .line-path {
          opacity: 1;
        }
        .root:hover .tip-path {
          transform: translateX(3px);
        }
      `}</style>
    </a>
  );
}
