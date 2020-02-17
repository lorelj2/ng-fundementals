import { Routes } from '@angular/router'
import { EventListComponent } from './event/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { CreateEventComponent } from './event/create-event.component';
import { Error404Component } from './errors/Error404.component';
import { EventDetailsActivatorComponent } from './event/event-details/event-detail-activator.component';


export const appRoutes:Routes =
[
  {path:'event/new', component: CreateEventComponent},
  {path:'events', component: EventListComponent},
  {path:'404', component: Error404Component},
  {path:'event/:id', component: EventDetailsComponent, canActivate: [EventDetailsActivatorComponent]},
  {path:'', redirectTo:'/events', pathMatch:'full'}


]
