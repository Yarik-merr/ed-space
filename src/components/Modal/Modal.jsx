import { useState } from 'react'
import { Button } from '../../ui-kit/Button/Button'
import { Text } from '../../ui-kit/Text/Text'
import styles from './styles.module.scss'

export function Modal({ setOpenModal }) {
  const [name, setName] = useState('')
  const [nameJob, setNameJob] = useState('')
  const [post, setPost] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const closeHandler = () => {
    setOpenModal(false)
  }

  const handler = (e) => {
    const data = {
      name,
      nameJob,
      post,
      email,
      tel,
    }
    console.log(data)

    closeHandler()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <img
          src="images/EdSpace.svg"
          alt=""
          className={styles.modal__wrapper_img}
        />
        <img
          src="images/cancel.svg"
          alt=""
          className={styles.modal__wrapper_cancel}
          onClick={closeHandler}
        />

        <label htmlFor="" className={styles.modal__wrapper_form}>
          <input
            type="text"
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <input
            type="tel"
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
          />
          <label htmlFor="myCheckbox">
            <div>
              <Text className={styles.modal__wrapper_checkbox_textT}>
                Я согласен на обработку моих
              </Text>
              <Text className={styles.modal__wrapper_checkbox_textB}>
                персональных данных
              </Text>
            </div>
          </label>
        </div>
        <Button className={styles.modal__wrapper_btn} onClick={handler}>
          ОТПРАВИТЬ
        </Button>
      </div>
    </div>
  )
}
