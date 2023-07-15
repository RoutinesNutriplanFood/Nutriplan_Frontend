import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from'@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRegistroComponent } from './components/add-registro/add-registro.component';
import { ListRegistroComponent } from './components/list-registro/list-registro.component';
import { CrearPlanComponent } from './components/admin/plan/crear-plan/crear-plan.component';
import { ListarPlanComponent } from './components/admin/plan/listar-plan/listar-plan.component';
import { CrearExpertoComponent } from './components/admin/experto/crear-experto/crear-experto.component';
import { ListarExpertoComponent } from './components/admin/experto/listar-experto/listar-experto.component';
import { CrearRecetasComponent } from './components/admin/recetas/crear-recetas/crear-recetas.component';
import { ListarRecetasComponent } from './components/admin/recetas/listar-recetas/listar-recetas.component';
import { RegisterComponent } from './components/usuario/register/register.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { ModificarExpertoComponent } from './components/admin/experto/modificar-experto/modificar-experto.component';
import { ReestablecerComponent } from './components/usuario/reestablecer/reestablecer.component';
import { CuentaComponent } from './components/usuario/cuenta/cuenta.component';
import { ModificarPlanComponent } from './components/admin/plan/modificar-plan/modificar-plan.component';
import { ModificarRecetasComponent } from './components/admin/recetas/modificar-recetas/modificar-recetas.component';
import { ProgresoComponent } from './components/usuario/progreso/progreso.component';
import { PlanesRecomendadosComponent } from './components/admin/plan/planes-recomendados/planes-recomendados.component';
import { ExpertoRecomendadoComponent } from './components/admin/experto/experto-recomendado/experto-recomendado.component';
import { MisRecetasComponent } from './components/admin/recetas/mis-recetas/mis-recetas.component'; 




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AddRegistroComponent,
    ListRegistroComponent,
    CrearPlanComponent,
    ListarPlanComponent,
    CrearExpertoComponent,
    ListarExpertoComponent,
    CrearRecetasComponent,
    ListarRecetasComponent,
    RegisterComponent,
    LoginComponent,
    ModificarExpertoComponent,
    ReestablecerComponent,
    CuentaComponent,
    ModificarPlanComponent,
    ModificarRecetasComponent,
    ProgresoComponent,
    PlanesRecomendadosComponent,
    ExpertoRecomendadoComponent,
    MisRecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,MatMenuModule,MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    CdkAccordionModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
