import { ConfigProvider, theme } from 'antd'
import { Toaster } from 'react-hot-toast'
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm'
import { RegistrationFormHook } from './components/RegistrationFormHook/RegistrationFormHook'
import { RegistrationFormAnt } from './components/RegistrationFormAnt/RegistrationFormAnt'

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Toaster position="top-right" />
      <RegistrationForm />
      <RegistrationFormHook />
      <RegistrationFormAnt />
    </ConfigProvider>
  )
}

export default App
