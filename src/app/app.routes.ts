import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';
import { Career } from './pages/career/career';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'pages/about', component:About},
    {path:'pages/services', component:Services},
    {path:'pages/portfolio', component:Portfolio},
    {path: 'pages/career', component:Career},
    {path: 'pages/contact', component:Contact}
];
