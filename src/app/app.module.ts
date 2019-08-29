import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardListComponent} from './card-list/card-list.component';
import {CardDetailsComponent} from './card-details/card-details.component';
import {HttpClientModule} from '@angular/common/http';
import { CardListItemComponent } from './card-list/card-list-item/card-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        CardListComponent,
        CardDetailsComponent,
        CardListItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
