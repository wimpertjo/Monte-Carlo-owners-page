import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Monte Carlo Offshorer Owners Club",
  description: "Independent owners club for the Monte Carlo Offshorer 27 / 30 / 32. Based in Ventimiglia."
};

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="navbar">
          <Link href="/" className="serif" style={{fontSize:18, fontWeight:700, letterSpacing:".02em"}}>
            Monte&nbsp;Carlo&nbsp;Offshorer<br/>
            <span className="smallcaps" style={{fontSize:11, opacity:.75}}>Owners Club • Ventimiglia</span>
          </Link>

          <div className="navlinks">
            <Link className="pill" href="/the-boats">The Boats</Link>
            <Link className="pill" href="/owners">Owners</Link>
            <Link className="pill" href="/ventimiglia">Ventimiglia</Link>
            <Link className="pill primary" href="/shop">Shop</Link>
            <Link className="pill primary" href="/forum">Forum</Link>
            <Link className="pill" href="/news">News</Link>
            <Link className="pill" href="/membership">Become a Member</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="container" style={{display:"grid", gap:14}}>
        <div style={{display:"flex", justifyContent:"space-between", gap:18, flexWrap:"wrap"}}>
          <div>
            <div className="serif" style={{fontWeight:800}}>Monte Carlo Offshorer Owners Club</div>
            <div className="p" style={{marginTop:6, maxWidth:560}}>
              Independent owners association. Based at the original yard in Ventimiglia.
            </div>
          </div>
          <div className="p" style={{minWidth:280}}>
            <div style={{fontWeight:800}}>Board</div>
            <div>Michel van Til — President</div>
            <div>Vincent — Operations</div>
            <div>Willem Brom — Support</div>
          </div>
        </div>
        <div className="p" style={{opacity:.72}}>
          © {new Date().getFullYear()} Monte Carlo Offshorer Owners Club
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
