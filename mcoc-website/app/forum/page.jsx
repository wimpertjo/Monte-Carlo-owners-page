export default function Page() {
  return (
    <div className="section">
      <div className="container" style={{maxWidth:920}}>
        <div className="kicker">Forum</div>
        <h1 className="h2 serif">Searchable Technical Archive</h1>
        <p className="p">
          Non-members can read and search. Members can post, reply and upload photos.
          Replace the button below with your forum URL (e.g. Discourse on forum.yourdomain.com).
        </p>
        <div className="card" style={{marginTop:18}}>
          <div className="cardBody">
            <div className="kicker">Forum link</div>
            <a className="btn" href="#" title="Replace with your forum URL">Open the forum</a>
          </div>
        </div>
      </div>
    </div>
  );
}
