import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Create } from 'src/app/models/create';
import { CreateService } from 'src/app/services/create.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private createService:CreateService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(10)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
    })
  }

  saveCreate(){
    
    const create: Create={
      id:0,
      name:this.myForm.get('name')?.value,
      password:this.myForm.get('password')?.value,
      email:this.myForm.get('email')?.value,
    };

    this.createService.addCreate(create)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/creates']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
