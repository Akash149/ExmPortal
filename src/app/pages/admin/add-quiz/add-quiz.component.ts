import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import baseUrl from 'src/app/services/helper';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

categories:any = []

quiz = {
  title: '',
  description: '',
  maxMarks: '',
  numberOfQuestions: '',
  active: true,
  category: {
    cid: '',
  },
}

constructor(private _http:HttpClient, 
  private _category:CategoryService,
  private _quiz:QuizService,
  private snack:MatSnackBar ){}

ngOnInit(): void {
  this._category.categories().subscribe(
    (data:any) => {
      // load categories
      this.categories = data;
      console.log(data);
    }, 
    (error:any) => {
      console.log(error);
      Swal.fire('Error!!','error in loading data from server','error');
    }
  );
}

addQuiz() {
  if(this.quiz.title.trim() == '' || this.quiz.title == null) {
    this.snack.open('Title is required, It should not be blank', '', {
      duration: 3000,
    });
    return
  }
 
  this._quiz.addQuiz(this.quiz).subscribe(
    (data:any) => {
      Swal.fire('Success','Quiz successfully added !','success');
    },
    (error:any) => {
      Swal.fire('Error!','Error occurs while adding quiz','error');
    }
  )
}
}
