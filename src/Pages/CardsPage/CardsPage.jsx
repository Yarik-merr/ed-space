import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import styles from './styles.module.scss'

export const CardsPage = () => {
  const { id } = useParams()
  const [card, setCards] = useState([])
  const [desc, setDesc] = useState([])

  useEffect(() => {
    fetch(
      'https://fakerapi.it/api/v1/persons?_quantity=6&_gender=male&_birthday_start=2005-01-01'
    )
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

  useEffect(() => {
    fetch(
      'https://fakerapi.it/api/v1/products?_quantity=6&_taxes=12&_categories_type=uuid'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setDesc(data.data)
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [])

  const matchedItem = card.find((item) => item.id === parseInt(id))
  const descItem = desc.find((item) => item.id === parseInt(id))

  const contentToShow = matchedItem
    ? matchedItem.firstname
    : `No content found for id ${id}`

  const descToShow = descItem
    ? descItem.description
    : `No description found for id ${id}`

  return (
    <div className={styles.CardsPage}>
      <Header />
      <h1 className={styles.CardsPage__card}>
        {contentToShow} - {descToShow}
      </h1>
      <Footer />
    </div>
  )
}
