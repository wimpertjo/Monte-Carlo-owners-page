import Image from "next/image";
import Link from "next/link";

const hero = "/photos/PHOTO-2026-02-06-21-15-11 (4).jpg";
const heritage = "/photos/Don Lorenzo HR.-45.jpg";
const venti = "/photos/PHOTO-2026-02-06-21-15-10 (1).jpg";
const detail = "/photos/Don Lorenzo HR.-22.jpg";
const engine = "/photos/PHOTO-2026-02-06-21-15-14 (1) (1).jpg";
const outdoor = "/photos/Don Lorenzo HR.-3.jpg";

export default function Page() {
  return (
    <>
      <section className="hero">
        <Image src={hero} alt="Ventimiglia yard" fill priority />
        <div className="container heroContent">
<div className="kicker" style={{ color: "rgba(244,239,230,.75)" }}>
  Independent owners club
</div>
         <Image
  src="/Monte-Carlo-Offshorer_plot LOGO.png"
  alt="Monte Carlo Offshorer"
  width={1200}
  height={260}
  priority
  className="heroLogo"
/>
          <p className="heroP">
            Built in Ventimiglia. Preserved by its owners.
            <br />
            A structured club for owners and serious enthusiasts — with a searchable technical forum and an open shop.
          </p>
          <div className="heroBtns">
            <Link className="btn" href="/membership">
              Become a Member
            </Link>
            <Link className="btn secondary" href="/the-boats">
              Discover the Boats
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div>
            <div className="kicker">Heritage</div>
            <h2 className="h2 serif">Born Offshore</h2>
            <p className="p">
              The Monte Carlo Offshorer was never designed to sit still.
              Built in Ventimiglia, it carries Riviera DNA — purposeful lines,
              mechanical honesty, and that unmistakable lift when the hull rises
              and the coast drops away.
            </p>
            <p className="p">
              Three versions. One attitude: <strong>27 / 30 / 32</strong>.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 18,
              }}
            >
              <Link className="btn secondary" href="/ventimiglia">
                Ventimiglia Yard
              </Link>
              <Link className="btn" href="/forum">
                Forum
              </Link>
            </div>
          </div>
          <div className="splitPhoto">
            <img src={heritage} alt="Monte Carlo Offshorer detail" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="kicker">The Boats</div>
          <h2 className="h2 serif">27 • 30 • 32</h2>
          <div className="grid3">
            <ModelCard
              title="27"
              subtitle="Compact. Direct."
              image={outdoor}
              href="/the-boats#27"
            />
            <ModelCard
              title="30"
              subtitle="The sweet spot."
              image={venti}
              href="/the-boats#30"
            />
            <ModelCard
              title="32"
              subtitle="Offshore presence."
              image={detail}
              href="/the-boats#32"
            />
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className="btn secondary" href="/the-boats">
              Explore all models
            </Link>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="container" style={{ textAlign: "center", maxWidth: 900 }}>
          <div className="kicker" style={{ color: "rgba(244,239,230,.72)" }}>
            The Owners Club
          </div>
          <h2 className="h2 serif">Independent. Structured. Committed.</h2>
          <p className="p light" style={{ margin: "0 auto", maxWidth: 760 }}>
            Membership is €250 per year and approved by the Board.
            Owners and associate members are welcome — you don’t have to own a Monte Carlo to join.
            Non-members can read the forum; members can post, upload photos,
            and build the archive for the next owner.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 22,
            }}
          >
            <Link className="btn" href="/membership">
              Apply for membership
            </Link>
            <Link
              className="btn secondary"
              href="/forum"
              style={{
                borderColor: "rgba(244,239,230,.35)",
                color: "var(--cream)",
              }}
            >
              Visit the forum
            </Link>
            <Link
              className="btn secondary"
              href="/shop"
              style={{
                borderColor: "rgba(244,239,230,.35)",
                color: "var(--cream)",
              }}
            >
              Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="section navy" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="h2 serif" style={{ marginBottom: 10 }}>
            These boats were built properly.
          </h2>
          <p className="p light" style={{ margin: "0 auto", maxWidth: 760 }}>
            They deserve to be maintained the same way — with respect,
            documentation and shared knowledge.
          </p>
          <div style={{ marginTop: 22 }}>
            <Link className="btn" href="/membership">
              Enter the club
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ModelCard({ title, subtitle, image, href }) {
  return (
    <Link className="card" href={href}>
      <img src={image} alt={title} />
      <div className="cardBody">
        <div className="kicker">Model</div>
        <div
          className="serif"
          style={{ fontSize: 34, fontWeight: 800, marginTop: 4 }}
        >
          {title}
        </div>
        <div className="p" style={{ marginTop: 6 }}>
          {subtitle}
        </div>
      </div>
    </Link>
  );
}
