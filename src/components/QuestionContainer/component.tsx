import { Question } from "../../interfaces";

interface Props {
  question: Question
}


const QuestionContainer: React.FC<Props> = ({ question }) => {
  return (
    <div className='question-container'>
      <div className='question-container__user'>
        <img src={ question.owner.profile_image } alt={'user'}/>
        <span> { question.owner.display_name } </span>
      </div>
      <div className='question-container__main'>
        <div className='question-container__main-title'>
          { question.title }
        </div>
        <div className='question-container__main-date'>
          { question.creation_date }
        </div>
      </div>
    </div>
  )
}

export default QuestionContainer;