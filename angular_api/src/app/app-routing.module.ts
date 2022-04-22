import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';

const routes: Routes = [
  {path: 'update-book/:id', component: UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
