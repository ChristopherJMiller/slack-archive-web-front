import '../styles.scss'

import { Container, Row, Col } from 'react-bootstrap'

import SideBar from '../components/sidebar'

function Index() {
 
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  )
}

export default Index

