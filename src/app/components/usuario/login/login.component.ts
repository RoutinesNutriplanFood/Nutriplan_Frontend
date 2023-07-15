import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  color = "accent";

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.myForm.invalid) {
      return;
    }
  
    const email = this.myForm.get('email')?.value;
    const password = this.myForm.get('password')?.value;
  
    this.loginService.login(email, password).subscribe(
      (user: any) => {
        this.loginService.setCurrentAuthUser(user);
        // Inicio de sesión exitoso, redirigir al usuario a la página deseada
        this.router.navigate(['/home']);
      },
      (error) => {
        // Error en el inicio de sesión, mostrar mensaje de error o realizar alguna acción adicional
        this.snackBar.open('Credenciales inválidas', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    );
  }
  
}
