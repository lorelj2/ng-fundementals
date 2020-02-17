import { Routes } from '@angular/router'
import { EventListComponent } from './event/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';


export const appRoutes:Routes =
[
  {path:'events', component: EventListComponent},
  {path:'event/:id', component: EventDetailsComponent},
  {path:'', redirectTo:'/events', pathMatch:'full'}


]
