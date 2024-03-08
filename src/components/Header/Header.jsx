import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styles from './styles.module.scss'

const menuItems = [
  ['Capabilities', 'Возможности'],
  ['Price', 'Стоимость'],
  ['Contacts', 'Контакты'],
]

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow" id="Home">
      <Container className={styles.header}>
        <Navbar.Brand href="#home">
          <Image src="/images/EdSpace_black.svg" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.header__nav}>
            <div>
              {menuItems.map((item, key) => (
                <AnchorLink href={`#${item[0]}`} key={key}>
                  <Nav.Link>{item[1]}</Nav.Link>
                </AnchorLink>
              ))}
            </div>
          </Nav>
        </Navbar.Collapse>
        <NavDropdown title="RU" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  )
}
