import { Routes, RouterModule } from '@angular/router';
import { Component, ModuleWithProviders } from '@angular/core';


// Compontes used in route.
import { HomeComponent } from '../../home/home.component';
import { AnnouncementComponent } from '../../announcement/announcement.component';

/*
  Created By   : Saddam
  Created Date : 25-11-2017
  Purpose      : Defining route with their components.
*/
const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'announcement', component: AnnouncementComponent },
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes); 
