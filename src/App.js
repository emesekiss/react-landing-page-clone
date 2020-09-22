/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from 'react';
import { jsx, css } from '@emotion/core';

import logo from './images/logo.png';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';
import image9 from './images/image9.png';
import image10 from './images/image10.png';
import image11 from './images/image11.png';
import image12 from './images/image12.png';
import image13 from './images/image13.png';
import image14 from './images/image14.png';
import image15 from './images/image15.png';

const centeredContainerStyles = css`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px padding-right 15px;
`;

const headerStyles = css`
  ${centeredContainerStyles};
  background-color: #234598;
  background-size: cover;
  padding: 45px 0 40px;
  width: 100%;

  color: #fff;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.05px;
`;

const headerInnerStyles = css`
  ${centeredContainerStyles};
  display: flex;
  justify-content: space-between;
  nav a {
    margin-right: 20px;
    text-decoration: none;
    color: #ffffff;
    padding: 10px 20px;
  }
  a:last-child {
    background-color: #3c5aa4;
    border-radius: 13px;
    background-color: #3c5aa4;
    padding: 15px 30px;
  }
`;
const firstSectionStyle = css`
  ${centeredContainerStyles}
  background-color: #234598;
  h1 {
    color: white;
    margin: 0;
    font-size: 86px;
    margin-top: -130px;
  }
  p {
    color: #f0b1b5;
    font-size: 22px;
    font-family: 'MafraBold';
    line-height: 34px;
    font-weight: bold;
  }
  > div {
    display: flex;
    align-items: center;
  }
`;

const logoStyles = css`
  width: auto;
  height: 35px;
  cursor: pointer;
`;

