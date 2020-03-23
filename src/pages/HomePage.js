import React from 'react'
import { Container, Row, Col, Jumbotron, Tabs, Tab } from 'react-bootstrap';
import ErrorDiv from '../components/kitchen-sink/ErrorDiv';


export default function HomePage() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col xs={12} >
          <Jumbotron fluid >
            <Container>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h1>Kya Khana Banaogey?</h1>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <p>
                    This is a simple hero unit, information banner about the snake game
                                    </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="justify-content-center">
            <Tab eventKey="home" title="Home">
            </Tab>
            <Tab eventKey="stats" title="Stats">
              <ErrorDiv message="Work is under progress to show your gameplay statistics." />
            </Tab>
            <Tab eventKey="other" title="Other Info" disabled>
              <ErrorDiv message="Section not available yet!" />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}
