import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component'
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { authInterceptorProviders } from './services/auth.Interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionModalComponent } from './pages/admin/update-question-modal/update-question-modal.component';
import { QuestionDialogComponent } from './pages/admin/question-dialog/question-dialog.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { QuizTableComponent } from './pages/admin/quiz-table/quiz-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    SidenavbarComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionModalComponent,
    QuestionDialogComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartQuizComponent,
    QuizTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
