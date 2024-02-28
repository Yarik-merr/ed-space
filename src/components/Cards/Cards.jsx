import data from '../../assets/data/card.json'
import styles from './styles.module.scss'
import { Card, Col, Row } from 'react-bootstrap'

export function Cards() {
  return (
    <div >
      <Row md={4} className={styles.Wrap}>
        {data.map((item, i) => (
          <Col key={i} >
            <Card
              style={{
                width: '18rem',
                padding: '40px 50px',
                alignItems: 'start',
              }}
              className={styles.Cards}
            >
              <Card.Img
                variant="top"
                src={item.images}
                style={{ width: 'fit-content' }}
              />
              <Card.Body style={{ padding: '17px 0px' }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
