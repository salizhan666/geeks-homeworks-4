import Quiz from './Quiz/Quiz'

const App = () => (
  <Quiz
    question="Как зовут лошадь Геральта из Ривии?"
    options={['Плотва', 'Буян', 'Ласточка', 'Молния']}
    correctAnswer="Плотва"
  />
)

export default App
