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
    <Row md={4} className={styles.wrapper}>
      {cards.map((item, i) => (
        <Col key={i}>
          <Link to={`/card/${i + 1}`} onClick={onClickLink}>
            <Card className={styles.wrapper__card}>
              <Card.Img
                variant="top"
                src={item.url}
                className={styles.wrapper__card__img}
              />
              <Card.Body className={styles.wrapper__card__body}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
