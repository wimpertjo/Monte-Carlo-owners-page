import Link from "next/link";

export default function Page() {
  return (
    <div className="section">
      <div className="container" style={{maxWidth:920}}>
        <div className="kicker">Become a Member</div>
        <h1 className="h2 serif">Membership</h1>

        <p className="p">
          The Monte Carlo Offshorer Owners Club is an independent association dedicated to keeping these boats alive — properly.
          Membership is open to owners and associate members. You don’t have to own a Monte Carlo to join, but you do have to care.
        </p>

        <div className="card" style={{marginTop:18}}>
          <div className="cardBody">
            <div className="kicker">Annual membership</div>
            <div className="serif" style={{fontSize:36, fontWeight:900, marginTop:8}}>€250 / year</div>
            <div className="p" style={{marginTop:10}}>
              Membership is approved by the Board.
              After approval you receive payment instructions and your membership is activated for 12 months.
            </div>
          </div>
        </div>

        <h2 className="serif" style={{fontSize:28, fontWeight:900, marginTop:34}}>What members receive</h2>
        <ul className="p" style={{lineHeight:1.8, marginTop:10}}>
          <li><strong>Full forum access</strong> (post, reply, upload photos). The forum stays searchable — real fixes, stored forever.</li>
          <li><strong>10% discount</strong> in the shop.</li>
          <li><strong>Registry listing (owners)</strong> — add your boat to the club archive.</li>
          <li><strong>Technical archives</strong> and documented solutions.</li>
          <li><strong>Ventimiglia connection</strong> for storage, restoration and support.</li>
          <li><strong>Club updates & events</strong>.</li>
        </ul>

        <h2 className="serif" style={{fontSize:28, fontWeight:900, marginTop:34}}>Board</h2>
        <p className="p">
          Michel van Til — President<br/>
          Vincent — Operations<br/>
          Willem Brom — Support
        </p>

        <div className="card" style={{marginTop:18}}>
          <div className="cardBody">
            <div className="kicker">Apply</div>
            <p className="p" style={{marginTop:10}}>
              Applications are reviewed by the Board. Please include your details, and (if you’re an owner) recent photos of your boat.
            </p>
            <p className="p" style={{marginTop:10}}>
              Replace the button below with your application form URL (Tally/Typeform/Google Form).
            </p>

            <div style={{display:"flex", gap:12, flexWrap:"wrap", marginTop:14}}>
              <a className="btn" href="#" title="Replace with your application form URL">Apply for membership</a>
              <Link className="btn secondary" href="/forum">Read the forum</Link>
            </div>
          </div>
        </div>

        <div className="section navy" style={{marginTop:38, borderRadius:22, padding:"44px 24px"}}>
          <h2 className="serif" style={{fontSize:34, fontWeight:900, margin:"0 0 10px"}}>Membership isn’t about access.</h2>
          <p className="p light" style={{margin:0, maxWidth:780}}>
            It’s about responsibility — keeping a serious machine running, documented, and respected.
          </p>
          <div style={{marginTop:18}}>
            <a className="btn" href="#" title="Replace with your application form URL">Apply now</a>
          </div>
        </div>

        <div style={{marginTop:26}}>
          <Link className="btn secondary" href="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
