import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProgresoService } from 'src/app/services/progreso.service'; 

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {
  progresoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private progresoService: ProgresoService,
    private loginService: LoginService
  ) {
    this.progresoForm = this.fb.group({
      newPeso: ['', Validators.required],
      newAltura: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  resetProgreso() {
    if (this.progresoForm.valid) {
      const newPesoControl = this.progresoForm.get('newPeso');
      const newAlturaControl = this.progresoForm.get('newAltura');

      if (newPesoControl && newAlturaControl) {
        const newPeso = newPesoControl.value;
        const newAltura = newAlturaControl.value;
        let user = this.loginService.getCurrentAuthUser
        this.progresoService.resetProgreso(newPeso, newAltura, user.id)
          .subscribe(
            () => {
              user.peso= newPeso;
              user.altura=newAltura;
              this.loginService.setCurrentAuthUser(user)
              this.snackBar.open('Progreso restablecido correctamente', '', {
                duration: 3000,
              });
              this.router.navigate(['/cuenta']);
            },
            (error) => {
              // Manejar errores en el restablecimiento de progreso
              console.log('Error al restablecer el progreso:', error);
            }
          );
      }
    }
  }
}
