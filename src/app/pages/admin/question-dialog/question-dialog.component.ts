import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit{

  question:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _question:QuestionService
    )
    {
    this.question = data;
    console.log("data is ");
    console.log(data);
  }

  ngOnInit(): void {
      console.log(this.question);
  }

  updateQuestion(){
    this._question.updateQuestion(this.question).subscribe(
      (data:any) => {
        Swal.fire('Success','Question has been updated','success');
      },
      (error:any) => {
        Swal.fire('Error','Error occurs while updating','error');
      }
    );
  }
}
