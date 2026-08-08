import { ContactSection } from "../components/contact-section";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const journey = [
  {
    step: "01",
    label: "Register",
    image: "/assets/journey-register.webp",
    alt: "A ski instructor connecting a guest profile before a session",
    text: "Booking, identity and consent connect before the activity starts.",
  },
  {
    step: "02",
    label: "Capture",
    image: "/assets/journey-capture.webp",
    alt: "An automated camera capturing a skier in a controlled zone",
    text: "The right mix of fixed, PTZ, panoramic and human-operated cameras captures the action.",
  },
  {
    step: "03",
    label: "Process",
    image: "/assets/journey-process.webp",
    alt: "A processing system organizing sports images",
    text: "Content is processed, organized and linked to the correct session and participant.",
  },
  {
    step: "04",
    label: "Deliver",
    image: "/assets/journey-deliver.webp",
    alt: "A guest receiving captured sports memories on a phone",
    text: "Private, branded memories arrive through a simple digital experience.",
  },
  {
    step: "05",
    label: "Relive",
    image: "/assets/journey-relive.webp",
    alt: "A family reliving a ski memory together",
    text: "Guests keep, share and return to the moments that mattered.",
  },
];

const outcomes = [
  {
    step: "01",
    tag: "Memory",
    title: "Guest experience",
    text: "Give every visit a meaningful digital afterlife.",
    image: "/assets/value-experience.webp",
    alt: "A family enjoying a captured mountain memory",
  },
  {
    step: "02",
    tag: "Monetize",
    title: "New revenue",
    text: "Offer memory packages, premium edits, season products and memberships.",
    image: "/assets/value-revenue.webp",
    alt: "A digital memory kiosk at a ski venue",
  },
  {
    step: "03",
    tag: "Amplify",
    title: "Organic reach",
    text: "Turn guest sharing into authentic distribution for your venue.",
    image: "/assets/value-marketing.webp",
    alt: "A guest sharing automatically captured sports content",
  },
  {
    step: "04",
    tag: "Differentiate",
    title: "Premium positioning",
    text: "Turn technology into a service guests can actually feel.",
    image: "/assets/value-premium.webp",
    alt: "A premium resort guest reviewing digital sports memories",
  },
];

const venueTypes = [
  {
    title: "Ski schools",
    label: "Primary launch market",
    image: "/assets/journey-capture.webp",
    className: "venue-card venue-primary",
  },
  {
    title: "Ski resorts",
    label: "Winter destinations",
    image: "/assets/hero-ski.webp",
    className: "venue-card",
  },
  {
    title: "Mountain attractions",
    label: "Summer operations",
    image: "/assets/alpine.webp",
    className: "venue-card",
  },
  {
    title: "Bike parks",
    label: "Trail networks",
    image: "/assets/bike.webp",
    className: "venue-card",
  },
  {
    title: "Surf venues",
    label: "Ocean experiences",
    image: "/assets/surf.webp",
    className: "venue-card",
  },
  {
    title: "Wake parks",
    label: "Controlled courses",
    image: "/assets/wakeboard.webp",
    className: "venue-card",
  },
  {
    title: "Scenic destinations",
    label: "Signature viewpoints",
    image: "/assets/summit.webp",
    className: "venue-card venue-wide",
  },
];

const leadership = [
  {
    name: "Marcel Brünisholz",
    role: "Founder & CEO",
    image: "/assets/marcel.png",
    text: "Vision, strategy, product direction and global partnerships, backed by more than 15 years in mountain experiences.",
  },
  {
    name: "Duncan",
    role: "Co-owner",
    image: "/assets/duncan.png",
    text: "Business strategy, market development, commercial growth and company building.",
  },
  {
    name: "Sven Toller / HelvePark",
    role: "Snow industry partner & advisor",
    image: "/assets/sven.png",
    text: "Swiss ski-industry access, deployment knowledge, mountain operations and resort credibility.",
  },
  {
    name: "Lee / HelveSki",
    role: "China sports & ski market",
    image: "/assets/lee.png",
    text: "Twenty years in the ski industry, including ten years managing a ski school and experience across wider sports venues in China.",
  },
];

