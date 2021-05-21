import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SrtuctdirtestComponent } from './srtuctdirtest/srtuctdirtest.component';
import { IntractbwcompComponent } from './intractbwcomp/intractbwcomp.component';
import { PipeoperationComponent } from './pipeoperation/pipeoperation.component';
import { StudyservicesComponent } from './studyservices/studyservices.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SrtuctdirtestComponent,
    IntractbwcompComponent,
    PipeoperationComponent,
    StudyservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
