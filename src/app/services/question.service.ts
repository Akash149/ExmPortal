import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http:HttpClient
  ) { }

  // Get all question by quiz
  public getQuestionsOfQuiz(qId:any) {
    return this._http.get(`${baseUrl}/question/quiz/${qId}`);
  }

  public getQuestionsOfQuizForTest(qId:any) {
    return this._http.get(`${baseUrl}/question/quiz/${qId}`);
  }

  // Add question by quiz
  public addQuestion(question:any) {
    return this._http.post(`${baseUrl}/question/`,question);
  }

  // update question
  public updateQuestion(question:any) {
    return this._http.put(`${baseUrl}/question/`,question);
  }

  public deleteQuestion(questId:any) {
    return this._http.delete(`${baseUrl}/question/${questId}`);
  }

  public evalQuiz(questions:any) {
    return this._http.post(`${baseUrl}/question/eval-quiz`, questions);
  }
}
