import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ArtShowcaseComponent } from './sections/art-showcase/art-showcase.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'art/:id', component:ArtShowcaseComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
declarations: [],
imports: [
  [RouterModule.forRoot(routes)]
],
exports:[RouterModule]

})

export class AppRoutesModule { }
