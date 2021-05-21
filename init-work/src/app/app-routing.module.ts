import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntractbwcompComponent } from './intractbwcomp/intractbwcomp.component';
import { PipeoperationComponent } from './pipeoperation/pipeoperation.component';
import { SrtuctdirtestComponent } from './srtuctdirtest/srtuctdirtest.component';
import { StudyservicesComponent } from './studyservices/studyservices.component';
import { TestComponent } from './test/test.component';




const routes: Routes = [
  {path:"pipe-operation",component: PipeoperationComponent },
  {path:"struct-operation",component: SrtuctdirtestComponent },
  {path:"intract-operation",component: IntractbwcompComponent },
  {path:"study-services",component: StudyservicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

