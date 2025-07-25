import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CompanyCardComponent } from './company-card/company-card.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        TopbarComponent,
        CompanyCardComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
