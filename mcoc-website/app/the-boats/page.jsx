import Link from "next/link";
export default function Page() {
  return (
    <div className="section">
      <div className="container">
        <div className="kicker">The Boats</div>
        <h1 className="h2 serif">27 • 30 • 32</h1>
        <p className="p" style={{maxWidth:820}}>
          Overview page. We can expand each model with specs and galleries as you collect more information.
        </p>
        <div id="27" style={{marginTop:40}}>
          <h2 className="serif" style={{fontSize:30, fontWeight:800}}>Monte Carlo 27</h2>
          <p className="p">Compact. Direct. Unfiltered.</p>
        </div>
        <div id="30" style={{marginTop:40}}>
          <h2 className="serif" style={{fontSize:30, fontWeight:800}}>Monte Carlo 30</h2>
          <p className="p">The sweet spot — balance and authority.</p>
        </div>
        <div id="32" style={{marginTop:40}}>
          <h2 className="serif" style={{fontSize:30, fontWeight:800}}>Monte Carlo 32</h2>
          <p className="p">Presence. Space. Offshore confidence.</p>
        </div>
        <div style={{marginTop:26}}>
          <Link className="btn secondary" href="/membership">Become a member</Link>
        </div>
      </div>
    </div>
  );
}
