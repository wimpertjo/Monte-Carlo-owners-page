export default function Page() {
  return (
    <div className="section">
      <div className="container" style={{maxWidth:920}}>
        <div className="kicker">Shop</div>
        <h1 className="h2 serif">Open to Everyone</h1>
        <p className="p">
          The shop is open to non-members. Members receive a permanent 10% discount.
          Replace the button below with your shop URL (Shopify recommended).
        </p>
        <div className="card" style={{marginTop:18}}>
          <div className="cardBody">
            <div className="kicker">Shop link</div>
            <a className="btn" href="#" title="Replace with your shop URL">Visit the shop</a>
          </div>
        </div>
      </div>
    </div>
  );
}
