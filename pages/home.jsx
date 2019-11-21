import '../styles.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import SideBar from '../components/sidebar'

export default function Home() {
  const themeID = useSelector(state => state.theme.themeID)
  return (
    <Container fluid className="vh-100">
      <Row className="mh-100 h-100">
        <Col xs={2} className={`h-100 column-bg-${themeID} text-color-${themeID}`}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  )
}

