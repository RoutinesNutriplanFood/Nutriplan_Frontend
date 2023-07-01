import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
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
import { ReestablecerComponent } from './componets/usuario/reestablecer/reestablecer.component';
import { RegisterComponent } from './componets/usuario/register/register.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'agregar', component:AddRegistroComponent },
{ path: 'add', component: CrearExpertoComponent },
{ path: 'experto', component: ListarExpertoComponent },
{ path: 'modificar-experto', component: ModificarExpertoComponent },
{ path: 'crear-plan', component: CrearPlanComponent },
{ path: 'lista-plan', component: ListarPlanComponent },
{ path: 'crear-receta', component: CrearRecetasComponent },
{ path: 'listar-receta', component: ListarRecetasComponent },
{ path: 'registro', component: ListRegistroComponent },
{ path: 'cuenta', component: CuentaComponent },
{ path: 'login', component:LoginComponent },
{ path: 'reset-password', component: ReestablecerComponent },
{ path: 'account', component:RegisterComponent },




{ path: '', redirectTo: 'account', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
