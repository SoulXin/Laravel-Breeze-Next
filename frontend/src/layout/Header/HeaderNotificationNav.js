import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Nav } from 'react-bootstrap'

const HeaderNotificationNav = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default HeaderNotificationNav;