import { Button, ButtonLink, SectionHeading, SurfaceCard } from "../../components/ui";

const colors = [
  ["Navy", "#050b1f", "--navy"],
  ["Ink", "#0b1e3f", "--ink"],
  ["Blue", "#2f6bff", "--blue"],
  ["Ice", "#6ec9ff", "--ice"],
  ["Soft", "#f5f7fa", "--soft"],
];

export default function StyleGuidePage() {
  return (
    <main className="style-guide">
      <section className="style-guide-hero">
        <div className="shell">
          <span className="kicker">ClipDays UI guide</span>
          <h1>Reusable design foundations.</h1>
          <p>A compact reference for creating consistent ClipDays experiences.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell style-guide-stack">
          <SectionHeading eyebrow="Foundations" title="Colour and type" description="Use the tokens below rather than introducing one-off visual values." />
          <div className="token-grid">
            {colors.map(([name, value, token]) => (
              <SurfaceCard className="token-card" key={token}>
                <span className="token-swatch" style={{ background: value }} />
                <strong>{name}</strong>
                <code>{value}</code>
                <small>{token}</small>
              </SurfaceCard>
            ))}
          </div>
          <div className="type-samples">
            <SurfaceCard><span className="kicker kicker-dark">Display / Grimblade</span><h2>Meaningful moments, beautifully remembered.</h2></SurfaceCard>
            <SurfaceCard><span className="kicker kicker-dark">Body / Inter</span><p>Use Inter for labels, body copy, controls and utility information. It is clear, calm and highly legible.</p></SurfaceCard>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell style-guide-stack">
          <SectionHeading tone="dark" eyebrow="Actions" title="Buttons and labels" description="Use a single primary action per area. Pair it with a quieter secondary action only when necessary." />
          <div className="component-row">
            <Button>Primary action ↗</Button>
            <ButtonLink href="#components" variant="glass">Secondary action</ButtonLink>
            <Button variant="outline">Outlined action</Button>
          </div>
          <div className="label-row"><span className="kicker">Platform label</span><span className="ui-chip">AI enabled</span><span className="ui-chip">Venue-ready</span></div>
        </div>
      </section>

      <section id="components" className="section section-soft">
        <div className="shell style-guide-stack">
          <SectionHeading eyebrow="Components" title="Surfaces and spacing" description="Cards use a restrained radius, soft border and shallow elevation. Keep section rhythm generous." />
          <div className="component-grid">
            <SurfaceCard><span className="kicker kicker-dark">Standard surface</span><h3>Information card</h3><p>Use for content that needs separation without competing with the primary message.</p></SurfaceCard>
            <SurfaceCard tone="dark"><span className="kicker">Dark surface</span><h3>Featured card</h3><p>Use sparingly for emphasis or a focused product message.</p></SurfaceCard>
            <SurfaceCard><span className="kicker kicker-dark">Spacing</span><h3>24 / 48 / 96</h3><p>Use the spacing scale for component padding, grid gaps and section rhythm.</p></SurfaceCard>
          </div>
        </div>
      </section>
    </main>
  );
}
