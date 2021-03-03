import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { TabsModule } from '@fundamental-ngx/core';
import { SwitchModule } from '@fundamental-ngx/core';
import { TileModule } from '@fundamental-ngx/core';
import { CheckboxModule } from '@fundamental-ngx/core';
import { DialogModule } from '@fundamental-ngx/core';
import { ButtonModule } from '@fundamental-ngx/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabService } from './tab.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FundamentalNgxCoreModule,
    TabsModule,
    SwitchModule,
    TileModule,
    CheckboxModule,
    DialogModule,
    ButtonModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
