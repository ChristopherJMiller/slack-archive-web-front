import {
  Nav
} from 'react-bootstrap'

function SideBar() {
  return (
    <>
      <h3 className="mt-2">ACE</h3>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </>
  )
}

export default SideBar