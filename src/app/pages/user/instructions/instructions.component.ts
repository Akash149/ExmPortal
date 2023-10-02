import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qId:any;
  quiz:any;

  constructor(
    private _quiz:QuizService,
    private _route:ActivatedRoute,
    private _router:Router,
  ){}

  ngOnInit(): void {
      this.qId = this._route.snapshot.params['id'];
      this._quiz.getQuiz(this.qId).subscribe(
        (data:any) => {
          this.quiz = data;
          console.log(data);
        },
        (error:any) => {
          Swal.fire('Error','Error occurs while loading quiz','error');
        }
      )
  }

  startQuiz() {
    Swal.fire({
      title: 'Do you want start the quiz?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Start',
      confirmButtonColor: 'green',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['/start/' + this.qId]);
      }
    })
  }
}
