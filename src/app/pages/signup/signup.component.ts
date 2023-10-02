import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack: MatSnackBar) {}
  ngOnInit(): void {}

  public user = {
    username: '',
    password: '',
    email:'',
    firstName: '',
    lastName: '',
    phone:''
  }

  formSubmit() {
    if(this.user.username == '' || this.user.username == null) {
      // alert("User is required ");
      this.snack.open("Username is required",'',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //Success
        console.log(data);
        //alert("You are successfully registered");
        swal.fire('success', 'Successfully registered, User ID is ' + data.id, 'success');
      },
      (error) => {
        //error
        console.log(error);
        //alert("Something went wrong on Server");
        this.snack.open(error.error,'',{
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    );
  }
}
