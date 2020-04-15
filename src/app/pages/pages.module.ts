import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { PagesComponent } from './pages.component';
import { StoreComponent } from './stores/store/store.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
      StoreComponent
  ],
  imports: [
    BrowserModule,
    ProgressBarComponent
  ],
  providers: [
  ],
  bootstrap: [PagesComponent]
})
export class AppModule { }
