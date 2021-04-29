import { Question } from "../../interfaces";
import moment from 'moment';
interface Props {
  question: Question,
  onClick: (question: Question) => void
}


const QuestionContainer: React.FC<Props> = ({ question, onClick }) => {
  return (
    <div className='question-container' onClick={() => onClick(question)}>
      <div className='question-container__user'>
        <img src={ question.owner.profile_image } alt={'user'}/>
        <span> { question.owner.display_name } </span>
      </div>
      <div className='question-container__main'>
        <div className='question-container__main-title'>
          { question.title }
        </div>
        <div className='question-container__main-date'>
          { moment.unix(question.creation_date).format('dddd, MMMM Do, YYYY h:mm:ss A') }
        </div>
      </div>
    </div>
  )
}

export default QuestionContainer;