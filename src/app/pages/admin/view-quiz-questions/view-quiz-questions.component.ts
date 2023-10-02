import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import { UpdateQuestionModalComponent } from '../update-question-modal/update-question-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
@Injectable({ providedIn: 'root' })
export class ViewQuizQuestionsComponent implements OnInit {

  questions:any = []
  qId:any;
  question = {
    quesId: '',
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz: {},
  };
  qTitle:String = '';


  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _popup:MatDialog,
    private modal:UpdateQuestionModalComponent,
  ) {}

  ngOnInit(): void {
      this.qId = this._route.snapshot.params['qid'];
      this.qTitle = this._route.snapshot.params['title'];
      console.log(this.qId);

      this._question.getQuestionsOfQuiz(this.qId).subscribe(
        (data:any) => {
          console.log(data);
          this.questions = data;
          if (this.questions[0] == null) {
            Swal.fire('Warning !','No questions are avialiable','warning');
          }
        },
        (error:any) => {
          console.log(error);
          Swal.fire('Error !',error.error,'error');
        }
      )
  }

  // displayStyle = "none";
  
  // openPopup(questId:any) {
  //   this.displayStyle = "block";
  //   console.log("Question ID is " + questId);
    
  //   this.question = this.questions.filter((question:any) => question.quesId == questId);
  //   this.modal.getQuestion(this.question);
  //   this.modal.ngOnInit();

  //   console.log(this.question);
  // }

  openPopup(questId:any) {
    console.log("Question ID is " + questId);
    let question = this.questions.filter((question:any) => question.quesId == questId);
    this._popup.open(QuestionDialogComponent,{
      closeOnNavigation: true,
      enterAnimationDuration: '600ms',
      exitAnimationDuration: '1000ms',
      data : {
        quesId: question[0].quesId,
        content: question[0].content,
        option1: question[0].option1,
        option2: question[0].option2,
        option3: question[0].option3,
        option4: question[0].option4,
        answer: question[0].answer,
        quiz: question[0].quiz,
      }
    }); 
  }

  public deleteQuestion(questId:any){
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._question.deleteQuestion(questId).subscribe(
          (data:any) => {
            this.questions = this.questions.filter((question:any) => question.quesId != questId); 
            Swal.fire('Success','Qustion deleted','success');
          },
          (error:any) => {
            Swal.fire('Error','Error occurs while deleting question','error');
            console.log(error);
          }
        );
      }
    });
  }

  // closePopup() {
  //   this.displayStyle = "none";
  // }

}
