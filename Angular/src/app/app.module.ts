import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppRouting } from './shared/routing/app-routing.module';

import { AppComponent } from './app.component';

// Common header & footer component
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';

// Custom components
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';

@NgModule({
    declarations: [
        AppComponent,

        // Header & Footer component
        FooterComponent,
        HeaderComponent,

        // Custom components
        HomeComponent,
        AnnouncementComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }