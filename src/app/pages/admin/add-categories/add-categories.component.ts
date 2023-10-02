import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit{

  category = {
    title: '',
    description: '',
  };

  constructor(private catService:CategoryService, private snack:MatSnackBar) {}

  addCategory() {
    if (this.category.title.trim()=='' || this.category.title == null) {
      this.snack.open("All fields are required !",'',{
        duration: 3000
      });
      return;
    }

    // addd
    this.catService.addCategory(this.category).subscribe((data:any) => {
      Swal.fire("Success !!",'category is added successfully','success');
    },
    (error:any) => {
      Swal.fire('Error',error.error,'error');
    });
  }

  ngOnInit(): void {

  }
}
