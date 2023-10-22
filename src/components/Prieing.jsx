import "../Styles/Prieing.css";

function Prieing() {
  return (
    <div className="pricing">
      <div className="pricing-text">
        <h1>Pricing</h1>
        <p>
          Start your <samp> free 14 day trial</samp> with full customer support
          and no credit card required.
        </p>
        <hr />
      </div>
      <div className="support">
        <div className="personal">
          <h4>Personal</h4>
          <div className="per-month">
            <h1>£7.50 </h1>
            <hr />
            <p>Or £9.00 billed monthly</p>
          </div>
          <div className="personal-text">
            <h6>50 Projects</h6>
            <hr />
            <p>10 Portfolios</p>
            <hr />
            <p>Unlimited Blog Posts</p>
            <hr />
            <p>2GB Media Storage</p>
            <hr />
            <p>SSL Site Security</p>
            <hr />
            <p>Customer Support</p>
          </div>
        </div>

        <div className="personal">
          <h4>Professional</h4>
          <div className="Professional-month">
            <h1>£11.25 </h1>
            <hr />
            <p>Or £13.50 billed monthly</p>
          </div>
          <div className="personal-text">
            <h6>100 Projects</h6>
            <hr />
            <p>20 Portfolios</p>
            <hr />
            <p>Unlimited Blog Posts</p>
            <hr />
            <p>5GB Media Storage</p>
            <hr />
            <p>SSL Site Security</p>
            <hr />
            <p>Advanced Support</p>
          </div>
        </div>

        <div className="personal">
          <h4>Unlimited</h4>
          <div className="unlimited-month">
            <h1>£17.50 </h1>
            <hr />
            <p>Or £21.00 billed monthly</p>
          </div>
          <div className="personal-text">
            <h6>Unlimited Projects</h6>
            <hr />
            <p>Unlimited Portfolios</p>
            <hr />
            <p>Unlimited Blog Posts</p>
            <hr />
            <p>Unlimited Media Storage</p>
            <hr />
            <p>SSL Site Security</p>
            <hr />
            <p>Advanced Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prieing;
