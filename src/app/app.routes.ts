import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ArtShowcaseComponent } from './sections/art-showcase/art-showcase.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'art/:id', component:ArtShowcaseComponent}
];


@NgModule({
declarations: [],
imports: [
  [RouterModule.forRoot(routes)]
],
exports:[RouterModule]

})

export class AppRoutesModule { }
