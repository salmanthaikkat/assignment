import { useEffect, useState } from 'react';
import requests from './services/apiService';
import QuestionContainer from './components/QuestionContainer';
import QuestionModal from './components/QuestionModal';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Question } from './interfaces';

import './App.scss';


function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | undefined>();
  const [remainingQuestions, setRemainingQuestions] = useState<number>(0);

  const fetchData = () => {
    requests
      .getQuestions(page)
      .then((data) => {
        setQuestions([
          ...questions,
          ...data.items
        ]);
        setPage(page + 1);
        setHasMore(data.has_more);
        setRemainingQuestions(data.quota_remaining);
      })
      .catch(err => {
        throw err;
      });
  }

  useEffect(() => {
    fetchData();  
  }, []);

  const handleOpen = (question: Question) => {
    setSelectedQuestion(question);
    setOpen(true);
  }

  const handleClose = () => {
    setSelectedQuestion(undefined);
    setOpen(false);
  }

  return (
    <div className="App">
      <h1>Questions</h1>
      <InfiniteScroll
        dataLength={remainingQuestions}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {
          questions.map((question: Question) => (
            <QuestionContainer question={question} key={question.question_id} onClick={handleOpen}/>
          ))
        }
      </InfiniteScroll>
      <QuestionModal open={open} handleClose={handleClose} question={selectedQuestion}/>
    </div>
  );
}

export default App;
