import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'
import styles from './styles.module.scss'

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container className={styles.Wrapper}>
        <Navbar.Brand href="#home">
          <Image src="images/EdSpace_black.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.Wrapper__word1}>Возможность</Nav.Link>
            <Nav.Link href="#link" className={styles.Wrapper__word2}>Стоимость</Nav.Link>
            <Nav.Link href="#contacts" className={styles.Wrapper__word3}>Контакты</Nav.Link>
            <NavDropdown title="RU" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
