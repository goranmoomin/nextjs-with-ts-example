export function Toolbar() {
  return (
    <ul className="toolbar">
      <li>Products</li>
      <li>Use cases</li>
      <li>Developers</li>
      <li>Company</li>
      <li>Pricing</li>
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
