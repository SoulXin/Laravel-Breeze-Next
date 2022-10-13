import {
  Dropdown, Nav, NavItem,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPowerOff, faUserAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../hooks/auth'

const ProfileDropdownItem = (props) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

const HeaderProfileNav = () => {
  const { logout } = useAuth();

  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" bsPrefix="shadow-none" className="py-0 px-2 rounded-0" id="dropdown-profile">
          <FontAwesomeIcon icon={faUserAlt} size="lg" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="pt-2">
          <Dropdown.Item onClick={logout}>
            <ProfileDropdownItem icon={faPowerOff}>Logout</ProfileDropdownItem>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}

export default HeaderProfileNav;