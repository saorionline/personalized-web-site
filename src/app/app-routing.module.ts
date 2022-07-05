import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/dashboards/pages/search/search.component';
import { IconsComponent } from './components/dashboards/icons/icons/icons.component';
import { FeatherIconsComponent } from './components/dashboards/icons/feather-icons/feather-icons.component';
import { LineIconsComponent } from './components/dashboards/icons/line-icons/line-icons.component';
import { IcofontIconsComponent } from './components/dashboards/icons/icofont-icons/icofont-icons.component';
import { OthersComponent } from './components/dashboards/others/others/others.component';
import { UsersCardComponent } from './components/dashboards/others/users-card/users-card.component';
import { NotificationsComponent } from './components/dashboards/others/notifications/notifications.component';
import { TimelineComponent } from './components/dashboards/others/timeline/timeline.component';
import { InvoiceTemplateComponent } from './components/dashboards/others/invoice-template/invoice-template.component';
import { GalleryComponent } from './components/dashboards/others/gallery/gallery.component';
import { FaqComponent } from './components/dashboards/others/faq/faq.component';
import { PricingComponent } from './components/dashboards/others/pricing/pricing.component';
import { ProfileComponent } from './components/dashboards/others/profile/profile.component';
import { ProfileSettingsComponent } from './components/dashboards/others/profile-settings/profile-settings.component';
import { ErrorComponent } from './components/dashboards/others/error/error.component';

const routes: Routes = [
  {path: '', component: IconsComponent},
  {path: 'search', component: SearchComponent},
  {
    path: 'icons', component: IconsComponent,
    children: [
      {
        path: 'feather-icons',
        data: { breadcrumb: 'Feather Icons' },
        component: FeatherIconsComponent
      },
      {
        path: 'line-icons',
        data: { breadcrumb: 'Line Icons' },
        component: LineIconsComponent
      },
      {
        path: 'icofont-icons',
        data: { breadcrumb: 'Icofont Icons' },
        component: IcofontIconsComponent
      }
    ]
  },
  {
    path: 'others', component: OthersComponent,
    children: [
      {
        path: 'users-card',
        data: { breadcrumb: 'Users Card' },
        component: UsersCardComponent
      },
      {
        path: 'notifications',
        data: { breadcrumb: 'Notifications' },
        component: NotificationsComponent
      },
      {
        path: 'timeline',
        data: { breadcrumb: 'Timeline' },
        component: TimelineComponent
      },
      {
        path: 'invoice-template',
        data: { breadcrumb: 'Invoice Template' },
        component: InvoiceTemplateComponent
      },
      {
        path: 'gallery',
        data: { breadcrumb: 'Gallery' },
        component: GalleryComponent
      },
      {
        path: 'faq',
        data: { breadcrumb: 'Faq' },
        component: FaqComponent
      },
      {
        path: 'pricing',
        data: { breadcrumb: 'Pricing' },
        component: PricingComponent
      },
      {
        path: 'profile',
        data: { breadcrumb: 'Profile' },
        component: ProfileComponent
      },
      {
        path: 'profile-settings',
        data: { breadcrumb: 'Profile Settings' },
        component: ProfileSettingsComponent
      },
      {
        path: 'error-404',
        data: { breadcrumb: 'Error' },
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
