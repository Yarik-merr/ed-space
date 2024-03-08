import { Text } from '../../ui-kit/Text/Text'
import { Button } from '../../ui-kit/Button/Button'
import { Capabilities } from '../../components/Capabilities/Capabilities'

import styles from './styles.module.scss'

const CAPABILITIES = [
  ['Неограниченное колличество учеников', 'Трансляции', 'Точная статистика'],
  [
    'Производительную видеосвязь с учениками',
    'Продукт с ежемесячной подпиской',
  ],
  [
    'Лучшая конфиденциальность и защита',
    'Готовый шаблон для организации обучения',
  ],
  ['Сообщества', 'Любое количество уроков и учебных программ'],
]

const INFO = [
  [
    'Любых онлайн-школ',
    'Быстрый запуск, легкое управление, все инструменты в одной платформе.',
  ],
  [
    'Образовательных курсов',
    'Статистика по всем образовательным процессам позволяет постоянно улучшать ваш продукт.',
  ],
  [
    'Корпоративных учебных порталов',
    'Надежная защита, бесперебойная работа и высокая производительность системы позволит наслаждаться процессом обучения.',
  ],
]

export function PricePage({ send, open }) {
  const handleClick = () => {
    if (open) {
      open(true)
    }
  }

  return (
    <section className={styles.pricePage} id="Price">
      <div className={styles.pricePage__bg} />
      <div className={styles.pricePage__block_one}>
        <Text size="t5w">Выбирайте Ed Space сегодня и вы получите</Text>
        <div className={styles.pricePage__capabilities}>
          {CAPABILITIES.map((capabilities, index) => (
            <div key={index}>
              {capabilities.map((item, i) => (
                <Capabilities key={i}>{item}</Capabilities>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pricePage__block_two}>
        <div>
          <Text size="t5w">Запустите свою онлайн-школу</Text>
          <Text size="t3w">
            Или разверните корпоративный учебный портал уже сегодня.
          </Text>
        </div>
        <div>
          <Text size="t4g">Цена 250 рублей за 1 ученика в месяц</Text>
          <Text size="t0w">
            Все готово для запуска. Попробуйте 7-дневный демо-доступ
          </Text>
        </div>
        <Button onClick={handleClick} disabled={send} ButtonGreen>
          ПОПРОБОВАТЬ БЕСПЛАТНО
        </Button>
      </div>
      <div className={styles.pricePage__block_three}>
        <Text size="t5w">Точно подойдет для:</Text>
        {INFO.map((info, index) => (
          <div key={index}>
            <Text size="t3g">{info[0]}</Text>
            <Text size="t0w">{info[1]}</Text>
          </div>
        ))}
        <img src="/images/ImageSection4.svg" alt="" />
      </div>
    </section>
  )
}
