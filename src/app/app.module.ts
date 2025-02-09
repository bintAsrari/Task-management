import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; // ✅ Import RouterModule
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Example
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component'; // Example

const routes: Routes = [ // ✅ Define Routes Here
  { path: '', component: DashboardComponent },
  { path: 'task-dialog', component: TaskDialogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // ✅ Add RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
