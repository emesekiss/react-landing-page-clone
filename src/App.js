/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import logo from './images/logo.png';
import firstsection1 from './images/firstsection1.png';

const headerStyles = css`
  background-color: #234598;
  padding: 30px 0px 40px 0;

  color: #fff;
  font-weight: 500;
  font-size: 17px;
  letter-spacing: 0.05px;
`;

const headerInnerStyles = css`
  margin: 0 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:first-child {
    margin-left: 10px;
    margin-top: 10px;
  }

  nav a {
    text-decoration: none;
    color: #ffffff;
    margin-left: 45px;
    display: inline-block;
  }

  a:last-child {
    background-color: #3c5aa4;
    border-radius: 13px;
    padding: 15px 30px 20px;
  }
`;

const mainContainer = css`
  margin: 0 55px;
`;

const firstSectionStyle = css`
  position: relative;
  background-color: #234598;
  padding: 0px 0px 143px;

  h1 {
    color: white;
    font-size: 86px;
    margin: 25px 15px;
  }
  p {
    color: #f0b1b5;
    font-size: 23px;
    font-family: 'MafraBold';
    line-height: 34px;
    font-weight: bold;
    margin: 30px 15px;
  }
  > div {
    display: flex;
  }
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
  margin: 30px 15px;
`;

const firstSectionIcon = css`
  height: 86px;
  position: absolute;
  left: 0;
  top: 86%;
`;

const logoStyles = css`
  width: auto;
  height: 35px;
`;

const secondSectionStyle = css`
  position: relative;
  background-color: #b7d9d6;
  padding: 150px 0px 80px 0px;

  h2 {
    max-width: 80%;
    margin: 20px auto 0px;
    color: #143b73;
    font-size: 33px;
    line-height: 44px;
    letter-spacing: -0.1px;
    text-align: center;
    font-weight: 550;
  }
`;

const secondSectionIcon = css`
  width: 86px;
  height: 103px;
  right: 0;
  top: 30%;
  position: absolute;
`;

function App() {
  return (
    <div>
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
          <div css={mainContainer}>
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
            <img src={firstsection1} alt="A woman and a man talking in an office" />
            <img
              css={firstSectionIcon}
              src="https://prodigitas.com/wp-content/uploads/2020/03/noun_rectangle_2731804@2x.png"
              alt=""
            />
          </div>
        </section>

        <section css={secondSectionStyle}>
          <div>
            <h2>
              For years, we have worked extensively with businesses who are let
              down by low quality competitors and unreliable freelancers.
              <br /> We understand the pain points.
            </h2>
            <img
              css={secondSectionIcon}
              src="https://prodigitas.com/wp-content/uploads/2020/03/noun_rectangle_sec.png"
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
