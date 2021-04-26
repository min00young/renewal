import { Container, AppBar, Box, Button, Grid, Typography, Footer } from "@material-ui/core";
import styled from 'styled-components'

const StyleWrapper = styled.div`
  .navbar-wrapper {
  }

  .navbar {
    background-color: red;
    padding: 24px 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    }

  .left-contnet {
    img {
      max-width: 100%;
    }
      }
  .center-content {
      display: flex;
      }

  .main {

    .section1 {
      background-color: blue;
      max-height: 700px;
      padding:48px 0px;
      margin: 0 auto;
    }
    .section2 {
      background-color: pink;
      max-width: 832px;
      max-height: 76px;
      padding: 32px 48px;
      margin: 0 auto;
    }
    .section3 {
      background-color: violet;
      max-width: 1280px;
      max-height: 1592px;
      padding: 0px 96px;
      margin: 0 auto;
    }
    .section4 {
      background-color: salmon;
      max-width: 1280px;
      max-height: 348px;
      padding: 0px 128px;
      margin-top: 48px;
      margin: 0 auto;
    }
    .section5 {
      background-color: #72faa6;
      max-width: 1280px;
      max-height: 348px;
      padding: 0px 128px;
      margin-top: 48px;
      margin: 0 auto;
    }
    .section6 {
      background-color: #72f1fa;
      max-width: 1280px;
      max-height: 348px;
      padding: 0px 128px;
      margin-top: 48px;
      margin: 0 auto;
    }
    .section7 {
      background-color: #d6fa72;
      max-width: 1280px;
      max-height: 348px;
      padding: 0px 128px;
      margin-top: 48px;
      margin: 0 auto;
    }
    .section8 {
      background-color: #faca72;
      max-width: 1280px;
      max-height: 348px;
      padding: 0px 128px;
      margin-top: 48px;
      margin: 0 auto;
    }
  }

  .footer-wrapper {


    .footer {
      background-color: green;
      padding: 48px 32px;
      margin: 0 auto;

      nav {
        display: flex;
        justify-content: center;
      }

      nav div {
        padding: 8px 20px;
      }
    }
  }

`;

function RenewalPage() {
  return <StyleWrapper>
    {/* navbar */}
    <div className="navbar-wrapper">
      <div className="navbar">
        <a href="#" className="left-content">
          <img src="https://arrows.to/images/arrows-logomark-color.svg" />
        </a>
        <div className="center-content">
          <div>How it works</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
        <div className="right-content">
          <a href="#">Open Aroows!</a>
        </div>
      </div>
    </div>
    {/* main */}
    <div className="main">
      {/* Hero section */}
      <div className="section1">
        <div>New Zapier integraion</div>

      </div>
      {/* Logo Cloud */}
      <div className="section2">Logo Cloud</div>
      {/* Side by sides */}
      <div className="section3">Side by sides</div>
      {/* Easy as 1-2-3 */}
      <div className="section4">Easy as 1-2-3</div>
      {/* Full-width testimonial */}
      <div className="section5">Full-width testimonial</div>
      {/* It doesn't matter what you call it */}
      <div className="section6">It doesn't matter what you call it</div>
      {/* Learn more */}
      <div className="section7">Learn more</div>
      {/* CTA section */}
      <div className="section8">CTA section</div>
    </div>
    {/* footer */}
    <div className="footer-wrapper">
      <div className="footer">
        <nav>
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Featues</a>
          </div>
          <div>
            <a href="#">Pricing</a>
          </div>
          <div>
            <a href="#">About us</a>
          </div>
          <div>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <a href="#">Terms of Service</a>
          </div>
        </nav>
        <div style={{ margin: '16px -20px -8px -20px', paddingTop: 16, display: 'flex', justifyContent: 'center' }}>
          <div>
            <a href="#">What to do during your first 100 days as a CSM</a>
          </div>
          <div>
            <a href="#">The 5 Key Ingredients of a Success Plan</a>
          </div>
          <div>
            <a href="#">Working in Bets (Building Arrows pt. 1)</a>
          </div>
          <div>
            <a href="#">Onboarding 101</a>
          </div>
          <div>
            <a href="#">Free Implementation Plan Template</a>
          </div>
        </div>
        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
          <p>
            <strong>Need help? Email a co-founder <a href="#">dz@arrows.to</a></strong>
          </p>
        </div>
        <div style={{ marginTop: 32 }}>
          <p style={{ textAlign: 'center', margin: 0, padding: 0 }}>© 2021 Arrows. All rights reserved.</p>
        </div>
      </div>
    </div>
  </StyleWrapper >
}

export default RenewalPage