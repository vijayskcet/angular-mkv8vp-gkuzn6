import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MultiCheckboxGroupExampleComponent } from './src/multi-checkbox-group-example.component'

@Component({
    selector: 'app-component',
    template: '<multi-checkbox-group-example></multi-checkbox-group-example>'
})
export class AppComponent {}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgSelectModule,
        NgOptionHighlightModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        MultiCheckboxGroupExampleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}



