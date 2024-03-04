import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styles from './styles.module.scss'

const ContentArray = [
  {
    id: 0,
    content:
      '"Организация учебного процесса" - это процесс планирования, координации и управления образовательными мероприятиями и активностями в учебных учреждениях или других образовательных организациях. Этот процесс включает в себя различные аспекты, такие как разработка учебных программ, подготовка учебных материалов, назначение учителей и преподавателей, учебное планирование, контроль и оценка успеваемости студентов, организация экзаменов и тестирования, а также создание условий для эффективного обучения и развития обучающихся. Эта деятельность направлена на достижение образовательных целей и обеспечение качественного образования для студентов и учащихся.',
  },
  {
    id: 1,
    content:
      'Управление расписанием занятий - это процесс планирования, организации и контроля распределения учебных занятий во времени для студентов или учащихся в учебных заведениях. Этот процесс включает в себя создание расписания занятий, определение дат, времени и мест проведения занятий, а также назначение учителей или преподавателей для каждого занятия.',
  },
  {
    id: 2,
    content:
      'Администрирование домашних заданий - это процесс управления и координации выполнения домашних заданий студентами или учащимися в учебных заведениях. Он включает в себя ряд действий и задач, связанных с организацией, назначением, отслеживанием и оценкой домашних заданий',
  },
  {
    id: 3,
    content:
      'Задания для учеников - это инструкции или задачи, которые преподаватели или учителя назначают студентам или учащимся для выполнения во время учебного процесса. Эти задания могут быть различными по своему характеру, цели и формату',
  },
  {
    id: 4,
    content:
      'Мониторинг посещения занятий - это процесс отслеживания присутствия студентов на учебных занятиях, чтобы обеспечить регулярность и точность учебного процесса.',
  },
  {
    id: 5,
    content:
      'Хранение записей о посещении занятий на платформе обеспечивает централизованный доступ к этой информации для всех заинтересованных сторон, таких как администраторы, преподаватели, студенты и их родители.',
  },
]

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
