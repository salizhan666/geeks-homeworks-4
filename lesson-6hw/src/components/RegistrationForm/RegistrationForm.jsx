import scss from './RegistrationForm.module.scss'
import { requiredFormData, emailPattern } from '../../utils/util'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const RegistrationForm = () => {
  const [formData, setFormData] = useState(requiredFormData)
  const [errors, setErrors] = useState(requiredFormData)

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newErrors = { ...requiredFormData }

    if (!formData.name.trim()) {
      newErrors.name = "Укажите Ваше имя"
    }

    if (!formData.email) {
      newErrors.email = "Укажите Ваш Email"
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Введите корректный Email"
    }

    if (!formData.password) {
      newErrors.password = "Укажите пароль"
    } else if (formData.password.length < 8) {
      newErrors.password = "Пароль должен быть не короче 8 символов"
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Пароли должны совпадать"
    }

    setErrors(newErrors)

    const hasError = Object.values(newErrors).some((error) => error)
    if (hasError) return

    console.log(formData)
    toast.success('Регистрация прошла успешно')
    setFormData(requiredFormData)
  }

  return (
    <div>
        <h2>Валидация (нативный способ)</h2>
        <form className={scss.registrationForm} onSubmit={onSubmit}>
          <label className={scss.field}>
            <span>{errors.name}</span>
            Имя
            <input name="name" type="text" placeholder='Имя' value={formData.name} onChange={onChange} />
          </label>
          <label className={scss.field}>
            <span>{errors.email}</span>
            Email
            <input name="email" type="text" placeholder='Email' value={formData.email} onChange={onChange} />
          </label>
          <label className={scss.field}>
            <span>{errors.password}</span>
            Пароль
            <input name="password" type="password" placeholder='Пароль' value={formData.password} onChange={onChange} />
          </label>
          <label className={scss.field}>
            <span>{errors.confirmPassword}</span>
            Повторите пароль
            <input name="confirmPassword" type="password" placeholder='Подтвердите пароль' value={formData.confirmPassword} onChange={onChange} />
          </label>
          <button type="submit">Регистрация</button>
        </form>
    </div>
  )
}
