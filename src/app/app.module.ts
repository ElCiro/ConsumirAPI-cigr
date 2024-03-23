import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonesCigrComponent } from './digimones-cigr/digimones-cigr.component';
import { digimonescigrservices } from './digimones-cigr/digimonescigr.service';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DigimonesCigrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    digimonescigrservices,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
