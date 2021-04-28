import { useEffect } from 'react';
import './App.css';
import requests from './services/apiService';
import QuestionContainer from './components/QuestionContainer';

const data = {
  answer_count: 3,
  content_license: "CC BY-SA 4.0",
  creation_date: 1619620830,
  is_answered: true,
  last_activity_date: 1619626473,
  link:
    "https://stackoverflow.com/questions/67302383/swiftui-using-all-but-one-values-of-enum-for-different-pickers",
  owner: {
    accept_rate: 86,
    display_name: "Zonker.in.Geneva",
    link: "https://stackoverflow.com/users/1363998/zonker-in-geneva",
    profile_image:
      "https://www.gravatar.com/avatar/cad3d6c65cb93bd79273d02f17904648?s=128&d=identicon&r=PG",
    reputation: 1172,
    user_id: 1363998,
    user_type: "registered",
  },

  question_id: 67302383,
  score: 1,
  tags: ["swift", "enums", "swiftui", "picker"],
  title: "SwiftUI - using all but one values of Enum for different Pickers",
  view_count: 34,
};

function App() {
  useEffect(() => {
    console.log('Jee')
    // requests.getQuestions(1).then((data) => {}).catch(err => {});    
  }, []);

  return (
    <div className="App">
      <QuestionContainer question={data}/>
    </div>
  );
}

export default App;
