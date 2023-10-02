import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId:any;
  quizzes:any = [];

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _snack:MatSnackBar){}

  ngOnInit(): void {
      

      this._route.params.subscribe((params:any) => {
        console.log(params);
        this.catId = params.catId;

        if (this.catId == 0) {
          this._quiz.getPublishedQuizzes().subscribe(
            (data:any) => {
              if (data == null) {
                this._snack.open('No quizes are avialiable in this category','',{
                  duration: 3000,
                });
              } else {
                this.quizzes = data;
                console.log(data);
              } 
            },
            (error:any) => {
              Swal.fire('Error','Error occurs while loading quiz');
            }
            
          )
        } else {
          this._quiz.getPublishedQuizzesOfCategory(this.catId).subscribe(
            (data:any) => {
              this.quizzes = data;
              console.log(data);
              if (data == null) {
                this._snack.open('No quizes are avialiable in this category','',{
                  duration: 3000,
                });
              }
            },
            (error:any) => {
              Swal.fire('Error','Error occurs while loading quizes','error');
            }
          );
        }
      });  
  }

}
