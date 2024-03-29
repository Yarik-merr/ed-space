import { useState } from 'react'
import { Button } from '../../ui-kit/Button/Button'
import { Text } from '../../ui-kit/Text/Text'
import styles from './styles.module.scss'

export function Modal({ setOpenModal, setDataSend = false }) {
  const [name, setName] = useState('')
  const [nameJob, setNameJob] = useState('')
  const [post, setPost] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [activeButton, setActiveButton] = useState(false)

  const closeHandler = () => {
    setOpenModal(false)
  }

  const activeHandler = () => {
    setActiveButton(true)
  }

  const handler = (e) => {
    if (activeButton && name && nameJob && post && email && tel) {
      const data = {
        name,
        nameJob,
        post,
        email,
        tel,
      }
      console.log(data)
      setDataSend(true)
      closeHandler()
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <img
          src="/images/EdSpace.svg"
          alt=""
          className={styles.modal__wrapper_img}
        />
        <img
          src="/images/x-lg.svg"
          alt=""
          className={styles.modal__wrapper_cancel}
          onClick={closeHandler}
        />

        <label className={styles.modal__wrapper_form}>
          <input
            type=""
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Имя Фамилия"
          />
          <input
            type="text"
            onChange={(e) => setNameJob(e.target.value)}
            value={nameJob}
            placeholder="Название организации"
          />
          <input
            type="text"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            placeholder="Должность"
          />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <input
            type="tel"
            name='tel'
            onChange={(e) => setTel(e.target.value)}
            value={tel}
            placeholder="Телефон"
          />
        </label>
        <div className={styles.modal__wrapper_checkbox}>
          <input
            id="myCheckbox"
            type="checkbox"
            className={styles.modal__wrapper_checkbox_btn}
            value={activeButton}
            onClick={activeHandler}
          />
          <label htmlFor="myCheckbox">
            <div>
              <Text size="t0g">Я согласен на обработку моих</Text>
              <Text size="t0b" className={styles.modal__wrapper_checkbox_textB}>
                персональных данных
              </Text>
            </div>
          </label>
        </div>
        <Button
          className={styles.modal__wrapper_btn}
          onClick={handler}
          ButtonGreen
        >
          ОТПРАВИТЬ
        </Button>
      </div>
    </div>
  )
}
