import { Routes } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about';
import {RegistrationForm} from './registration-form/registration-form';
import {Main} from './main/main';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'register', component: RegistrationForm },
  { path: 'main', component: Main }
];
