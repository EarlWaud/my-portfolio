

// // functional componet page version
// const Index = () => {
//   return (
//     <h1>This is the Index Page</h1>
//   )
// }

// export default Index;


// class page version
import BaseLayout from '@/components/layouts/baselayout'
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';

const ROLES = ['Developer', 
               'Tech Lover', 
               'Team Player', 
               'React', 
               'Next.js',
               'HTML5',
               'CSS3',
               'Bootstrap',
               'Not afraid to wear the red shirt on away missions'
              ];

const Index = () => {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hs-content">
                        <h2 className="hs-h2"> Full Stack Web Developer </h2>
                        <div className="hs-content-intro">
                          Have a look at my portfolio and resume.
                        </div>
                      </div>
                      {/* <img className="image" src="/images/section-1.png" /> */}
                      <img className="image" src="/images/Earl.jpg" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Earl Waud.
                    <br />
                    <br />
                    Get informed, collaborate and discover projects I have worked on throughout the years!
                  </h1>
                </div>
                <Typed
                  loop
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                >
                </Typed>
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look at my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </BaseLayout>
  )
}

export default Index;
