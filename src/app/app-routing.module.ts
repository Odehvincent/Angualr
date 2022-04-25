import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  {path: 'our-team', component: OurTeamComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: BodyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OurTeamComponent,AboutComponent]