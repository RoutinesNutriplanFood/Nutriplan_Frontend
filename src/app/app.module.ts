import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componets/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddRegistroComponent } from './componets/add-registro/add-registro.component';
import { CrearExpertoComponent } from './componets/admin/experto/crear-experto/crear-experto.component';
import { ListarExpertoComponent } from './componets/admin/experto/listar-experto/listar-experto.component';
import { ModificarExpertoComponent } from './componets/admin/experto/modificar-experto/modificar-experto.component';
import { CrearPlanComponent } from './componets/admin/plan/crear-plan/crear-plan.component';
import { ListarPlanComponent } from './componets/admin/plan/listar-plan/listar-plan.component';
import { CrearRecetasComponent } from './componets/admin/recetas/crear-recetas/crear-recetas.component';
import { ListarRecetasComponent } from './componets/admin/recetas/listar-recetas/listar-recetas.component';
import { ListRegistroComponent } from './componets/list-registro/list-registro.component';
import { CuentaComponent } from './componets/usuario/cuenta/cuenta.component';
import { LoginComponent } from './componets/usuario/login/login.component';
import { ReestablecerComponent} from './componets/usuario/reestablecer/reestablecer.component';
import { RegisterComponent } from './componets/usuario/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddRegistroComponent,
    CrearExpertoComponent,
    ListarExpertoComponent,
    ModificarExpertoComponent,
    CrearPlanComponent,
    ListarPlanComponent,
    CrearRecetasComponent,
    ListarRecetasComponent,
    ListRegistroComponent,
    CuentaComponent,
    LoginComponent,
    ReestablecerComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
