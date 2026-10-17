import { useState } from 'react'
import cls from './Quiz.module.scss'

const Quiz = ({ question, options, correctAnswer }) => {
  const [selected, setSelected] = useState(null)

  return (
    <div className={cls.quiz}>
      <h2 className={cls.quiz__question}>{question}</h2>
      <div className={cls.quiz__options}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={cls.quiz__option}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {selected === correctAnswer && (
        <p className={cls.quiz__hint}>ПРАВИЛЬНО!</p>
      )}
    </div>
  )
}

export default Quiz
