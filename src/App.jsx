import React from 'react'
import { Capabilities } from './components/Capabilities/Capabilities'

const App = () => {
  const ICON = '/images/accept.svg'
  return (
    <div>
      <Capabilities imgSrc={ICON}>
        Неограниченное колличество учеников
      </Capabilities>
      <Capabilities imgSrc={ICON}>
        Производительную видеосвязь с учениками
      </Capabilities>
      <Capabilities imgSrc={ICON}>
        Лучшая конфиденциальность и защита
      </Capabilities>
      <Capabilities imgSrc={ICON}>
        Готовый шаблон для организации обучения
      </Capabilities>
      <Capabilities imgSrc={ICON}>
        Любое количество уроков и учебных программ
      </Capabilities>
    </div>
  )
}

export default App
