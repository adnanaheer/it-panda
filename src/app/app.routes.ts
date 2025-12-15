import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './services/angular/angular.component';
import { CmswebComponent } from './services/cmsweb/cmsweb.component';
import { DigitalmarketingComponent } from './services/digitalmarketing/digitalmarketing.component';
import { ErpComponent } from './services/erp/erp.component';
import { GraphicdesignComponent } from './services/graphicdesign/graphicdesign.component';
import { LandingpagesComponent } from './services/landingpages/landingpages.component';
import { MobappdevelopmentComponent } from './services/mobappdevelopment/mobappdevelopment.component';
import { ReactComponent } from './services/react/react.component';
import { ServicesComponent } from './services/services.component';
import { SoftwaredevelopmentComponent } from './services/softwaredevelopment/softwaredevelopment.component';
import { WebdesignComponent } from './services/webdesign/webdesign.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'about',
      component: AboutUsComponent,
      title: 'About Us'
    },
    {
      path: 'Team',
      component: TeamComponent,
      title: 'Team'
    },
    {
      path: 'contact',
      component: ContactUsComponent,
      title: 'Contact'
    },
    {
      path: 'portfolio',
      component: PortfolioComponent,
      title: 'Portfolio'
    },
    {
      path: 'service',
      component: ServicesComponent,
      title: 'Service'
    },
    {
      path: 'careers',
      component: CareersComponent,
      title: 'Careers'
    },
    {
      path: 'service/angular',
      component: AngularComponent,
      title: 'Service-Angular'
    },
    {
      path: 'service/cms',
      component: CmswebComponent,
       title: 'Service-Cms'
    },
    {
      path: 'service/digitalmarket',
      component: DigitalmarketingComponent,
       title: 'Service-Digital-Marketing'
    },
    {
      path: 'service/erp',
      component: ErpComponent,
       title: 'Service-Erp'
    },
    {
      path: 'service/graphicdesign',
      component: GraphicdesignComponent,
       title: 'Service-Graphic-Design'
    },
    {
      path: 'service/landingpage',
      component: LandingpagesComponent,
       title: 'Service-Landing-Page'
    },
    {
      path: 'service/mobileapplicationdevelopment',
      component: MobappdevelopmentComponent,
       title: 'Service-Mobile-Application'
    },
    {
      path: 'service/react',
      component: ReactComponent,
       title: 'Service-React'
    },
    {
      path: 'service/softwaredevelopment',
      component: SoftwaredevelopmentComponent,
       title: 'Service-Software-Development'
    },
    {
      path: 'service/websitedesign',
      component: WebdesignComponent,
       title: 'Service-Website-Design'
    },
];