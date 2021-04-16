import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'portfolio' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PortfolioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
