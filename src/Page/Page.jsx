import React, { useState } from 'react'
import { Cards } from '../components/Cards/Cards'
import { Text } from '../ui-kit/Text/Text'
import { Button } from '../ui-kit/Button/Button'
import { Modal } from '../components/Modal/Modal'
import { Header } from '../components/Header/Header'
import { Slider } from '../components/Slider/Slider'
import { SuitableInfo } from '../components/SuitableInfo/SuitableInfo'
import { Footer } from '../components/Footer/Footer'
import { Capabilities } from '../components/Capabilities/Capabilities'

export const Page = () => {
  const [openModal, setOpenModal] = useState(false)
  const [dataSent, setDataSent] = useState(false)
  console.log(dataSent)

  return (
    <div>
      <section>
        <Header />
        <Slider />
      </section>
      <section className="section-2">
        <div className="section-2__content">
          <Text size="t5w">Точно подойдет для: </Text>
          <SuitableInfo />
        </div>

        <Button onClick={setOpenModal} disabled={dataSent} ButtonGreen>
          <Text size="t0b">ПОПРОБОВАТЬ БЕСПЛАТНО</Text>
        </Button>
      </section>

      <section className="section-3">
        <Text size="t5b" className="section-3__title">
          Возможности Ed Space
        </Text>
        <Text size="t2g" className="section-3__subtitle">
          Поможем перенести корпоративную академию, базу знаний, учебные курсы,
          настроим систему мотивации обучения, круглосуточная поддержка.
        </Text>
        <Cards />
        <Button className="section-3__btn" onClick={setOpenModal} ButtonGreen>
          <Text size="t0b">ПОПРОБОВАТЬ БЕСПЛАТНО</Text>
        </Button>
      </section>
      <section className="section-4">
        <div className="section-4__bg"></div>
        <div className="section-4__block-one">
          <Text size="t5w" className="section-4__Text">
            Выбирайте Ed Space сегодня и вы получите
          </Text>
          <div className="section-4__capabilities">
            <div>
              <Capabilities>Неограниченное колличество учеников</Capabilities>
              <Capabilities>Трансляции</Capabilities>
              <Capabilities>Точная статистика</Capabilities>
            </div>
            <div>
              <Capabilities>
                Производительную видеосвязь с учениками
              </Capabilities>
              <Capabilities>Продукт с ежемесячной подпиской</Capabilities>
            </div>
            <div>
              <Capabilities>Лучшая конфиденциальность и защита</Capabilities>
              <Capabilities>
                Готовый шаблон для организации обучения
              </Capabilities>
            </div>
            <div>
              <Capabilities>Сообщества</Capabilities>
              <Capabilities>
                Любое количество уроков и учебных программ
              </Capabilities>
            </div>
          </div>
        </div>
        <div className="section-4__block-two">
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
          <Button onClick={setOpenModal} disabled={dataSent} ButtonGreen>
            ПОПРОБОВАТЬ БЕСПЛАТНО
          </Button>
        </div>
        <div className="section-4__block-three">
          <Text size="t5w">Точно подойдет для:</Text>
          <div>
            <Text size="t3g">Любых онлайн-школ</Text>
            <Text size="t0w">
              Быстрый запуск, легкое управление, все инструменты в одной
              платформе.
            </Text>
          </div>
          <div>
            <Text size="t3g">Образовательных курсов</Text>
            <Text size="t0w">
              Статистика по всем образовательным процессам позволяет постоянно
              улучшать ваш продукт.
            </Text>
          </div>
          <div>
            <Text size="t3g">Корпоративных учебных порталов</Text>
            <Text size="t0w">
              Надежная защита, бесперебойная работа и высокая производительность
              системы позволит наслаждаться процессом обучения.
            </Text>
          </div>
          <img src="/images/ImageSection4.svg" alt="" />
        </div>
      </section>
      <footer className="Footer">
        <Footer />
      </footer>

      {openModal && (
        <Modal setOpenModal={setOpenModal} setDataSent={setDataSent} />
      )}
    </div>
  )
}
