interface User {
  display_name: string;
  profile_image: string;
}

export interface Question {
  question_id: number;
  title: string;
  owner: User;
  creation_date: number;
  link: string;
  body: string;
}