import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChansonsComponent } from './chansons/chansons.component';
import { AddChansonComponent } from './add-chanson/add-chanson.component';
import { UpdateChansonComponent } from './update-chanson/update-chanson.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ChansonGuard } from './chanson.guard';
const routes: Routes = [
  {path: "chansons",component:ChansonsComponent},
  {path: "add-chanson",component:AddChansonComponent,canActivate:[ChansonGuard]},
  {path: "", redirectTo: "chansons", pathMatch: "full"},
  {path: "updateChanson/:id", component: UpdateChansonComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
