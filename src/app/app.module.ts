import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexHeaderComponent } from './index-header/index-header.component';
import { IndexFooterComponent } from './index-footer/index-footer.component';
import { SearchComponent } from './search/search.component';
import { HotSearchComponent } from './hot-search/hot-search.component';
import { MySearchComponent } from './my-search/my-search.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    IndexFooterComponent,
    SearchComponent,
    HotSearchComponent,
    MySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
