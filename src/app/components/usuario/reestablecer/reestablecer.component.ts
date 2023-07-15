import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.component.html',
  styleUrls: ['./reestablecer.component.css']
})
export class ReestablecerComponent implements OnInit {
  resetForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private router:Router,
    private snackBar:MatSnackBar,
    private loginService: LoginService

    ) {
    this.resetForm = this.fb.group({
      name: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  resetPassword() {
    if (this.resetForm.valid) {
      const nameControl = this.resetForm.get('name');
      const newPasswordControl = this.resetForm.get('newPassword');
  
      if (nameControl && newPasswordControl) {
        const name = nameControl.value;
        const newPassword = newPasswordControl.value;
  
        this.loginService.resetPassword(name, newPassword)
          .subscribe(
            () => {
              this.snackBar.open('Contraseña restablecida correctamente', '', {
                duration: 3000,
              });
              this.router.navigate(['/login']);
            },
            (error) => {
              // Manejar errores en el restablecimiento de contraseña
              console.log('Error al restablecer la contraseña:', error);
            }
          );
      }
    }
  }
}