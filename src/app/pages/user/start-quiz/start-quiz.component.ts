import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qId:any;
  quiz:any;
  questions:any =[];

  marks:number = 0;
  correctAnswers = 0;
  attempted = 0;
  isSubmit = false;
  timer:any;

  constructor(
    private locationSt:LocationStrategy,
    private _route:ActivatedRoute,
    private _question:QuestionService,
  ) {}

  ngOnInit(): void {
      this.preventbackButton();
      this.qId = this._route.snapshot.params['id'];
      this.loadQuestions();
  }

  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qId).subscribe(
      (data:any) => {
        console.log(data);
        this.questions = data;
        this.timer = this.questions.length * 2 * 60;

        this.questions.forEach((q:any) => {
          q['givenAnswer'] = '';
        });

        this.startTimer();
      },
      (error:any) => {
        Swal.fire('Error','Error occurs while loading questions','error');
      }
    )
  }

  preventbackButton() {
    history.pushState(null,location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null,location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      icon:'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    },1000)
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer/60);
    let ss = this.timer-mm*60;
    return `${mm} min : ${ss} sec`;
  }

  printPage() {
    window.print();
  }

  evalQuiz() {
    this._question.evalQuiz(this.questions).subscribe(
      (data:any) => {
        console.log(data);
        this.correctAnswers = data.correctAnswers;
        this.marks = parseFloat(Number(data.marks).toFixed(2));
        this.attempted = data.attempted;
      },
      (error:any) => {
        console.log(error);
      }
    );
     this.isSubmit = true;
  //       this.questions.forEach( (q:any) => {
  //         if (q.givenAnswer == q.answer) {
  //           this.correctAnswer++;
  //           let marksSingle = this.questions[0].quiz.maxMarks/this.questions.length;
  //           this.marks += marksSingle;
  //         }

  //         if(q.givenAnswer.trim() != '') {
  //           this.attempted++;
  //         }
          
  //       });
  //       console.log("Correct answers: " + this.correctAnswer);
  //       console.log("Total marks: " + this.marks);
  //       console.log("Attempted: " + this.attempted);
   }

  // call to server to evaluate quiz
}
