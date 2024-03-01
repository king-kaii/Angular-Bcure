import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';

const routes: Routes = [
  {path:'upload', component: FileUploadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
