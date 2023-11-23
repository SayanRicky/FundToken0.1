import { useCallback, useEffect } from "react";
import "./locofy.css";

const Locofy = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameContainer30Click = useCallback(() => {
    window.open("https://fundtokens.io/tokenomics/");
  }, []);

  const onTokenPriceTextClick = useCallback(() => {
    window.open("https://www.livecoinwatch.com/price/FundTokenDAO-FTDAO");
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    window.open("https://fundtokens.io/about-us/");
  }, []);

  return (
    <div className="locofy">
      <img className="locofy-child" alt="" src="/frame-45.svg" />
      <div className="frame-parent">
        <div className="frame-group" data-animate-on-scroll>
          <div className="fund-govergence-token-parent">
            <b className="fund-govergence-token">Fund Govergence Token</b>
            <div className="fund-governance-token">
              Fund Governance Token, abbreviated as FTDAO, is a Decentralized
              Autonomous Organization (DAO) utility token that empowers
              investors to actively participate in the future of sustainable
              energy.
            </div>
          </div>
          <div className="fund-governance-token">{`FTDAO is designed to serve as a digital asset that facilitates decision-making and investment in green energy technologies, net zero oil, electric vehicles (EV), and environmental, social & governance (ESG) projects. FTDAO is not just a token; it is a revolutionary approach towards making sustainable energy investments more accessible, transparent, and community-driven.`}</div>
        </div>
        <img
          className="image-1-icon"
          alt=""
          src="/image-1@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="frame-container">
        <div className="core-focus-parent" data-animate-on-scroll>
          <div className="core-focus">Core Focus</div>
          <div className="frame-child" />
        </div>
        <div className="corefocus-components-wrapper">
          <div className="corefocus-components">
            <div className="corefocus-components-inner" data-animate-on-scroll>
              <div className="rectangle-parent">
                <div className="frame-item" />
                <img className="image-2-icon" alt="" src="/image-2@2x.png" />
                <b className="renewables">Renewables</b>
              </div>
            </div>
            <div className="corefocus-components-child" data-animate-on-scroll>
              <div className="rectangle-parent">
                <div className="frame-item" />
                <b className="esg">ESG</b>
                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              </div>
            </div>
            <div className="frame-div" data-animate-on-scroll>
              <div className="rectangle-parent">
                <div className="frame-item" />
                <b className="net-zero">Net Zero</b>
                <img className="image-4-icon" alt="" src="/image-4@2x.png" />
              </div>
            </div>
            <div className="corefocus-components-inner1" data-animate-on-scroll>
              <div className="rectangle-parent">
                <div className="frame-item" />
                <b className="funding">Funding</b>
                <img className="image-3-icon" alt="" src="/image-5@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dao-parent">
        <div className="dao">
          <div className="frame-parent1" data-animate-on-scroll>
            <div className="decentralized-autonomous-organ-parent">
              <div className="decentralized-autonomous-organ">
                Decentralized Autonomous Organization (DAO)
              </div>
              <div className="frame-child" />
            </div>
            <div className="fgt-will-use">
              FGT will use funds raised to invest in the development of green
              energy related technologies and energy production.
            </div>
          </div>
          <img
            className="image-6-icon"
            alt=""
            src="/image-6@2x.png"
            data-animate-on-scroll
          />
        </div>
        <div className="image-7-parent">
          <img
            className="image-7-icon"
            alt=""
            src="/image-7@2x.png"
            data-animate-on-scroll
          />
          <div className="frame-parent1" data-animate-on-scroll>
            <div className="decentralized-autonomous-organ-parent">
              <div className="core-focus">Governance Token</div>
              <div className="frame-child" />
            </div>
            <div className="the-fund-token">
              The Fund Token DAO will make decisions through a formal defined
              governance process involving proposals and community votes.
            </div>
          </div>
        </div>
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="frame-parent1" data-animate-on-scroll>
              <div className="decentralized-autonomous-organ-parent">
                <div className="core-focus">Immutable Ownership</div>
                <div className="frame-child" />
              </div>
              <div className="by-virtue-of">
                By virtue of operating on the blockchain, the FTDAO will
                represent immutable ownership and provide for transparent
                distribution that will make Fund Token DAO ideally suited to
                distributed decision making.
              </div>
            </div>
            <div className="immutable-c">
              <div className="rectangle-parent2" data-animate-on-scroll>
                <div className="frame-child5" />
                <div className="done-parent">
                  <img className="done-icon" alt="" src="/done@2x.png" />
                  <b className="transparent-distribution">
                    Transparent Distribution
                  </b>
                </div>
              </div>
              <div className="rectangle-parent2" data-animate-on-scroll>
                <div className="frame-child5" />
                <div className="done-parent">
                  <img className="done-icon" alt="" src="/done@2x.png" />
                  <b className="transparent-distribution">
                    Immutable Ownership
                  </b>
                </div>
              </div>
              <div className="rectangle-parent2" data-animate-on-scroll>
                <div className="frame-child5" />
                <div className="done-parent">
                  <img className="done-icon" alt="" src="/done@2x.png" />
                  <b className="transparent-distribution">
                    Distributed Decision Making
                  </b>
                </div>
              </div>
            </div>
          </div>
          <img
            className="image-8-icon"
            alt=""
            src="/image-8@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
      <div
        className="learn-about-the-tokenomics-wrapper"
        onClick={onFrameContainer30Click}
      >
        <b className="learn-about-the">LEARN ABOUT THE TOKENOMICS</b>
      </div>
      <div className="frame-parent6">
        <div className="contact-us-parent">
          <div className="core-focus">Contact Us</div>
          <div className="frame-child" />
          <div className="if-you-would">If you would like more information</div>
        </div>
        <div className="rectangle-parent5">
          <div className="frame-child9" />
          <div className="frame-parent7">
            <div className="frame-parent8">
              <div className="name-wrapper">
                <b className="name">NAME</b>
              </div>
              <div className="email-address-wrapper">
                <b className="name">EMAIL ADDRESS</b>
              </div>
              <div className="message-wrapper">
                <b className="name">MESSAGE</b>
              </div>
            </div>
            <div className="submit-wrapper">
              <b className="submit">SUBMIT</b>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-child" />
        <div className="image-9-parent">
          <img className="image-9-icon" alt="" src="/image-9@2x.png" />
          <div className="home">Home</div>
          <div className="token-price" onClick={onTokenPriceTextClick}>
            Token Price
          </div>
          <div className="token-price" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <img className="back-icon" alt="" src="/back@2x.png" />
        </div>
        <div className="rectangle-parent6">
          <div className="frame-child10" />
          <div className="white-paper-parent">
            <div className="core-focus">White Paper</div>
            <div className="core-focus">Governance</div>
            <div className="core-focus">Tokenomics</div>
            <div className="core-focus">Team</div>
            <div className="core-focus">Contact Us</div>
          </div>
        </div>
      </div>
      <img className="search-icon" alt="" src="/search@2x.png" />
    </div>
  );
};

export default Locofy;
