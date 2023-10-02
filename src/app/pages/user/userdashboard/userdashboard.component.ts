import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  categories:any;
  constructor(
    private _cat:CategoryService
  ){}

  ngOnInit(): void {
      this._cat.categories().subscribe(
        (data:any) => {
          this.categories = data;
        },
        (error:any) => {
          Swal.fire('Error','Error occurs while categories loading','error');
        }
      );
  }

}
