import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';
import { Career } from './pages/career/career';
import { Angular } from './pages/services/angular/angular';
import { React } from './pages/services/react/react';
import { Wordpress } from './pages/services/wordpress/wordpress';
import { Seo } from './pages/services/seo/seo';
import { UiUx } from './pages/services/ui-ux/ui-ux';
import { GraphicDesign } from './pages/services/graphic-design/graphic-design';
import { Faq } from './shared/faq/faq';
import { Terms } from './shared/terms/terms';

export const routes: Routes = [
    {path:'', component: Home, title: 'Home'},
    {path:'pages/about', component:About, title: 'About-Us'},
    {path:'pages/services', component:Services, title: 'Services-Us'},
    {path: 'pages/career', component:Career, title: 'Career'},
    {path: 'pages/contact', component:Contact, title: 'Contact-Us'},
    {path: 'pages/services/angular', component:Angular, title: 'Services/Angular'},
    {path: 'pages/services/react', component:React, title: 'Services/React'},
    {path: 'pages/services/wordpress', component:Wordpress, title: 'Services/Wordpress'},
    {path: 'pages/services/seo', component:Seo, title: 'Services/SEO'},
    {path: 'pages/services/ui-ux', component:UiUx, title: 'Services/UI and UX'},
    {path: 'pages/services/graphic-design', component:GraphicDesign, title: 'Services/Graphic Dsign'},
    {path: 'shared/faq', component:Faq, title: "FAQ's"},
    {path: 'shared/terms', component:Terms, title: 'Terms & Conditions'}


];
