import scss from '../RegistrationForm/RegistrationForm.module.scss'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { emailPattern } from '../../utils/util'

export const RegistrationFormHook = () => {
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    toast.success('Регистрация прошла успешно')
    reset()
  }

  return (
    <div>
      <h2>Валидация (react-hook-form)</h2>
      <form className={scss.registrationForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={scss.field}>
          <span>{errors.name?.message}</span>
          Имя
          <input type="text" placeholder="Имя" {...register('name', {
            required: "Укажите Ваше имя"
          })} />
        </label>
        <label className={scss.field}>
          <span>{errors.email?.message}</span>
          Email
          <input type="text" placeholder="Email" {...register('email', {
            required: "Укажите Ваш Email",
            pattern: { value: emailPattern, message: "Введите корректный Email" }
          })} />
        </label>
        <label className={scss.field}>
          <span>{errors.password?.message}</span>
          Пароль
          <input type="password" placeholder="Пароль" {...register('password', {
            required: "Укажите пароль",
            minLength: { value: 8, message: "Пароль должен быть не короче 8 символов" }
          })} />
        </label>
        <label className={scss.field}>
          <span>{errors.confirmPassword?.message}</span>
          Повторите пароль
          <input type="password" placeholder="Подтвердите пароль" {...register('confirmPassword', {
            required: "Подтвердите пароль",
            validate: (value) => value === getValues('password') || "Пароли должны совпадать"
          })} />
        </label>
        <button type="submit">Регистрация</button>
      </form>
    </div>
  )
}
