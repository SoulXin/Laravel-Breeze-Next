import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import HeaderNotificationNav from '../Header/HeaderNotificationNav'
import HeaderProfileNav from '../Header/HeaderProfileNav'
import { Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux';

const Header = (props)  => {
  const { toggleSidebar, toggleSidebarMd } = props

  return (
    <header className="header sticky-top mb-4 p-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button
          variant="link"
          className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          variant="link"
          className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebarMd}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
       
        <div className="header-nav ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-3">
          <HeaderProfileNav />
        </div>
      </Container>
    </header>
  )
}

const mapStateToProps = state => {
    return {
      toggle: state.utils.sidebarShow
    }
  }

export default connect(mapStateToProps, null)(Header);