const deliveryTeam = [
  {
    name: "Mehidi",
    role: "Lead platform architect",
    image: "/assets/mehidi.png",
    text: "Owns the AI workflow and the platform foundation across processing, storage, payments, APIs and integrations.",
  },
  {
    name: "Andre",
    role: "Lead Backend",
    image: "/assets/andre.png",
    text: "System development, integrations, quality assurance, technical support and continuous delivery.",
  },
  {
    name: "Gina",
    role: "Lead Frontend",
    image: "/assets/gina.png",
    text: "Cloud platform work, integrations, quality assurance and technical delivery.",
  },
  {
    name: "Dhina",
    role: "Lead Designer",
    image: "/assets/dhina.png",
    text: "Design, user experience, visual identity and creative direction.",
  },
  {
    name: "Ray",
    role: "Marketing manager",
    image: "/assets/ray.png",
    text: "Campaigns, content, social media and growth execution.",
  },
  {
    name: "Alit",
    role: "Sales executive",
    image: "/assets/alit.png",
    text: "Sales, partner coordination, local operations and customer communication.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <img src="/assets/hero-ski.webp" alt="ClipDays cameras capturing a skier on a mountain" />
          <div className="hero-shade" />
          <div className="shell hero-content">
            <span className="kicker">The experience layer for sports venues</span>
            <h1>
              The infrastructure powering the future of <em>sports memories.</em>
            </h1>
            <p>
              ClipDays helps venues turn real guest experiences into personal memories, organic marketing and new revenue through one customizable capture-to-delivery platform.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#contact">
                Discuss your venue <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-glass" href="#solution">
                See how it works
              </a>
            </div>
            <div className="proof" aria-label="Platform highlights">
              <span>Start with one zone</span>
              <i />
              <span>Prove guest demand</span>
              <i />
              <span>Scale across the venue</span>
            </div>
          </div>
        </section>

        <section id="why" className="section opportunity">
          <div className="shell split">
            <div>
              <span className="kicker kicker-dark">The opportunity</span>
              <h2>Every venue already creates memories.</h2>
            </div>
            <div className="opportunity-copy">
              <strong>Most disappear when the experience ends.</strong>
              <p>
                ClipDays extends the guest journey beyond the exit gate. Moments that are already happening become something people can own, share and remember.
              </p>
              <blockquote>People do not buy clips. They buy memories.</blockquote>
            </div>
          </div>
        </section>

        <section className="emotion-panel">
          <img src="/assets/emotion-child.webp" alt="A parent helping a child during a first ski lesson" />
          <div className="emotion-shade" />
          <div className="shell emotion-content">
            <span className="kicker">Why it matters</span>
            <h2>First lesson. First turn. First jump.</h2>
            <p>The moments families value most should not depend on somebody remembering to film.</p>
          </div>
        </section>

        <section id="solution" className="section section-soft journey-section">
          <div className="shell">
            <header className="section-heading">
              <span className="kicker kicker-dark">The guest journey</span>
              <h2>From experience to memory, without adding friction.</h2>
              <p>Technology stays in the background. The experience stays in the foreground.</p>
            </header>
            <div className="journey-rail" aria-hidden="true">
              <span>Experience begins</span>
              <i />
              <strong>One continuous flow</strong>
            </div>
            <div className="journey-grid">
              {journey.map((item) => (
                <article className="journey-card" key={item.step}>
                  <div className="journey-image">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="card-index">
                    <b>{item.step}</b>
                  </div>
                  <div className="journey-copy">
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-navy outcomes-section">
          <div className="shell">
            <header className="section-heading section-heading-light">
              <span className="kicker">One visit. Multiple outcomes.</span>
              <h2>Built around the value your venue wants to create.</h2>
            </header>
            <div className="outcome-grid">
              {outcomes.map((item) => (
                <article className="outcome-card" key={item.step}>
                  <div className="outcome-image">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="card-index">
                    <b>{item.step}</b>
                    <span>{item.tag}</span>
                  </div>
                  <div className="outcome-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell custom-layout">
            <div className="custom-intro">
              <span className="kicker kicker-dark">Built around your venue</span>
              <h2>Not one camera. Not one sport. Not one fixed setup.</h2>
              <p>
                ClipDays is a camera-agnostic experience and commercial layer. The capture stack adapts to the environment.
              </p>
            </div>
            <div className="custom-list">
              <article>
                <span>Capture</span>
                <h3>Choose the right inputs</h3>
                <p>Fixed, panoramic, PTZ, action cameras, human creators or partner systems.</p>
              </article>
              <article>
                <span>Experience</span>
                <h3>Choose what guests receive</h3>
                <p>Private clips, family highlights, lesson memories, progress packages or premium edits.</p>
              </article>
              <article>
                <span>Integration</span>
                <h3>Fit existing operations</h3>
                <p>Connect booking, identity, consent, payments and venue workflows around each operator.</p>
              </article>
              <article>
                <span>Commercial model</span>
                <h3>Build the right business model</h3>
                <p>Turnkey service, packages, software, revenue-share structures and partner-led models can evolve with validation.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="cameras" className="section capture-section">
          <div className="shell">
            <header className="section-heading">
              <span className="kicker kicker-dark">Flexible capture stack</span>
              <h2>The right camera for the right moment.</h2>
              <p>
                We select compatible capture hardware around the environment, movement pattern and guest journey.
              </p>
            </header>
            <div className="camera-grid">
              <article className="camera-card">
                <div className="camera-image">
                  <img src="/assets/camera-panoramic-product.webp" alt="Curved panoramic dual-lens camera" />
                </div>
                <div className="camera-copy">
                  <span>01 · Panoramic AI</span>
                  <h3>Wide coverage</h3>
                  <p>For courts, training areas and controlled zones where broad, continuous coverage matters.</p>
                  <div className="chips"><i>Wide field of view</i><i>AI tracking</i><i>Mobile or fixed</i></div>
                </div>
              </article>
              <article className="camera-card">
                <div className="camera-image">
                  <img src="/assets/camera-fixed-product.webp" alt="Front-facing fixed dual-lens camera" />
                </div>
                <div className="camera-copy">
                  <span>02 · Fixed systems</span>
                  <h3>Always-on zones</h3>
                  <p>For repeatable capture points with predictable movement through a defined area.</p>
                  <div className="chips"><i>Fixed mount</i><i>Multi-camera</i><i>Edge workflows</i></div>
                </div>
              </article>
              <article className="camera-card">
                <div className="camera-image camera-image-ptz">
                  <img src="/assets/camera-ptz-product.webp" alt="PTZ optical-zoom camera mounted on a pole" />
                </div>
                <div className="camera-copy">
                  <span>03 · PTZ and optical zoom</span>
                  <h3>Track the action</h3>
                  <p>For longer distances and premium shots where active framing and optical zoom matter.</p>
                  <div className="chips"><i>Pan, tilt, zoom</i><i>Outdoor</i><i>Remote control</i></div>
                </div>
              </article>
            </div>
            <p className="camera-note">
              Final hardware, integrations and environmental specifications are validated for each deployment.
            </p>
          </div>
        </section>

        <section className="controlled-panel">
          <img src="/assets/controlled-zone.webp" alt="A controlled ski school zone with connected cameras" />
          <div className="controlled-shade" />
          <div className="controlled-copy">
            <span className="kicker">Start focused. Scale logically.</span>
            <h2>From one controlled zone to an entire destination.</h2>
            <p>
              Begin where identity, consent and operations are clear. Expand once the experience and economics are proven.
            </p>
          </div>
        </section>

        <section id="venues" className="section section-soft">
          <div className="shell">
            <header className="section-heading">
              <span className="kicker kicker-dark">One platform. Many experiences.</span>
              <h2>Skiing first, built to expand beyond it.</h2>
              <p>
                ClipDays begins with structured mountain experiences while the platform remains portable across sports and attractions.
              </p>
            </header>
            <div className="venue-grid">
              {venueTypes.map((venue) => (
                <article className={venue.className} key={venue.title}>
                  <img src={venue.image} alt={venue.title} />
                  <div className="venue-shade" />
                  <div className="capture-mark" aria-hidden="true"><i /><i /></div>
                  <div className="venue-copy">
                    <span>{venue.label}</span>
                    <h3>{venue.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-navy platform-section">
          <div className="shell split">
            <div>
              <span className="kicker">The platform</span>
              <h2>The camera is an input. The experience is the product.</h2>
              <p>
                ClipDays connects the full workflow around each moment: identity, consent, processing, delivery, payments and the long-term guest relationship.
              </p>
            </div>
            <div className="platform-stack">
              <div><b>Capture systems</b><span>Fixed · PTZ · Panoramic · Action cam · Human creator · Partner API</span></div>
              <i aria-hidden="true">↓</i>
              <div className="stack-active"><b>ClipDays operating layer</b><span>Identity · Consent · Workflow · Processing · Payments · Delivery</span></div>
              <i aria-hidden="true">↓</i>
              <div><b>Guest experience</b><span>Private memories · Sharing · Packages · Personal library</span></div>
              <i aria-hidden="true">↓</i>
              <div><b>Venue value</b><span>Revenue · Marketing · Retention · Insight</span></div>
            </div>
          </div>
        </section>

        <section className="section brand-section">
          <div className="shell brand-layout">
            <div className="brand-visual">
              <img src="/assets/resort-brand.webp" alt="ClipDays guest signage at a ski resort" />
            </div>
            <div className="brand-copy">
              <span className="kicker kicker-dark">Designed for the real venue</span>
              <h2>Clear for guests. Practical for operators.</h2>
              <p>
                From on-site discovery to automatic delivery, the service can be presented as a natural part of the destination experience.
              </p>
              <ul>
                <li>Simple guest onboarding</li>
                <li>Visible privacy and consent controls</li>
                <li>Branded delivery for every venue</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="partners" className="section section-soft">
          <div className="shell">
            <header className="section-heading">
              <span className="kicker kicker-dark">Mountain and market network</span>
              <h2>Built with people who understand the environments we enter.</h2>
              <p>
                ClipDays combines platform and commercial ownership with specialist mountain and market expertise.
              </p>
            </header>
            <div className="partner-grid">
              <a className="partner-card" href="https://www.helvepark.com/" target="_blank" rel="noopener noreferrer">
                <span className="partner-country">Switzerland</span>
                <div className="partner-brand">
                  <img src="/assets/helvepark-logo.webp" alt="HelvePark logo" />
                  <strong>HelvePark</strong>
                </div>
                <small>Mountain infrastructure</small>
                <h3>Turning mountain spaces into destinations.</h3>
                <p>
                  Expertise across planning, consulting, construction, maintenance, events, education and marketing for winter and summer mountain projects.
                </p>
                <b>Visit HelvePark <span aria-hidden="true">↗</span></b>
              </a>
              <article className="partner-card">
                <span className="partner-country">China</span>
                <div className="partner-brand">
                  <img src="/assets/helveski-logo.webp" alt="HelveSki logo" />
                  <strong>HelveSki</strong>
                </div>
                <small>Ski and sports market</small>
                <h3>Local knowledge with operating experience.</h3>
                <p>
                  A practical bridge into ski schools, sports venues and local relationships across the Chinese market.
                </p>
                <b>China market partner</b>
              </article>
            </div>
          </div>
        </section>

        <section id="team" className="section team-section">
          <div className="shell">
            <header className="section-heading">
              <span className="kicker kicker-dark">The team building ClipDays</span>
              <h2>Leadership, platform execution and market access.</h2>
            </header>
            <div className="leadership-grid">
              {leadership.map((member) => (
                <article className="team-card" key={member.name}>
                  <div className="portrait portrait-leadership">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-copy">
                    <span>{member.role}</span>
                    <h3>{member.name}</h3>
                    <p>{member.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="delivery-grid delivery-grid-primary">
              {deliveryTeam.slice(0, 4).map((member) => (
                <article className="team-card team-card-small" key={member.name}>
                  <div className="portrait portrait-small">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <span aria-label={`${member.name} initials`}>{member.initials}</span>
                    )}
                  </div>
                  <div className="team-copy">
                    <span>{member.role}</span>
                    <h3>{member.name}</h3>
                    <p>{member.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="delivery-grid delivery-grid-secondary">
              {deliveryTeam.slice(4).map((member) => (
                <article className="team-card team-card-small" key={member.name}>
                  <div className="portrait portrait-small">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-copy">
                    <span>{member.role}</span>
                    <h3>{member.name}</h3>
                    <p>{member.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-navy mission-section">
          <div className="shell">
            <span className="kicker">Our mission</span>
            <h2>Make sure meaningful sporting moments are never lost again.</h2>
            <p>Technology should disappear. The experience should remain.</p>
            <strong>Own Your Moment.</strong>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
