import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-question-modal',
  templateUrl: './update-question-modal.component.html',
  styleUrls: ['./update-question-modal.component.css']
})

@Injectable({ providedIn: 'root' })
export class UpdateQuestionModalComponent implements OnInit {


  question:any = {
    quesId: '',
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz: {},
  };

  displayStyle = "none";
  constructor(){}

  ngOnInit(): void {
    this.displayStyle = "block";
  }

  getQuestion(question:any) {
    this.question = question;
  }

  closePopup() {
    this.displayStyle = "none";
  }


}

// export const updateQuestionModalProviders = [
//   {
//       provide: UpdateQuestionModalComponent,
//       useClass: UpdateQuestionModalComponent,
//       multi: true,
//   },
// ];
