import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
{
  path:'user', component :UserComponent  ,children :[
    {
      path:'edit',component:EditUserComponent
    }
  ]
},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
