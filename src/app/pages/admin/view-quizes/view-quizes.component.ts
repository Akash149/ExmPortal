import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

  quizzes:any = []
  constructor(private _quiz:QuizService) {}

  ngOnInit(){
    this._quiz.qizzes().subscribe((data:any) => {
      this.quizzes = data;
      console.log(this.quizzes);
    },
    (error) => {
      console.log(error);
      Swal.fire('Error !',"Error in loading data",'error');
    })
  }

  deleteQuiz(qId:any) {
   Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    confirmButtonText: 'Delete',
    showCancelButton: true,
   }).then((result) => {
    if (result.isConfirmed) {
      // Delete data
      this._quiz.deleteQuiz(qId).subscribe(
        (data:any) => {
          //remove quiz from front-end
          this.quizzes = this.quizzes.filter((quiz:any) => quiz.id != qId );
          Swal.fire('success','Quiz deleted !','success');
        },
        (error:any) => {
          console.log(error);
          Swal.fire('Error !','Error in delete quiz','error');
        }
      );
    }
   });
  }

}
