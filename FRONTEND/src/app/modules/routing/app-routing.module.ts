import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '@components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'client',
    loadChildren: () =>
      import('../client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('../catalog/catalog.module').then((m) => m.CatalogModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
