import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId:any;
  qTitle:any;
  public Editor = ClassicEditor;

  question:any = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  }

  constructor(
    private _route:ActivatedRoute,
    private _snack:MatSnackBar,
    private _question:QuestionService
  ) {}

  ngOnInit(): void {
      
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['qTitle']
    this.question.quiz['id'] = this.qId;
  }

  addQuestionForm() {
    if (this.question.content.trim()=='' || this.question.content==null) {
      this._snack.open('Question content is required !','',{
        duration: 3000,
      });
      return;
    }
    if (this.question.answer.trim()=='' || this.question.answer==null) {
      this._snack.open('Answer is required !','',{
        duration: 3000,
      });
      return;
    }

    // Form submit
    this._question.addQuestion(this.question).subscribe(
      (data:any) => {
        Swal.fire('Success','Added successfully', 'success');
      },
      (error:any) => {
        Swal.fire('Error',error.error,'error');
      }
    );
  }


}
