import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qId = 0;
  quiz:any;
  categories:any;

  constructor(private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _router:Router,
    private _category:CategoryService){}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];

      this._quiz.getQuiz(this.qId).subscribe(
      (data:any) => {
        this.quiz = data;
        console.log(data);
      },
      (error:any) => {
        Swal.fire('Error !','Error in quiz loading','error');
      }
    );

    this._category.categories().subscribe(
      (data:any) => {
        this.categories = data;
      }
    );
  }

  //update form submit
  public updateData() {
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data:any) => {
        Swal.fire('Success','Quiz successfully updated','success').then((e) => {
          this._router.navigate(['/admin/quizzes']); // It will send on quizzes
        })
      },
      (error:any) => {
        Swal.fire('Error','Error occurs while updating','error');
      }
    );
  }


}