const buttonStyle = css`
  cursor: pointer;
  background-color: white;
  padding: 26px 65px;
  color: #234598;
  font-size: 18px;
  font-weight: bold;
  border-radius: 13px;
  border: none;
`;
// const navStyles = css`
//   display: flex;
//   justify-content: space-between;
//   cursor: pointer;
// `;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <div css={headerInnerStyles}>
          <a href="a#">
            <img css={logoStyles} src={logo} alt="Prodigitas Logo" />
          </a>
          <nav>
            <a href="#a">Home</a>
            <a href="#a">About Us</a>
            <a href="#a">Capabilities</a>
            <a href="#a">Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <section css={firstSectionStyle}>
          <div>
            <div>
              <h1>
                Your team <br></br>is ready.
              </h1>
              <p>
                Talented designers, developers and marketing automation pros,
                managed by senior project managers, super keen to support your
                marketing programs & help move your business forward.
              </p>
              <button css={buttonStyle}>Learn More</button>
            </div>
            <img src={image1} alt="" />
          </div>
        </section>

        <section>
          <div>
            <h2>
              For years, we have worked extensively with businesses who are let
              down by low quality competitors and unreliable freelancers. We
              understand the pain points.
            </h2>
            <img src={image2} alt="" />
            <h2>Quality</h2>
            <p>
              Quality first. All projects are backed by our fanatic support &
              100% satisfaction guarantee.
            </p>
            <img src={image3} alt="" />
            <h2>Reliability</h2>
            <p>
              We keep our promises, provide upfront timelines and bring
              predictability.
            </p>
            <img src={image4} alt="" />
            <h2>Communication</h2>
            <p>
              Single point of contact, in sync with the tools you use. We speak
              your language.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2>Hello, we are Prodigitas.</h2>
            <p>
              Backed by an experience of nearly two decades in digital
              marketing, we are experts in building and managing digital
              marketing teams. We serve clients across the globe & these are the
              core values we live by.
            </p>
            <img src={image5} alt="" />
            <h3>Invest in talent</h3>
            <p>
              We identify and nurture a truly diverse team of designers,
              developers and marketers under one roof .
            </p>
            <img src={image6} alt="" />
            <h3>In- sync with you</h3>
            <p>
              We work the way you do by adapting to your workflows and rhythm.
              We aim to blend in for a seamless experience.
            </p>
            <img src={image7} alt="" />
            <h3>Skin in the game</h3>
            <p>
              We succeed only when you succeed. We are a true partner every step
              of the way, riding the highs and the lows with you.
            </p>
            <img src={image8} alt="" />
            <h3>Built for impact</h3>
            <p>
              We do not measure mere output but rate ourselves by the impact we
              create by our work.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2>Our Capabilities</h2>
            <img src={image9} alt="" />
            <h2>Design</h2>
            <p>
              We create design that champions your brand. Our design team is
              ready to deliver high quality, on brand design for all your
              marketing and communication needs.
            </p>
            <ol>
              <li>Website Design</li>
              <li>Landing Pages</li>
              <li>Emailers</li>
              <li>Whitepapers</li>
              <li>Infographics</li>
              <li>E-Books</li>
            </ol>
            <h2>Development</h2>
            <p>
              Our development team delivers tested and compliant code. From
              simple to complex, we build and deploy solutions with speed and
              reliability.
            </p>
            <ol>
              <li>Custom Development</li>
              <li>API Integrations</li>
              <li>Module Development</li>
              <li>Platform Migrations</li>
              <li>Payment Integrations</li>
              <li>Design to CMS</li>
            </ol>
            <img src={image10} alt="" />
            <img src={image11} alt="" />
            <h2>Marketing Automation</h2>
            <p>
              Launch and scale your marketing campaigns fast, with our one stop
              creative, tech and automation solutions.
            </p>
            <ol>
              <li>Campaign Planning</li>
              <li>Asset Creation</li>
              <li>Ad-Creatives</li>
              <li>Execution Support </li>
              <li>Reporting</li>
              <li>Martech Services</li>
            </ol>
            <h2>Partnering with the best</h2>
            <img src={image12} alt="" />
          </div>
        </section>
        <section>
          <div>
            <h2>You are in good Company</h2>
            <img src={image13} alt="" />
            <h3>
              “It’s rare to find this breadth of skill set within one agency.”
            </h3>
            <p>Su Planta, (Head of Digital, Causeway Technologies)</p>
            <img src={image14} alt="" />
            <h3>
              " It is very easy to communicate with Prodigitas and I love the
              way they adapt to my pace of work
            </h3>
            <p>Sheetal Pathki, (Digital Marketing Manager, Krauthammer)</p>
            <img src={image15} alt="" />
            <h3>
              “Prodigitas provides the support I need to keep our marketing
              machinery running continuously.”
            </h3>
            <p>GVS Chaitanya ( Head of Growth, Appknox)</p>
          </div>
        </section>
        <section>
          <div>
            <h2>Getting started is easy</h2>
            <h6>STEP 1</h6>
            <h3>Find out what you need</h3>
            <p>
              We start with a discovery call to understand your company, your
              goals, the problems you are facing and your expectations.
            </p>
            <h6>STEP 2</h6>
            <h3>Work out the details</h3>
            <p>
              We present you a proposal and discuss nitty- gritty like workflows
              , communication protocols apart from engagement models, pricing ,
              billing and invoicing.
            </p>
            <h6>STEP 3</h6>
            <h3>We get to work</h3>
            <p>
              We start with a a kick-off call with the respective project
              owners, onboard the teams on the project management platforms and,
              take off!
            </p>
            <button>Get Started</button>
          </div>
        </section>
      </main>

      {/* <footer> */}
      {/* <div>
          <img src={logo} alt="Prodigitas Logo" />
          <img src={image16} alt="" />
          <a href="#a">About Us</a>
          <a href="#a">Capabilities</a>
          <a href="#a">Agencies</a>
          <p>
            Prodigitas Inc. Suite B-2 2035 Sunset Lake Road, Newark-19702 DE, US
          </p>
          <a href="#a">Get Started</a>
        </div> */}
      {/* </footer> */}
    </>
  );
}

export default App;
