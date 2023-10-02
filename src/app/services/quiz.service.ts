import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public qizzes() {
    return this._http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz:any) {
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //Delete the quiz
  public deleteQuiz(qId:any) {
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }

  //Get the single quiz
  public getQuiz(qId:number) {
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }

  //Update quiz
  public updateQuiz(quiz:any) {
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }

  // get quizes by category
  public getQuizesByCategory(catId:any) {
    return this._http.get(`${baseUrl}/quiz/category/${catId}`);
  }

  // get published quiz
  public getPublishedQuizzes() {
    return this._http.get(`${baseUrl}/quiz/published-quiz`);
  }

  // get published quiz by category
  public getPublishedQuizzesOfCategory(catId:any) {
    return this._http.get(`${baseUrl}/quiz/category/published-quiz/${catId}`) 
  }


}
