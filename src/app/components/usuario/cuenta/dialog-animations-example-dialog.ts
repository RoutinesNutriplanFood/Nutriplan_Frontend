import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Create } from 'src/app/models/create';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateService } from 'src/app/services/create.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
/**
 * @title Dialog Animations
 */

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  dataSource = new MatTableDataSource<Create>();
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private createService: CreateService,
    private snackBar:MatSnackBar,
    private loginService:LoginService, 
    private router:Router
    
    ) {}
  
  deleteCreate(){
    const user = this.loginService.getCurrentAuthUser 
    this.createService.deleteCreate(user.id).subscribe(()=>{
      this.dialogRef.close();
      this.snackBar.open("Registro eliminado",'',{
        duration:3000,
      })
      this.loginService.logout();
      this.router.navigate(["/login"])
    })
}
}