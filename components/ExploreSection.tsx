import { spacing, typography } from "../helpers/styles";

function Header({ title, caption }: { title: string; caption: string }) {
  return (
    <header>
      <h2>{caption}</h2>
      <h1>{title}</h1>
      <style jsx>{`
        header {
          font-family: ${typography.fontFamily};
        }
        h2 {
          font-size: ${typography.fontSize.medium}px;
          font-weight: ${typography.fontWeight.bold};
          color: #635bff;
        }
        h1 {
          font-size: ${typography.fontSize.big}px;
          font-weight: ${typography.fontWeight.bold};
        }
      `}</style>
    </header>
  );
}
function Detail() {}

export function ExploreSection() {
  return (
    <>
      <Header
        title="A technology-first approach to payments and finance"
        caption="Why Stripe"
      />
    </>
  );
}
