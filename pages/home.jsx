import '../styles.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { updateChannels } from '../actions/pages'
import { changePage } from '../actions/nav'
import { changeTheme, THEME_COOKIE } from '../actions/theme'

import SideBar from '../components/sidebar'
import MessageBlock from '../components/messageBlock'

import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

require('../rpc/archiver_grpc_web_pb.js')

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()

  const theme = useSelector(state => state.theme)
  const pages = useSelector(state => state.pages)
  const currentPage = useSelector(state => state.nav.page)
  const [cookies, setCookie, removeCookie] = useCookies([THEME_COOKIE]);

  const themeID = theme.themeID
  if (!theme.checkedCookie) {
    if (cookies.theme) {
      dispatch(changeTheme(cookies.theme, setCookie))
    } else {
      dispatch(changeTheme(0, setCookie))
    }
  }

  if (!pages.channelsSet) {
    dispatch(updateChannels({
      'announcements': [
        {
          sender: 'John Hodson',
          message: 'Hello World!',
          icon: 'https://ca.slack-edge.com/T0T4D5MR7-U412Z3KUP-de7e1d0ae766-48',
          timestamp: 1574459022730
        },
        {
          sender: 'John Hodson',
          message: 'This was sent later!',
          icon: 'https://ca.slack-edge.com/T0T4D5MR7-U412Z3KUP-de7e1d0ae766-48',
          timestamp: 1574459022731
        },
        {
          sender: 'Rusty Sanchez',
          message: 'Hello World!',
          icon: 'https://ca.slack-edge.com/T0T4D5MR7-U77MJCRQU-c0c1e4aee029-48',
          timestamp: 1574459022732
        },
        {
          sender: 'John Hodson',
          message: 'Hello World!',
          icon: 'https://ca.slack-edge.com/T0T4D5MR7-U412Z3KUP-de7e1d0ae766-48',
          timestamp: 1574459022733
        }
      ],
      'ace-advising': [],
      'random-chat': []
    }))
  }
  
  const selectedMessages = pages.channels[currentPage]
  console.log(Object.keys(pages.channels))

  return (
    <Container fluid className={`vh-100 bg-${themeID}`}>
      <Row className="mh-100 h-100">
        <Col xs={3} className={`h-100 column-bg-${themeID} text-color-${themeID} px-0 pt-2`}>
          <SideBar 
            channels={Object.keys(pages.channels)}
            activePage={currentPage}
            changePage={(page) => {dispatch(changePage(page))}}
            changeTheme={(id) => {dispatch(changeTheme(id, setCookie))}}   
            theme={themeID}
            themes={theme.themes}  
          />
        </Col>
        <Col xs={9} className='h-100 px-0'>
          <MessageBlock
            messages={pages.channelsSet ? selectedMessages : []}
            theme={themeID}
          />
        </Col>
      </Row>
    </Container>
  )
}

