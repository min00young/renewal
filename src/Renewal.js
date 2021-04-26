import styled from 'styled-components'

const StyleWrapper = styled.div`
  .navbar-wrapper {
    .navbar {
      background-color: red;
      max-width: 1280px;
      max-height: 40px;
      padding: 24px 16px;
      margin: 0 auto;

    }
  }

  .main {


    .section1 {
      background-color: blue;
      max-height: 700px;
      padding: 0px 48px;
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
  }

  .footer-wrapper {


    .footer {
      background-color: green;
      max-width: 1280px;
      max-height: 178px;
      padding: 32px 48px;
      margin: 0 auto;
    }
  }

`;

function RenewalPage() {
  return <StyleWrapper>
    {/* navbar */}
    <div className="navbar-wrapper">
      <div className="navbar">
        navbar
      </div>
    </div>
    {/* main */}
    <div className="main">
      {/* Hero section */}
      <div className="section1">Hero section</div>
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
        footer
      </div>
    </div>
  </StyleWrapper >
}

export default RenewalPage