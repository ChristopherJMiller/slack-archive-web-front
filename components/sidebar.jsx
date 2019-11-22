import {
  Nav
} from 'react-bootstrap'

function SideBar(props) {
  const channelLinks = props.channels.map((channel) => {
    let linkColor = channel == props.activePage ? 
      `active-item-text-${props.theme}` : `text-color-${props.theme}`
    let linkRowColor = channel == props.activePage ?
      `active-item-${props.theme}`: `hover-item-${props.theme}`
    return (
      <div className={`w-100 ${linkRowColor}`}>
        <Nav.Link 
          eventKey={channel}
          className={linkColor}
        >
          # {channel}
        </Nav.Link>
      </div>
    )
  })
  return (
    <>
      <h4 className="mt-2 pl-2">ACE</h4>
      <p className="pl-2 my-1">Channels</p>
      <Nav 
        className="flex-column"
        onSelect={(selectedKey) => { props.changePage(selectedKey) }}
      >
        {channelLinks}
      </Nav>
    </>
  )
}

export default SideBar