import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	getQuestions: (page: number) => {
    return instance.get(`/questions?order=desc&sort=activity&site=stackoverflow&page=${page}&pagesize=10&filter=withbody`).then(responseBody)
  },
};

export default requests;