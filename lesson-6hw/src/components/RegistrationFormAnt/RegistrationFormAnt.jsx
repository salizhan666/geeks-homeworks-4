import { Button, Form, Input } from 'antd'
import toast from 'react-hot-toast'
import { emailPattern } from '../../utils/util'

export const RegistrationFormAnt = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
    toast.success('Регистрация прошла успешно')
    form.resetFields()
  }

  return (
    <div>
      <h2>Валидация (Ant Design Form)</h2>
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ width: 250, margin: '0 auto', textAlign: 'left' }}>
        <Form.Item name="name" label="Имя" rules={[
          { required: true, message: "Укажите Ваше имя" }
        ]}>
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[
          { required: true, message: "Укажите Ваш Email" },
          { pattern: emailPattern, message: "Введите корректный Email" }
        ]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" label="Пароль" rules={[
          { required: true, message: "Укажите пароль" },
          { min: 8, message: "Пароль должен быть не короче 8 символов" }
        ]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item name="confirmPassword" label="Повторите пароль" dependencies={['password']} rules={[
          { required: true, message: "Подтвердите пароль" },
          ({ getFieldValue }) => ({
            validator: (_, value) =>
              !value || value === getFieldValue('password')
                ? Promise.resolve()
                : Promise.reject(new Error("Пароли должны совпадать"))
          })
        ]}>
          <Input.Password placeholder="Подтвердите пароль" />
        </Form.Item>
        <Button type="primary" htmlType="submit">Регистрация</Button>
      </Form>
    </div>
  )
}
