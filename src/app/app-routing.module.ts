import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegisterComponent } from './components/usuario/register/register.component';
import { AddRegistroComponent } from './components/add-registro/add-registro.component';
import { ListRegistroComponent } from './components/list-registro/list-registro.component';
import { CrearExpertoComponent } from './components/admin/experto/crear-experto/crear-experto.component';
import { ListarExpertoComponent } from './components/admin/experto/listar-experto/listar-experto.component';
import { ModificarExpertoComponent } from './components/admin/experto/modificar-experto/modificar-experto.component';
import { ListarRecetasComponent } from './components/admin/recetas/listar-recetas/listar-recetas.component';
import { CrearRecetasComponent } from './components/admin/recetas/crear-recetas/crear-recetas.component';
import { ReestablecerComponent } from './components/usuario/reestablecer/reestablecer.component';
import { CuentaComponent } from './components/usuario/cuenta/cuenta.component';
import { CrearPlanComponent } from './components/admin/plan/crear-plan/crear-plan.component';
import { ListarPlanComponent } from './components/admin/plan/listar-plan/listar-plan.component';
import { ModificarPlanComponent } from './components/admin/plan/modificar-plan/modificar-plan.component';
import { ModificarRecetasComponent } from './components/admin/recetas/modificar-recetas/modificar-recetas.component';
import { ProgresoComponent } from './components/usuario/progreso/progreso.component';
import { PlanesRecomendadosComponent } from './components/admin/plan/planes-recomendados/planes-recomendados.component';
import { ExpertoRecomendadoComponent } from './components/admin/experto/experto-recomendado/experto-recomendado.component';
import { MisRecetasComponent } from './components/admin/recetas/mis-recetas/mis-recetas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experto', component: ListarExpertoComponent },
  { path: 'add', component: CrearExpertoComponent },
  { path: 'login', component:LoginComponent },
  { path: 'account', component:RegisterComponent },
  { path: 'registro', component: ListRegistroComponent },
  { path: 'agregar', component:AddRegistroComponent },
  { path: 'modificar-experto', component: ModificarExpertoComponent },
  { path: 'lista-receta', component: ListarRecetasComponent },
  { path: 'crear-receta', component: CrearRecetasComponent },
  { path: 'reset-password', component: ReestablecerComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'crear-plan', component: CrearPlanComponent },
  { path: 'lista-plan', component: ListarPlanComponent },
  { path: 'modificar-plan', component: ModificarPlanComponent },
  { path: 'modificar-receta', component: ModificarRecetasComponent },
  { path: 'progreso', component: ProgresoComponent },
  { path: 'plan', component: PlanesRecomendadosComponent },
  { path: 'experto-recomendacion', component: ExpertoRecomendadoComponent },
  { path: 'mis-recetas', component: MisRecetasComponent },
  { path: '', redirectTo: 'account', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
