import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';
import { Career } from './pages/career/career';

export const routes: Routes = [
    {path:'', component: Home, title: 'Home'},
    {path:'pages/about', component:About, title: 'About-Us'},
    {path:'pages/services', component:Services, title: 'Services-Us'},
    {path:'pages/portfolio', component:Portfolio, title: 'Portfolio'},
    {path: 'pages/career', component:Career, title: 'Career'},
    {path: 'pages/contact', component:Contact, title: 'Contact-Us'}
];
