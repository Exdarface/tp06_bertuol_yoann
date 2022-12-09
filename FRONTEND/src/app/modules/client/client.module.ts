import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { ClientInfoComponent } from '@components/client-info/client-info.component';
import { FormComponent } from '@components/form/form.component';
import { ClientService } from '@services/client/client.service';
import { PhonePipePipe } from '@pipes/phone-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'account', component: ClientInfoComponent },
  { path: 'register', component: FormComponent },
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [
    FormComponent,
    ClientInfoComponent,
    LoginComponent,
    PhonePipePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [ClientService],
  exports: [RouterModule],
})
export class ClientModule {}
