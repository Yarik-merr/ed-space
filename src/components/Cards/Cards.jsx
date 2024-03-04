import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import styles from './styles.module.scss'

export function Cards({ onClickLink }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/images?_quantity=6&_type=kittens')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setCards(data.data)
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [])

  return (
    <div>
      <Row md={4} className={styles.Wrap}>
        {cards.map((item, i) => (
          <Col key={i} className={styles.ewd}>
            <Link
              to={`/card/${i + 1}`}
              onClick={onClickLink}
              style={{ textDecoration: 'none' }}
            >
              <Card className={styles.Cards}>
                <Card.Img
                  variant="top"
                  src={item.url}
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                  }}
                />
                <Card.Body style={{ padding: '17px 0px' }}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}
