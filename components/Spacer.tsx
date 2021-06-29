export declare interface SpacerProps {
  size: number;
  axis: "vertical" | "horizontal";
}

export function Spacer({ size, axis }: SpacerProps) {
  let width = axis === "vertical" ? 1 : size;
  let height = axis === "horizontal" ? 1 : size;
  return (
    <span className="spacer">
      <style jsx>{`
        .spacer {
          display: block;
          width: ${width}px;
          min-width: ${width}px;
          height: ${height}px;
          min-height: ${height}px;
        }
      `}</style>
    </span>
  );
}

export function InlineSpacer({ size, axis }: SpacerProps) {
  let width = axis === "vertical" ? 1 : size;
  let height = axis === "horizontal" ? 1 : size;
  return (
    <span className="spacer">
      <style jsx>{`
        .spacer {
          display: inline-block;
          width: ${width}px;
          min-width: ${width}px;
          height: ${height}px;
          min-height: ${height}px;
        }
      `}</style>
    </span>
  );
}
