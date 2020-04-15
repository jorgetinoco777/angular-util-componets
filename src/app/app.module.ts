import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Components home
import { UserLoginComponent } from './login/user-login/user-login.component';

//Components Index
import { APP_ROUTES } from './app.routes.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component'
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TableComponent } from './components/table/table.component';
import { StoreComponent } from './pages/stores/store/store.component';
import { ModalStoreComponent } from './pages/stores/store/modal-store.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    PagesComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,  
    SidebarComponent,
    PageHeaderComponent,
    ProgressBarComponent,
    TableComponent,
    StoreComponent,
    ModalStoreComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //PagesComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
